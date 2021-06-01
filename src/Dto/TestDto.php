<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;

class TestDto
{
  /**
   * @Assert\NotBlank(message="name.not_blank")
   */
  private $name;

  /**
   * @Assert\NotBlank
   */
  private $lastName;

  public function getName()
  {
    return $this->name;
  }

  public function setName($name): void
  {
    $this->name = $name;
  }

  public function getLastName()
  {
    return $this->lastName;
  }

  public function setLastName($lastName): void
  {
    $this->lastName = $lastName;
  }
}
