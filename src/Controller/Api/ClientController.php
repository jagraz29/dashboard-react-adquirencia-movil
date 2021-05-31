<?php

namespace App\Controller\Api;

use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/client")
 */
class ClientController extends BaseController
{
  /**
   * @Route("/info", name="api_client_info", methods={"GET"})
   */
  public function clientInfo()
  {
    $user = $this->getUser();
    return $this->json([
      'email' => $user->getUsername(),
      'companyName' => $user->getName(),
      'cellPhone' => $user->getCellPhone(),
      'logo' => $user->getLogo(),
    ]);
  }
}
