<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;

class PasswordResetDto
{
  /**
   * @Assert\NotBlank
   */
  private $email;

  public function getEmail()
  {
    return $this->email;
  }

  public function setEmail($email): void
  {
    $this->email = $email;
  }
}
