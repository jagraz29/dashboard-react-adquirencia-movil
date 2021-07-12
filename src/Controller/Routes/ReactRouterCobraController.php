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

  /**
   *
   * @Route("/cobra/edit/{id}", name="cobra_edit")
   *
   */
  public function routerCobraEdit(Request $request)
  {
    // en index pagina con datos generales de la app
    return $this->render('base.html.twig');
  }

  /**
   *
   * @Route("/collect/show/{id}", name="collect_show")
   *
   */
  public function routerCobraShow(Request $request)
  {
    // en index pagina con datos generales de la app
    return $this->render('base.html.twig');
  }

  /**
   *
   * @Route("/collect/delete/{id}", name="collect_delete")
   *
   */
  public function routerCobraDelete(Request $request)
  {
    return $this->render('base.html.twig');
  }

  /**
   *
   * @Route("/collect/duplicate/{id}", name="collect_duplicate")
   *
   */
  public function routerCobraDuplicate(Request $request)
  {
    return $this->render('base.html.twig');
  }
}
