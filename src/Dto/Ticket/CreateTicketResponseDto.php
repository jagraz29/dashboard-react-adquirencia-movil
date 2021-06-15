<?php

namespace App\Dto\Ticket;

class CreateTicketResponseDto
{
  private $idTicket;

  private $respuesta;

  private $files;

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

  /**
   * @return mixed
   */
  public function getRespuesta()
  {
    return $this->respuesta;
  }

  /**
   * @param mixed $respuesta
   */
  public function setRespuesta($respuesta): void
  {
    $this->respuesta = $respuesta;
  }

  /**
   * @return mixed
   */
  public function getFiles()
  {
    return $this->files;
  }

  /**
   * @param mixed $files
   */
  public function setFiles($files): void
  {
    $this->files = $files;
  }
}
