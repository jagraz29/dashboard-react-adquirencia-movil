<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\Validator\Constraints as SecurityAssert;

class PasswordDto
{
  /**
   * @Assert\NotBlank
   */
  public $oldPassword;

  /**
   * @Assert\NotBlank
   */
  public $newPassword;

  /**
   * @Assert\IdenticalTo(propertyPath="newPassword", message="same.password")
   */
  public $newPasswordConfirmation;

  public function getOldPassword()
  {
    return $this->oldPassword;
  }

  public function setOldPassword($oldPassword): void
  {
    $this->oldPassword = $oldPassword;
  }

  public function getNewPassword()
  {
    return $this->newPassword;
  }

  public function setNewPassword($newPassword): void
  {
    $this->newPassword = $newPassword;
  }

  public function getNewPasswordConfirmation()
  {
    return $this->newPasswordConfirmation;
  }

  public function setNewPasswordConfirmation($newPasswordConfirmation): void
  {
    $this->newPasswordConfirmation = $newPasswordConfirmation;
  }
}
