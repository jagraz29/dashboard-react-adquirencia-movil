<?php

namespace App\Controller\Api;

use App\Dto\TestDto;
use App\Service\Apify;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends BaseController
{
  /**
   * @Route("/test", name="test")
   */
  public function index(): Response
  {
    return $this->render('test/index.html.twig', [
      'controller_name' => 'TestController',
    ]);
  }

  /**
   * @Route("/test/consult", name="test_consult")
   */
  public function testConsult()
  {
    $testDto = new TestDto();
    $testDto->setName('name');
    $testDto->setLastName('name');

    $errors = $this->validator->validate($testDto);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }

    $consult = $this->apify->consult('banks');

    return $this->json($consult);
  }
}
