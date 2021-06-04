<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;

class PropertySiteDto
{
  /**
   * @Assert\NotBlank
   */
  private $nombreEmpresa;

  /**
   * @Assert\NotBlank
   */
  private $indicativoPais;

  /**
   * @Assert\NotBlank
   */
  private $razonSocial;

  /**
   * @Assert\NotBlank
   */
  private $telefono;

  /**
   * @Assert\NotBlank
   */
  private $celular;

  /**
   * @Assert\NotBlank
   */
  private $indicativoCiudad;

  public function getNombreEmpresa()
  {
    return $this->nombreEmpresa;
  }

  public function setNombreEmpresa($nombreEmpresa): void
  {
    $this->nombreEmpresa = $nombreEmpresa;
  }

  public function getIndicativoPais()
  {
    return $this->indicativoPais;
  }

  public function setIndicativoPais($indicativoPais): void
  {
    $this->indicativoPais = $indicativoPais;
  }

  public function getRazonSocial()
  {
    return $this->razonSocial;
  }

  public function setRazonSocial($razonSocial): void
  {
    $this->razonSocial = $razonSocial;
  }

  public function getTelefono()
  {
    return $this->telefono;
  }

  public function setTelefono($telefono): void
  {
    $this->telefono = $telefono;
  }

  public function getCelular()
  {
    return $this->celular;
  }

  public function setCelular($celular): void
  {
    $this->celular = $celular;
  }

  public function getIndicativoCiudad()
  {
    return $this->indicativoCiudad;
  }

  public function setIndicativoCiudad($indicativoCiudad): void
  {
    $this->indicativoCiudad = $indicativoCiudad;
  }
}
