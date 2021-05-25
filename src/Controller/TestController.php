<?php

namespace App\Controller;

use App\Service\Apify;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
  /**
   * @var Apify
   */
  private $apify;

  public function __construct(Apify $apify)
  {
    $this->apify = $apify;
  }

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
    $consult = $this->apify->consult('banks');

    return $this->json($consult);
  }
}
