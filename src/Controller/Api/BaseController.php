<?php

namespace App\Controller\Api;

use App\Service\Apify;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BaseController extends AbstractController
{
  /**
   * @var Apify
   */
  protected $apify;

  public function __construct(Apify $apify)
  {
    $this->apify = $apify;
  }
}
