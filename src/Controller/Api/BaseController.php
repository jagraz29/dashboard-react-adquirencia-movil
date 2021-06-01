<?php

namespace App\Controller\Api;

use App\Service\Apify;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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

  /**
   * @param bool $status
   * @param array $data
   * @param string $message
   * @param int $code
   * @return JsonResponse
   */
  protected function jsonResponse(bool $status, array $data, string $message, int $code = 200)
  {
    $response = [
      'status' => $status,
      'message' => $message,
      'data' => $data,
    ];
    return $this->json($response, $code);
  }
}
