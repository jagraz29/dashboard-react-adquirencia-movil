<?php

namespace App\Dto\Ticket;
use Symfony\Component\Validator\Constraints as Assert;

class CreateTicketDto
{
  private $pregunta;

  private $asunto;

  /**
   * @Assert\NotBlank
   */
  private $departamento;

  /**
   * @Assert\NotBlank
   */
  private $prioridad;

  private $files;

  /**
   * @return mixed
   */
  public function getPregunta()
  {
    return $this->pregunta;
  }

  /**
   * @param mixed $pregunta
   */
  public function setPregunta($pregunta): void
  {
    $this->pregunta = $pregunta;
  }

  /**
   * @return mixed
   */
  public function getAsunto()
  {
    return $this->asunto;
  }

  /**
   * @param mixed $asunto
   */
  public function setAsunto($asunto): void
  {
    $this->asunto = $asunto;
  }

  /**
   * @return mixed
   */
  public function getDepartamento()
  {
    return $this->departamento;
  }

  /**
   * @param mixed $departamento
   */
  public function setDepartamento($departamento): void
  {
    $this->departamento = $departamento;
  }

  /**
   * @return mixed
   */
  public function getPrioridad()
  {
    return $this->prioridad;
  }

  /**
   * @param mixed $prioridad
   */
  public function setPrioridad($prioridad): void
  {
    $this->prioridad = $prioridad;
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
