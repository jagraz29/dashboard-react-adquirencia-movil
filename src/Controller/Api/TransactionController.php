<?php

namespace App\Controller\Api;

use Requests;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/transaction")
 */
class TransactionController extends BaseController
{
  /**
   * @Route("/detail/{id}", name="api_transaction_detail", methods={"GET"})
   * @param int $id
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
}
