<?php

namespace App\Controller\Api;

use App\Common\TextResponsesCommon;
use App\Dto\PasswordDto;
use App\Dto\PasswordResetDto;
use Requests;
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
    $content = $request->getContent();

    $content = json_decode($content, true);

    $propertyDto = new PasswordResetDto();
    $propertyDto->setEmail($content[TextResponsesCommon::EMAIL]);

    $errors = $this->validator->validate($propertyDto);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }

    $data = [
      'email' => $content['email'] ?? '',
    ];

    $consult = $this->apify->consultWithAlliedEntityKeys(
      'configuration/keys',
      Requests::GET,
      $data
    );

    $consult = $consult[0]['data'];

    if (!isset($consult['privateKey']) || !isset($consult['publicKey'])) {
      return $this->jsonResponse(false, [], 'No existen las keys');
    }

    $data = [
      'mail' => $content[TextResponsesCommon::EMAIL],
      'public_key' => $consult['publicKey'],
      'private_key' => $consult['privateKey'],
    ];

    $this->apify->consultWithAlliedEntityKeys('/client/reset-password', Requests::POST, $data);

    return $this->jsonResponse(true, [], 'Correo enviado.');
  }

  /**
   * @Route("/password-create", name="api_auth_create_password", methods={"POST"})
   */
  public function createPassword(Request $request)
  {
    $content = $request->getContent();
    $content = json_decode($content, true);

    $passwordDto = new PasswordDto();
    $passwordDto->setOldPassword($content['password'] ?? '');
    $passwordDto->setNewPassword($content['password'] ?? '');
    $passwordDto->setNewPasswordConfirmation($content['confirmPassword'] ?? '');

    $errors = $this->validator->validate($passwordDto);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }

    $passwordDtoToArray = $this->dtoToArray($passwordDto);
    $data = [
      'password' => $passwordDtoToArray['newPassword'],
      'passwordRepeat' => $passwordDtoToArray['newPassword'],
      'token' => $content['token'] ?? '',
    ];

    $consult = $this->apify->consultWithAlliedEntityKeys(
      'client/resetting/password/update',
      Requests::POST,
      $data
    );

    if (empty($consult)) {
      return $this->jsonResponse(true, [], 'Actualizado correctamente');
    }

    return $this->jsonResponse(
      $consult[TextResponsesCommon::SUCCESS],
      $consult[TextResponsesCommon::DATA],
      $consult[TextResponsesCommon::TEXT_RESPONSE]
    );
  }
}
