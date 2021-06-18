<?php

namespace App\Controller\Api;

use App\Common\TextResponsesCommon;
use App\Dto\CollectTableDto;
use App\Service\Apify;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Requests;

/**
 * @Route("/api/collect")
 */
class CollectController extends BaseController
{
    /**
     * @var string
     */
    private $urlAppRest;
    /**
     * @var string
     */
    private $appRestEnv;

    public function __construct(
        string $urlAppRest,
        string $appRestEnv,
        Apify $apify,
        ValidatorInterface $validator,
        TranslatorInterface $translator
    ) {
        parent::__construct($apify, $validator, $translator);
        $this->urlAppRest = $urlAppRest;
        $this->appRestEnv = $appRestEnv;
    }

    /**
     * @Route("/", name="api_collect_index", methods={"GET"})
     */
    public function index()
    {
        $filter = [
            TextResponsesCommon::FILTER => []
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
        $collectTableDto = new CollectTableDto();

        $collectTableDto->setQuantity($content['quantity']);
        $collectTableDto->setReference($content['reference']);
        $collectTableDto->setOnePayment($content['onePayment']);
        $collectTableDto->setAmount($content['amount']);
        $collectTableDto->setCurrency($content['currency']);
        $collectTableDto->setId(0);
        $collectTableDto->setBase($content['base']);
        $collectTableDto->setDescription($content['description']);
        $collectTableDto->setTitle($content['title']);
        $collectTableDto->setTypeSell($content['typeSell']);
        $collectTableDto->setTax($content['tax']);
        $collectTableDto->setEmail($content['email']);

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
            'email' => $collectTableDto->getEmail(),
        ];

        $response = $this->apify->consult('collection/link/create', Requests::POST, $data);

        if (
            isset($response[TextResponsesCommon::SUCCESS]) &&
            $response[TextResponsesCommon::SUCCESS] === true
        ) {
            $message = isset($response[TextResponsesCommon::TEXT_RESPONSE])
                ? $response[TextResponsesCommon::TEXT_RESPONSE]
                : 'Collection Links';
            $ok = $this->jsonResponse(true, $response[TextResponsesCommon::DATA], $message);
        }

        $message = isset($response[TextResponsesCommon::TEXT_RESPONSE])
            ? $response[TextResponsesCommon::TEXT_RESPONSE]
            : 'Error apify consult';
        return $this->jsonResponse(false, [], $message, 400);
    }

    /**
     * @Route("/detail/{id}", name="api_collect_detail", methods={"GET"})
     */
    public function show(int $id)
    {
        $filter = [
            TextResponsesCommon::FILTER => [
                "id" => $id
            ]
        ];

        $collectLink = $this->apify->consult('collection/link', Requests::GET, $filter);

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
