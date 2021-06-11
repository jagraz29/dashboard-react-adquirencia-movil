<?php

namespace App\Controller\Api;

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

    return $this->jsonResponse($consult['success'], $consult['data'], $consult['textResponse']);
  }

  /**
   * @Route("/priorities", name="api_ticket_priorities", methods={"GET"})
   */
  public function getPriorities(Request $request)
  {
    $consult = $this->apify->consult('ticket/priorities');

    return $this->jsonResponse($consult['success'], $consult['data'], $consult['textResponse']);
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

    return $this->jsonResponse($consult['success'], $consult['data'], $consult['textResponse']);
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

    return $this->jsonResponse($consult['success'], $consult['data'], $consult['textResponse']);
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

    return $this->jsonResponse($consult['success'], $consult['data'], $consult['textResponse']);
  }

  /**
   * @Route("/list", name="api_ticket_list", methods={"POST"})
   */
  public function getList(Request $request)
  {
    $content = $request->getContent();
    $filterTicketDto = new FilterTicketDto();
    $filterTicketDto->setIdTicket($content['id'] ? $content['id'] : '');
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
      $consult[0]['success'],
      $consult[0]['data'],
      $consult[0]['textResponse']
    );
  }

  /**
   * @Route("/create", name="api_ticket_create", methods={"POST"})
   */
  public function create(Request $request)
  {
    $content = $request->getContent();
    $createTicketDto = new CreateTicketDto();
    $createTicketDto->setPregunta($content['pregunta'] ? $content['pregunta'] : '');
    $createTicketDto->setAsunto($content['asunto'] ? $content['asunto'] : '');
    $createTicketDto->setDepartamento($content['departamento']);
    $createTicketDto->setPrioridad($content['prioridad']);
    $createTicketDto->setFiles($content['files'] ? $content['files'] : []);
    $errors = $this->validator->validate($createTicketDto);
    if (count($errors) > 0) {
      return $this->validatorErrorResponse($errors);
    }
    $data = [
      'pregunta' => $createTicketDto->getPregunta(),
      'asunto' => $createTicketDto->getAsunto(),
      'departamento' => $createTicketDto->getDepartamento(),
      'prioridad' => $createTicketDto->getPrioridad(),
      'files' => $createTicketDto->getFiles(),
    ];
    $consult = $this->apify->consult('ticket/create', \Requests::POST, $data);

    return $this->jsonResponse(
      $consult[0]['success'],
      $consult[0]['data'],
      $consult[0]['textResponse']
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
      $consult[0]['success'],
      $consult[0]['data'],
      $consult[0]['textResponse']
    );
  }
}
