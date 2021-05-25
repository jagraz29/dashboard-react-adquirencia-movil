<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/sell")
 */
class SellController extends AbstractController
{
  /**
   * @Route("/list", name="api_sell_list", methods={"GET"})
   */
  public function list(Request $request)
  {
    return $this->json([], 200);
  }
}
