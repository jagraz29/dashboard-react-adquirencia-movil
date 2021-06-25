<?php

namespace App\Controller\Api;

use App\Common\TextResponsesCommon;
use App\Dto\Ticket\CreateTicketDto;
use App\Dto\Ticket\FilterTicketDto;
use App\Dto\Ticket\CreateTicketResponseDto;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/ticket")
 */
class TicketController extends BaseController
{
  /**
   * @Route("/departments", name="api_ticket_departments", methods={"GET"})
   */
  public function getDepartments(Request $request)
  {
    $consult = $this->apify->consult('ticket/departments');

    return $this->jsonResponse(
      $consult[TextResponsesCommon::SUCCESS],
      $consult[TextResponsesCommon::DATA],
      $consult[TextResponsesCommon::TEXT_RESPONSE]
    );
  }

  /**
   * @Route("/priorities", name="api_ticket_priorities", methods={"GET"})
   */
  public function getPriorities(Request $request)
  {
    $consult = $this->apify->consult('ticket/priorities');

    return $this->jsonResponse(
      $consult[TextResponsesCommon::SUCCESS],
      $consult[TextResponsesCommon::DATA],
      $consult[TextResponsesCommon::TEXT_RESPONSE]
    );
  }

  /**
   * @Route("/close/{id}", name="api_ticket_close", methods={"GET"})
   */
  public function close(Request $request, $id)
  {
    $data = [
      'idTicket' => $id,
    ];
    $consult = $this->apify->consult('ticket/close', \Requests::POST, $data);

    return $this->jsonResponse(
      $consult[TextResponsesCommon::SUCCESS],
      $consult[TextResponsesCommon::DATA],
      $consult[TextResponsesCommon::TEXT_RESPONSE]
    );
  }

  /**
   * @Route("/reopen/{id}", name="api_ticket_reopen", methods={"GET"})
   */
  public function reopen(Request $request, $id)
  {
    $data = [
      'idTicket' => $id,
    ];
    $consult = $this->apify->consult('ticket/reopen', \Requests::POST, $data);

    return $this->jsonResponse(
      $consult[TextResponsesCommon::SUCCESS],
      $consult[TextResponsesCommon::DATA],
      $consult[TextResponsesCommon::TEXT_RESPONSE]
    );
  }

  /**
   * @Route("/detail/{id}", name="api_ticket_detail", methods={"GET"})
   */
  public function detail(Request $request, $id)
  {
    $data = [
      'idTicket' => $id,
    ];
    $consult = $this->apify->consult('ticket/detail', \Requests::POST, $data);

    return $this->jsonResponse(
      $consult[TextResponsesCommon::SUCCESS],
      $consult[TextResponsesCommon::DATA],
      $consult[TextResponsesCommon::TEXT_RESPONSE]
    );
  }

  /**
   * @Route("/list", name="api_ticket_list", methods={"POST"})
   */
  public function getList(Request $request)
  {
    $content = json_decode($request->getContent(), true);
    $filterTicketDto = new FilterTicketDto();
    $filterTicketDto->setIdTicket(isset($content['id']) ? $content['id'] : '');
    $filterTicketDto->setEstadoTicket($content['estado'] ? $content['estado'] : '');
    $errors = $this->validator->validate($filterTicketDto);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }
    $data = [
      'filter' => [
        'estadoTicket' => $filterTicketDto->getEstadoTicket(),
        'idTicket' => $filterTicketDto->getIdTicket(),
      ],
    ];
    $consult = $this->apify->consult('ticket/list', \Requests::POST, $data);

    return $this->jsonResponse(
      $consult[TextResponsesCommon::SUCCESS],
      $consult[TextResponsesCommon::DATA],
      $consult[TextResponsesCommon::TEXT_RESPONSE]
    );
  }

  /**
   * @Route("/create", name="api_ticket_create", methods={"POST"})
   */
  public function create(Request $request)
  {
    $content = $request->getContent();

    $content = json_decode($content, true);
    $createTicketDto = new CreateTicketDto();
    $createTicketDto->setPregunta(
      $content[TextResponsesCommon::PREGUNTA] ? $content[TextResponsesCommon::PREGUNTA] : ''
    );
    $createTicketDto->setAsunto(
      $content[TextResponsesCommon::ASUNTO] ? $content[TextResponsesCommon::ASUNTO] : ''
    );
    $createTicketDto->setDepartamento($content['departamento']);
    $createTicketDto->setPrioridad($content['prioridad']);
    $createTicketDto->setFiles($content['files'] ? $content['files'] : []);
    $errors = $this->validator->validate($createTicketDto);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }
    $data = [
      TextResponsesCommon::PREGUNTA => $createTicketDto->getPregunta(),
      TextResponsesCommon::ASUNTO => $createTicketDto->getAsunto(),
      'departamento' => $createTicketDto->getDepartamento(),
      'prioridad' => $createTicketDto->getPrioridad(),
      'files' => $createTicketDto->getFiles(),
    ];
    $consult = $this->apify->consult('ticket/create', \Requests::POST, $data);

    return $this->jsonResponse(
      $consult[TextResponsesCommon::SUCCESS],
      $consult[TextResponsesCommon::DATA],
      $consult[TextResponsesCommon::TEXT_RESPONSE]
    );
  }

  /**
   * @Route("/save", name="api_ticket_save", methods={"POST"})
   */
  public function saveResponse(Request $request)
  {
    $content = $request->getContent();
    $createTicketResponseDto = new CreateTicketResponseDto();
    $createTicketResponseDto->setIdTicket($content['id']);
    $createTicketResponseDto->setRespuesta($content['respuesta'] ? $content['respuesta'] : '');
    $createTicketResponseDto->setFiles($content['files'] ? $content['files'] : []);
    $errors = $this->validator->validate($createTicketResponseDto);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }
    $data = [
      'idTicket' => $createTicketResponseDto->getIdTicket(),
      'respuesta' => $createTicketResponseDto->getRespuesta(),
      'files' => $createTicketResponseDto->getFiles(),
    ];
    $consult = $this->apify->consult('ticket/save', \Requests::POST, $data);

    return $this->jsonResponse(
      $consult[0][TextResponsesCommon::SUCCESS],
      $consult[0][TextResponsesCommon::DATA],
      $consult[0][TextResponsesCommon::TEXT_RESPONSE]
    );
  }
}
