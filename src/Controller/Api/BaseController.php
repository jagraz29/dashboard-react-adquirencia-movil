<?php

namespace App\Controller\Api;

use App\Service\Apify;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class BaseController extends AbstractController
{
  /**
   * @var Apify
   */
  protected $apify;
  /**
   * @var ValidatorInterface
   */
  protected $validator;

  public function __construct(Apify $apify, ValidatorInterface $validator)
  {
    $this->apify = $apify;
    $this->validator = $validator;
  }

  protected function validatorErrorResponse($errors)
  {
    $errorResponse = [];
    $errorResponse['status'] = false;
    $errorResponse['message'] = 'Algunos campos estan erroneos';
    for ($i = 0; $i < count($errors); $i++) {
      $error = $errors->get($i);
      $errorResponse['errors'][$error->getPropertyPath()] = $error->getMessage();
    }
    return $this->json($errorResponse, 400);
  }
}
