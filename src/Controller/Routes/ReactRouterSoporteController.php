<?php

namespace App\Controller\Routes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

final class ReactRouterSoporteController extends AbstractController
{
  /**
   *
   * @Route("/soporte", name="soporte")
   *
   */

  public function routerSoporte(Request $request)
  {
    // en index pagina con datos generales de la app
    return $this->render('base.html.twig');
  }

  /**
   *
   * @Route("/soporte/nuevo", name="soporte_create")
   *
   */

  public function routerSoporteCreateTicket(Request $request)
  {
    // en index pagina con datos generales de la app
    return $this->render('base.html.twig');
  }

  /**
   *
   * @Route("/soporte/detalle/{id}", name="soporte_detail")
   *
   */

  public function routerSoporteDetailTicket(Request $request)
  {
    // en index pagina con datos generales de la app
    return $this->render('base.html.twig');
  }
}
