<?php

namespace App\Controller\Api;

use App\Common\TextResponsesCommon;
use App\Dto\CollectTableDto;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Requests;

/**
 * @Route("/api/collect")
 */
class CollectController extends BaseController
{
  private const TYPE_LINK = 2;

  /**
   * @Route("/{searchGeneral}", name="api_collect_index", defaults={"searchGeneral" = null}, methods={"GET"})
   */
  public function index($searchGeneral)
  {
    $filter = [
      TextResponsesCommon::FILTER => isset($searchGeneral)
        ? ['searchGeneral' => $searchGeneral]
        : [],
    ];

    $collectLinks = $this->apify->consult('collection/link', Requests::GET, $filter);

    if (
      isset($collectLinks[TextResponsesCommon::SUCCESS]) &&
      $collectLinks[TextResponsesCommon::SUCCESS] === true
    ) {
      $message = isset($collectLinks[TextResponsesCommon::TEXT_RESPONSE])
        ? $collectLinks[TextResponsesCommon::TEXT_RESPONSE]
        : 'Collect List';
      return $this->jsonResponse(true, $collectLinks[TextResponsesCommon::DATA], $message);
    }

    $message = isset($collectLinks[TextResponsesCommon::TEXT_RESPONSE])
      ? $collectLinks[TextResponsesCommon::TEXT_RESPONSE]
      : 'Error apify consult';
    return $this->jsonResponse(false, [], $message, 400);
  }

  /**
   * @Route("/create", name="api_collect_create", methods={"POST"})
   */
  public function create(Request $request)
  {
    $content = $request->getContent();
    $content = json_decode($content, true);

    $collectTableDto = new CollectTableDto();

    $collectTableDto->setQuantity($content['cantidad']);
    $collectTableDto->setReference($content['factura']);
    $collectTableDto->setOnePayment($content['cantidad'] > 1 ? 0 : true);
    $collectTableDto->setAmount($content['total']);
    $collectTableDto->setCurrency($content['tipoMoneda']);
    $collectTableDto->setId(isset($content['id']) ? $content['id'] : 0);
    $collectTableDto->setBase($content['valor']);
    $collectTableDto->setDescription($content['descripcion']);
    $collectTableDto->setTitle($content['nombre']);
    $collectTableDto->setTypeSell(self::TYPE_LINK);
    $collectTableDto->setTax($content['iva']);

    $errors = $this->validator->validate($collectTableDto);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }
    $data = [
      'quantity' => $collectTableDto->getQuantity(),
      'reference' => $collectTableDto->getReference(),
      'onePayment' => $collectTableDto->getOnePayment(),
      'amount' => $collectTableDto->getAmount(),
      'currency' => $collectTableDto->getCurrency(),
      'id' => $collectTableDto->getId(),
      'base' => $collectTableDto->getBase(),
      'description' => $collectTableDto->getDescription(),
      'title' => $collectTableDto->getTitle(),
      'typeSell' => $collectTableDto->getTypeSell(),
      'tax' => $collectTableDto->getTax(),
      'ico' => $content['ico'],
      'img' => count($content['imagenes']) > 0 ? $content['imagenes'] : null,
      'document' => $content['archivo'],
      'urlConfirmation' => $content['urlConfirmacion'],
      'urlResponse' => $content['urlRespuesta'],
      'expirationDate' => $content['fechaVencimiento'],
    ];

    $response =
      $collectTableDto->getId() != 0
        ? $this->apify->consult('collection/link/update', Requests::POST, $data)
        : $this->apify->consult('collection/link/create', Requests::POST, $data);

    if (
      isset($response[TextResponsesCommon::SUCCESS]) &&
      $response[TextResponsesCommon::SUCCESS] === true
    ) {
      $message = isset($response[TextResponsesCommon::TEXT_RESPONSE])
        ? $response[TextResponsesCommon::TEXT_RESPONSE]
        : 'Collection Links';
      return $this->jsonResponse(true, $response[TextResponsesCommon::DATA], $message, 200);
    }

    $message = isset($response[TextResponsesCommon::TEXT_RESPONSE])
      ? $response[TextResponsesCommon::TEXT_RESPONSE]
      : 'Error apify consult';
    return $this->jsonResponse(false, [], $message, 400);
  }

  /**
   * @Route("/show/{id}", name="api_collect_detail", methods={"GET"})
   */
  public function show(int $id)
  {
    $filter = [
      TextResponsesCommon::FILTER => [
        'id' => $id,
      ],
    ];

    $collectLink = $this->apify->consult('collection/show', Requests::GET, $filter);

    if (
      isset($collectLink[TextResponsesCommon::SUCCESS]) &&
      $collectLink[TextResponsesCommon::SUCCESS] === true
    ) {
      $message = isset($collectLink[TextResponsesCommon::TEXT_RESPONSE])
        ? $collectLink[TextResponsesCommon::TEXT_RESPONSE]
        : 'Collect detail';
      return $this->jsonResponse(true, $collectLink[TextResponsesCommon::DATA], $message);
    }

    $message = isset($collectLink[TextResponsesCommon::TEXT_RESPONSE])
      ? $collectLink[TextResponsesCommon::TEXT_RESPONSE]
      : 'Error apify consult';
    return $this->jsonResponse(false, [], $message, 400);
  }

  /**
   * @Route("/edit/{id}", name="api_collect_detail", methods={"GET"})
   */
  public function edit(int $id)
  {
    $url = "collection/link/edit/{$id}";
    $collectLink = $this->apify->consult($url, Requests::GET);

    if (
      isset($collectLink[TextResponsesCommon::SUCCESS]) &&
      $collectLink[TextResponsesCommon::SUCCESS] === true
    ) {
      $message = isset($collectLink[TextResponsesCommon::TEXT_RESPONSE])
        ? $collectLink[TextResponsesCommon::TEXT_RESPONSE]
        : 'Collect detail';
      return $this->jsonResponse(true, $collectLink[TextResponsesCommon::DATA], $message);
    }

    $message = isset($collectLink[TextResponsesCommon::TEXT_RESPONSE])
      ? $collectLink[TextResponsesCommon::TEXT_RESPONSE]
      : 'Error apify consult';
    return $this->jsonResponse(false, [], $message, 400);
  }
}
