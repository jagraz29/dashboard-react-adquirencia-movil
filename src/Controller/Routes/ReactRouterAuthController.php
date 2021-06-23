<?php

namespace App\Controller\Routes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

final class ReactRouterAuthController extends AbstractController
{
  /**
   *
   * @Route("/password/reset", name="password_reset")
   *
   */

  public function routerPasswordReset(Request $request)
  {
    if ($this->getUser()) {
      return $this->redirectToRoute('dashboard');
    }

    return $this->render('base.html.twig');
  }

  /**
   *
   * @Route("/password/change", name="password_change")
   *
   */

  public function routerPasswordChange(Request $request)
  {
    if ($this->getUser()) {
      return $this->redirectToRoute('dashboard');
    }

    return $this->render('base.html.twig');
  }
}
