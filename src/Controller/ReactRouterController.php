<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

final class ReactRouterController extends AbstractController
{
  /**
   *
   * @Route("/test/route", name="test_route")
   *
   */

  public function testRouter(Request $request)
  {
    // en index pagina con datos generales de la app
    return $this->render('base.html.twig');
  }
}
