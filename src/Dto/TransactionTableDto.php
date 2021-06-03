<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;

class TransactionTableDto
{
  private $perPage;

  private $currentPage;

  /**
   * @Assert\Date(message="date.format")
   */
  private $toDate;

  /**
   * @Assert\Date(message="date.format")
   */
  private $fromDate;

  public function getPerPage()
  {
    return $this->perPage;
  }

  public function setPerPage($perPage): self
  {
    $this->perPage = $perPage;
    return $this;
  }

  public function getCurrentPage()
  {
    return $this->currentPage;
  }

  public function setCurrentPage($currentPage): self
  {
    $this->currentPage = $currentPage;
    return $this;
  }

  public function getToDate()
  {
    return $this->toDate;
  }

  public function setToDate($toDate): self
  {
    $this->toDate = $toDate;
    return $this;
  }

  public function getFromDate()
  {
    return $this->fromDate;
  }

  public function setFromDate($fromDate): self
  {
    $this->fromDate = $fromDate;
    return $this;
  }
}
