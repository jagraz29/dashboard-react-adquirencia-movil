<?php

namespace App\Controller\Routes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

final class ReactRouterTransaccionesController extends AbstractController
{
  /**
   *
   * @Route("/transacciones", name="transacciones")
   *
   */

  public function routerTransacciones(Request $request)
  {
    // en index pagina con datos generales de la app
    return $this->render('base.html.twig');
  }
}
