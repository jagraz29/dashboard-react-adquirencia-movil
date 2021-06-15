<?php

namespace App\Controller\Api;

use App\Dto\TransactionTableDto;
use App\Service\Apify;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Csv;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Requests;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * @Route("/api/transaction")
 */
class TransactionController extends BaseController
{
  /**
   * @var string
   */
  private $urlAppRest;
  /**
   * @var string
   */
  private $appRestEnv;
  /**
   * @var Requests
   */
  private $requests;

  public function __construct(
    string $urlAppRest,
    string $appRestEnv,
    Apify $apify,
    ValidatorInterface $validator,
    TranslatorInterface $translator
  ) {
    parent::__construct($apify, $validator, $translator);
    $this->urlAppRest = $urlAppRest;
    $this->appRestEnv = $appRestEnv;
  }

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
        'limit' => 1000,
      ],
      'filter' => $filters,
    ];

    $transactions = $this->apify->consult('transaction', Requests::POST, $data);

    if (isset($transactions['success']) && $transactions['success'] === true) {
      $transactions = $transactions['data']['data'];
    }
    $data = $this->formatDataToExport($transactions);

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
   * @Route("/send/email/{id}/{email}", name="api_transaction_send_email", methods={"GET"})
   */
  public function sendEmail(int $id, string $email)
  {
    $url = sprintf(
      '%semail/transaccion?%s',
      $this->urlAppRest . $this->appRestEnv,
      http_build_query([
        'transaction_id' => $id,
        'email_adicional' => $email,
      ])
    );
    $sendEmailResponse = Requests::POST(
      $this->urlAppRest . $this->appRestEnv . 'email/transaction'
    );

    if (isset($sendEmailResponse['success']) && $sendEmailResponse['success'] === true) {
      $message = isset($sendEmailResponse['textResponse'])
        ? $sendEmailResponse['textResponse']
        : 'Confirmacion enviada';
      return $this->jsonResponse(true, [], $message);
    }

    $message = isset($sendEmailResponse['textResponse'])
      ? $sendEmailResponse['textResponse']
      : 'Confirmacion enviada';
    return $this->jsonResponse(true, [], $message);
  }

  /**
   * @Route("/receipt/{id}", name="api_transaction_receipt", methods={"GET"})
   */
  public function receipt(int $id)
  {
    $transaction = $this->transactionDetail($id);

    //    if ($transaction !== null) {
    //      return $this->redirectToRoute('api_transaction_detail', ['id' => $id]);
    //    }

    return $this->render('transaction/transactionDetail.html.twig', [
      'tr' => $transaction['data'],
      'user' => $this->getUser(),
    ]);
  }

  private function transactionDetail(int $id)
  {
    $data = [
      'filter' => [
        'referencePayco' => $id,
      ],
    ];

    return $this->apify->consult('transaction/detail', Requests::POST, $data);
  }

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
    $writer->setDelimiter(';');

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

  private function formatDataToExport(array $transactions)
  {
    $data = [];
    foreach ($transactions as $transaction) {
      $row = [
        'ref_payco' => $transaction['referencePayco'],
        'factura' => $transaction['referenceClient'],
        'fecha' => $transaction['transactionDate'],
        'valor' => $transaction['amount'],
        'iva' => $transaction['iva'],
        'moneda' => $transaction['currency'],
        'descripcion' => $transaction['description'],
        'franquicia' => $transaction['paymentMethod'],
        'banco' => $transaction['bank'],
        'tarjeta' => $transaction['card'],
        'estado' => $transaction['status'],
        'respuesta' => $transaction['response'],
        'recibo' => $transaction['receipt'],
        'autorizacion' => $transaction['authorization'],
        'trmDia' => $transaction['trmdia'],
        'tipoDocUser' => $transaction['docType'],
        'cedula' => $transaction['document'],
        'nombres' => $transaction['names'],
        'apellidos' => $transaction['lastnames'],
      ];
      array_push($data, $row);
    }

    array_unshift($data, array_keys($data[0]));
    return $data;
  }
}
