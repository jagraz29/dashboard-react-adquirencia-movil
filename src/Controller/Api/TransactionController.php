<?php

namespace App\Controller\Api;

use App\Dto\TransactionTableDto;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Csv;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Requests;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/transaction")
 */
class TransactionController extends BaseController
{
  /**
   * @Route("/", name="api_transaction_index", methods={"GET"})
   */
  public function index(Request $request)
  {
    $filters = $request->query->all();
    $transactionTable = $this->setDataToDto($filters);

    $errors = $this->validator->validate($transactionTable);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }

    $filters = $this->dtoToArray($transactionTable);
    $data = [
      'pagination' => [
        'page' => $transactionTable->getPerPage(),
        'limit' => $transactionTable->getLimit(),
      ],
      'filter' => $filters,
    ];

    $transactions = $this->apify->consult('transaction', Requests::POST, $data);

    if (isset($transactions['success']) && $transactions['success'] === true) {
      $data = [
        'transactions' => $transactions['data']['data'],
        'pagination' => $transactions['data']['pagination'],
        'aggregations' => $transactions['data']['aggregations'],
      ];
      return $this->jsonResponse(true, $data, $this->translator->trans('Successful query'));
    }

    return $this->jsonResponse(
      false,
      [],
      isset($transactions['textResponse']) ? $transactions['textResponse'] : 'Apify error',
      400
    );
  }

  /**
   * @Route("/detail/{id}", name="api_transaction_detail", methods={"GET"})
   */
  public function show(int $id)
  {
    $data = [
      'filter' => [
        'referencePayco' => $id,
      ],
    ];

    $transaction = $this->apify->consult('transaction/detail', Requests::POST, $data);

    if (isset($transaction['success']) && $transaction['success'] === true) {
      $message = isset($transaction['textResponse'])
        ? $transaction['textResponse']
        : 'Transaction detail';
      return $this->jsonResponse(true, $transaction['data'], $message);
    }

    $message = isset($transaction['textResponse'])
      ? $transaction['textResponse']
      : 'Error apify consult';
    return $this->jsonResponse(false, [], $message, 400);
  }

  /**
   * @Route("/export.{_format}", requirements={"_format":"csv|xlsx"}, name="api_transaction_export", methods={"GET"})
   */
  public function export(Request $request)
  {
    $format = $request->attributes->get('_format');
    $filters = $request->query->all();
    $transactionTable = $this->setDataToDto($filters);

    $errors = $this->validator->validate($transactionTable);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }

    $filters = $this->dtoToArray($transactionTable);
    $data = [
      'pagination' => [
        'page' => 1,
        'limit' => $transactionTable->getLimit(),
      ],
      'filter' => $filters,
    ];

    $transactions = $this->apify->consult('transaction', Requests::POST, $data);

    if (isset($transactions['success']) && $transactions['success'] === true) {
      $transactions = $transactions['data']['data'];
    }
    $data = $this->setExportsHeaders($transactions);

    $spreadsheet = new Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();
    $sheet->fromArray($data);

    if ($format === 'csv') {
      return $this->dataToCsv($spreadsheet);
    } else {
      return $this->dataToXlsx($spreadsheet);
    }
  }

  /**
   * @param array $filters
   * @return TransactionTableDto
   */
  private function setDataToDto(array $filters): TransactionTableDto
  {
    $transactionTable = new TransactionTableDto();
    $transactionTable->setTransactionInitialDate(
      isset($filters['fromDate']) ? $filters['fromDate'] : null
    );
    $transactionTable->setTransactionEndDate(isset($filters['toDate']) ? $filters['toDate'] : null);
    $transactionTable->setLimit(isset($filters['limit']) ? $filters['limit'] : 15);
    $transactionTable->setPage(isset($filters['page']) ? $filters['page'] : 1);
    $transactionTable->setStatusId(isset($filters['statusId']) ? (int) $filters['statusId'] : null);
    $transactionTable->setSearch(isset($filters['search']) ? $filters['search'] : null);
    $transactionTable->setPaymentMethodId(
      isset($filters['paymentMethod']) ? $filters['paymentMethod'] : null
    );
    $transactionTable->setEnviromentId(
      isset($filters['environment']) ? (int) $filters['environment'] : null
    );

    return $transactionTable;
  }

  private function dataToCsv(Spreadsheet $spreadsheet)
  {
    $writer = new Csv($spreadsheet);
    $writer->setEnclosure('');

    // Crear archivo temporal en el sistema
    $fileName = sprintf('%s/reporte_transactions_%s.csv', sys_get_temp_dir(), time());

    // Guardar el archivo de csv en el directorio temporal del sistema
    $writer->save($fileName);

    // Retornar excel como descarga y eliminar archivo
    return $this->file($fileName)->deleteFileAfterSend();
  }

  private function dataToXlsx(Spreadsheet $spreadsheet)
  {
    $writer = new Xlsx($spreadsheet);

    // Crear archivo temporal en el sistema
    $fileName = sprintf('%s/reporte_transactions_%s.xlsx', sys_get_temp_dir(), time());

    // Guardar el archivo de excel en el directorio temporal del sistema
    $writer->save($fileName);

    // Retornar excel como descarga y eliminar archivo
    return $this->file($fileName)->deleteFileAfterSend();
  }

  private function setExportsHeaders(array $transactions)
  {
    $headers = [
      'transaccion',
      'factura',
      'fecha',
      'descripcion',
      'franquicia',
      'valor',
      'estado',
      'ambiente',
    ];

    array_unshift($transactions, $headers);
    return $transactions;
  }
}
