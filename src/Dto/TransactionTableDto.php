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
}
