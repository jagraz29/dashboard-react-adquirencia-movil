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
    $response = [
      'clientId' => $user->getId(),
      'email' => $user->getUsername(),
      'companyName' => $user->getName(),
      'socialName' => $user->getSocialName(),
      'cellPhone' => $user->getCellPhone(),
      'indicative' => $user->getIndicative(),
      'logo' => $user->getLogo(),
    ];

    return $this->jsonResponse(true, $response, 'client info');
  }
}
