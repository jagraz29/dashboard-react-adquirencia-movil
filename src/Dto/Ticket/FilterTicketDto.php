<?php

namespace App\Dto\Ticket;

class FilterTicketDto
{
  private $estadoTicket;

  private $idTicket;

  /**
   * @return mixed
   */
  public function getEstadoTicket()
  {
    return $this->estadoTicket;
  }

  /**
   * @param mixed $estadoTicket
   */
  public function setEstadoTicket($estadoTicket): void
  {
    $this->estadoTicket = $estadoTicket;
  }

  /**
   * @return mixed
   */
  public function getIdTicket()
  {
    return $this->idTicket;
  }

  /**
   * @param mixed $idTicket
   */
  public function setIdTicket($idTicket): void
  {
    $this->idTicket = $idTicket;
  }
}
