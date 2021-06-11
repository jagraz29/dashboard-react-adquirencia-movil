<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;

class ProfileDto
{
  /**
   * @Assert\NotBlank
   */
  private $nombreEmpresa;

  /**
   * @Assert\Url
   */
  private $dominio;

  public function getNombreEmpresa()
  {
    return $this->nombreEmpresa;
  }

  public function setNombreEmpresa($nombreEmpresa): void
  {
    $this->nombreEmpresa = $nombreEmpresa;
  }

  public function getDominio()
  {
    return $this->dominio;
  }

  public function setDominio($dominio): void
  {
    $this->dominio = $dominio;
  }
}
