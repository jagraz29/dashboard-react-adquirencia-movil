<?php

namespace App\Controller\Routes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

final class ReactRouterSeguridadController extends AbstractController
{
    /**
     *
     * @Route("/seguridad", name="seguridad")
     *
     */

    public function routerIntegraciones(Request $request)
    {
        // en index pagina con datos generales de la app
        return $this->render('base.html.twig');
    }
}
