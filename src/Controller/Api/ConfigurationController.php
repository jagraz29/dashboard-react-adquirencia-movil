<?php

namespace App\Controller\Api;

use App\Dto\PayPageDto;
use App\Dto\PropertySiteDto;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/configuration")
 */
class ConfigurationController extends BaseController
{
  /**
   * @Route("/property-site", name="api_config_property_site", methods={"GET"})
   */
  public function getPropertySite(Request $request)
  {
    $consult = $this->apify->consult('configuration/information');

    return $this->jsonResponse(
      $consult[0]['success'],
      $consult[0]['data'],
      $consult[0]['textResponse']
    );
  }

  /**
   * @Route("/property-site", name="api_set_config_property_site", methods={"POST"})
   */
  public function setPropertySite(Request $request)
  {
    $content = $request->getContent();

    $propertyDto = new PropertySiteDto();
    $propertyDto->setNombreEmpresa($content['nombreEmpresa']);
    $propertyDto->setRazonSocial($content['razonSocial']);
    $propertyDto->setTelefono($content['telefono']);
    $propertyDto->setCelular($content['celular']);
    $propertyDto->setIndicativoCiudad($content['indicativoCiudad']);
    $propertyDto->setIndicativoPais($content['indicativoPais']);

    $errors = $this->validator->validate($propertyDto);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }

    $data = [
      'nombreEmpresa' => $content['nombeEmpresa'],
      'razonSocial' => $content['razonSocial'],
      'telefono' => $content['telefono'],
      'celular' => $content['celular'],
      'telefono' => $content['telefono'],
      'indicativoPais' => $content['indicativoPais'],
      'indicativoCiudad' => $content['indicativoCiudad'],
      'emailContacto' => $content['emailContacto'],
      'emailContracargos' => $content['emailContracargos'],
      'emailFacturacion' => $content['emailFacturacion'],
      'emailTransacciones' => $content['emailTransacciones'],
      'tipoTelefonoValue' => $content['tipoTelefonoValue'],
    ];

    $consult = $this->apify->consult('/configuration/information', \Requests::POST, $data);

    return $this->jsonResponse(
      $consult[0]['success'],
      $consult[0]['data'],
      $consult[0]['textResponse']
    );
  }

  /**
   * @Route("/pay-page", name="api_config_pay_page", methods={"GET"})
   */
  public function getPayPage(Request $request)
  {
    $consult = $this->apify->consult('configuration/pay-page');

    return $this->jsonResponse(
      $consult[0]['success'],
      $consult[0]['data'],
      $consult[0]['textResponse']
    );
  }

  /**
   * @Route("/pay-page", name="api_set_config_pay_page", methods={"POST"})
   */
  public function setPayPage(Request $request)
  {
    $content = $request->getContent();

    $propertyDto = new PayPageDto();
    $propertyDto->setLogo($content['logo']);

    $errors = $this->validator->validate($propertyDto);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }

    $data = [
      'logo' => $content['logo'],
    ];

    $consult = $this->apify->consult('/configuration/pay-page', \Requests::POST, $data);

    return $this->jsonResponse(
      $consult[0]['success'],
      $consult[0]['data'],
      $consult[0]['textResponse']
    );
  }

  /**
   * @Route("/options-gateway", name="api_config_options_gateway", methods={"GET"})
   */
  public function getOptionGateway(Request $request)
  {
    $consult = $this->apify->consult('configuration/options-gateway');

    return $this->jsonResponse(
      $consult[0]['success'],
      $consult[0]['data'],
      $consult[0]['textResponse']
    );
  }

  /**
   * @Route("/options-gateway", name="api_set_config_options_gateway", methods={"POST"})
   */
  public function setOptionGateway(Request $request)
  {
    $content = $request->getContent();

    $propertyDto = new PayPageDto();
    $propertyDto->setLogo($content['logo']);

    $errors = $this->validator->validate($propertyDto);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }

    $data = [
      'logo' => $content['logo'],
    ];

    $consult = $this->apify->consult('/configuration/options-gateway', \Requests::POST, $data);

    return $this->jsonResponse(
      $consult[0]['success'],
      $consult[0]['data'],
      $consult[0]['textResponse']
    );
  }

  /**
   * @Route("/keys", name="api_config_keys", methods={"GET"})
   */
  public function getKeys(Request $request)
  {
    $consult = $this->apify->consult('configuration/keys');

    return $this->jsonResponse(
      $consult[0]['success'],
      $consult[0]['data'],
      $consult[0]['textResponse']
    );
  }
}
