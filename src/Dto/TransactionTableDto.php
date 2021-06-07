<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;

class TransactionTableDto
{
  /**
   * @Assert\Positive(message="positive.format")
   */
  private $page;

  /**
   * @Assert\Positive(message="positive.format")
   */
  private $limit;

  /**
   * @Assert\Date(message="date.format")
   */
  public $transactionInitialDate;

  /**
   * @Assert\Date(message="date.format")
   */
  public $transactionEndDate;

  /**
   * @Assert\Choice({1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10, 11, 12}, message="transaction.state")
   */
  public $statusId;

  /**
   * @Assert\Choice({1, 2}, message="transaction.enviroment")
   */
  public $enviromentId;

  /**
   * @Assert\Length(
   *      min = 2,
   *      max = 3,
   *      minMessage = "paymentMethod",
   *      maxMessage = "paymentMethod"
   * )
   */
  public $paymentMethodId;

  public $search;

  public function getPerPage()
  {
    return $this->page;
  }

  public function setPage($page): self
  {
    $this->page = $page;
    return $this;
  }

  public function getLimit()
  {
    return $this->limit;
  }

  public function setLimit($limit): self
  {
    $this->limit = $limit;
    return $this;
  }

  public function getTransactionInitialDate()
  {
    return $this->transactionInitialDate;
  }

  public function setTransactionInitialDate($transactionInitialDate): self
  {
    $this->transactionInitialDate = $transactionInitialDate;
    return $this;
  }

  public function getTransactionEndDate()
  {
    return $this->transactionEndDate;
  }

  public function setTransactionEndDate($transactionEndDate): self
  {
    $this->transactionEndDate = $transactionEndDate;
    return $this;
  }

  public function getStatusId()
  {
    return $this->statusId;
  }

  public function setStatusId($statusId): self
  {
    $this->statusId = $statusId;
    return $this;
  }

  public function getSearch()
  {
    return $this->search;
  }

  public function setSearch($search): self
  {
    $this->search = $search;
    return $this;
  }

  public function getPaymentMethodId()
  {
    return $this->paymentMethodId;
  }

  public function setPaymentMethodId($paymentMethodId): self
  {
    $this->paymentMethodId = $paymentMethodId;
    return $this;
  }

  public function getEnviromentId()
  {
    return $this->enviromentId;
  }

  public function setEnviromentId($environmentId): self
  {
    $this->enviromentId = $environmentId;
    return $this;
  }
}
