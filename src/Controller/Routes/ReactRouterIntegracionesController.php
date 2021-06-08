<?php

namespace App\Controller\Routes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

final class ReactRouterIntegracionesController extends AbstractController
{
  /**
   *
   * @Route("/integraciones", name="cobra")
   *
   */

  public function routerIntegraciones(Request $request)
  {
    // en index pagina con datos generales de la app
    return $this->render('base.html.twig');
  }
}
