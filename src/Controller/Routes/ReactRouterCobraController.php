<?php

namespace App\Controller\Routes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

final class ReactRouterCobraController extends AbstractController
{
  /**
   *
   * @Route("/cobra", name="cobra")
   *
   */
  public function routerCobra(Request $request)
  {
    // en index pagina con datos generales de la app
    return $this->render('base.html.twig');
  }

  /**
   *
   * @Route("/cobra/create", name="cobra_create")
   *
   */
  public function routerCobraCreate(Request $request)
  {
    // en index pagina con datos generales de la app
    return $this->render('base.html.twig');
  }
}
