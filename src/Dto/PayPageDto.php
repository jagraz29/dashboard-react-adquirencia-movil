<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;

class PayPageDto
{
  /**
   * @Assert\NotBlank
   */
  private $logo;

  public function getLogo()
  {
    return $this->logo;
  }

  public function setLogo($logo): void
  {
    $this->logo = $logo;
  }
}
