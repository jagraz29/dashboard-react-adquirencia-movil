<?php

namespace App\Controller\Routes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

final class ReactRouterAuthController extends AbstractController
{
  /**
   *
   * @Route("/", name="path_pase")
   *
   */

  public function pathBase(Request $request)
  {
    if ($this->getUser()) {
      return $this->redirectToRoute('dashboard');
    }

    return $this->render('base.html.twig');
  }

  /**
   *
   * @Route("/password/reset", name="password_reset")
   *
   */
  public function routerPasswordReset()
  {
    if ($this->getUser()) {
      return $this->redirectToRoute('dashboard');
    }

    return $this->render('base.html.twig');
  }

  /**
   *
   * @Route("/password/change/{id}", name="password_change")
   *
   */

  public function routerPasswordChange()
  {
    if ($this->getUser()) {
      return $this->redirectToRoute('dashboard');
    }
    return $this->render('base.html.twig');
  }
}
