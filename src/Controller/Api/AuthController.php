<?php

namespace App\Controller\Api;

use App\Common\TextResponsesCommon;
use App\Dto\PasswordResetDto;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/auth")
 */
class AuthController extends BaseController
{
  /**
   * @Route("/password-reset", name="api_auth_password_reset", methods={"POST"})
   */
  public function passwordReset(Request $request)
  {
    $user = $this->getUser();
    $content = $request->getContent();

    $content = json_decode($content, true);

    $propertyDto = new PasswordResetDto();
    $propertyDto->setEmail($content[TextResponsesCommon::EMAIL]);

    $errors = $this->validator->validate($propertyDto);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }

    $data = [
      TextResponsesCommon::EMAIL => $content[TextResponsesCommon::EMAIL],
      'public_key' => $user->getPublicKey(),
      'private_key' => $user->getPrivateKey(),
    ];

    $consult = $this->apify->consult('/client/reset-password', \Requests::POST, $data);

    return $this->jsonResponse(
      $consult[0][TextResponsesCommon::SUCCESS],
      $consult[0][TextResponsesCommon::DATA],
      $consult[0][TextResponsesCommon::TEXT_RESPONSE]
    );
  }
}
