<?php

namespace App\Controller\Api;

use App\Dto\PasswordDto;
use App\Dto\PayPageDto;
use App\Dto\ProfileDto;
use App\Dto\PropertySiteDto;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/security")
 */
class SecurityController extends BaseController
{
  /**
   * @Route("/profile-data", name="api_security_profile_data", methods={"GET"})
   */
  public function getProfileData(Request $request)
  {
    $consult = $this->apify->consult('/client/edit', \Requests::POST, []);

    return $this->jsonResponse($consult['success'], $consult['data'], $consult['textResponse']);
  }

  /**
   * @Route("/profile-data", name="api_set_secutiry_profile_data", methods={"POST"})
   */
  public function setProfileData(Request $request)
  {
    $content = $request->getContent();

    $propertyDto = new ProfileDto();
    $propertyDto->setNombreEmpresa($content['nombreEmpresa']);
    $propertyDto->setDominio($content['dominio']);

    $errors = $this->validator->validate($propertyDto);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }

    $data = [
      'companyName' => $content['nombreEmpresa'],
      'domain' => $content['dominio'],
      '_mobilePhone' => $content['celular'],
      '_cellPhone' => $content['telefono'],
      '_indicativeCountry' => $content['indicativoPais'],
      '_indicativeCity' => $content['indicativoCiudad'],
    ];
    $consult = $this->apify->consult('/client/update', \Requests::POST, $data);

    return $this->jsonResponse($consult['success'], $consult['data'], $consult['textResponse']);
  }

  /**
   * @Route("/set-password", name="api_security_set_password", methods={"POST"})
   */
  public function setPassword(Request $request)
  {
    $content = $request->getContent();
    $user = $this->getUser();

    $propertyDto = new PasswordDto();
    $propertyDto->setOldPassword($content['password']);
    $propertyDto->setNewPassword($content['newPassword']);
    $propertyDto->setNewPasswordConfirmation($content['newPasswordConfirmation']);

    $errors = $this->validator->validate($propertyDto);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }

    $data = [
      'email' => $user->getUsername(),
      'password' => $content['password'],
      'passwordNew' => $content['newPassword'],
      'passwordRepeat' => $content['newPasswordConfirmation'],
    ];

    $consult = $this->apify->consult('/client/update/password', \Requests::POST, $data);

    return $this->jsonResponse($consult['success'], $consult['data'], $consult['textResponse']);
  }
}
