<?php

namespace App\Service;

use Doctrine\DBAL\Driver\AbstractDB2Driver;
use Exception;
use Requests;
use Requests_Auth_Basic;
use Requests_Exception;
use Requests_Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class Apify extends AbstractController
{
    /**
     * @var Requests_Session
     */
    private $session;

    private $url;

    public function __construct()
    {
        $this->url = 'https://apify.epayco.xyz/';
        $this->session = new Requests_Session($this->url, [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
        ], [], ['timeout' => 60]);
    }

    public function login(string $user, string $password)
    {
        try {
            $auth = new Requests_Auth_Basic([
                $user,
                $password,
            ]);
        } catch (Requests_Exception $exception) {
        }

        $response = Requests::post($this->url . 'login/mail', [], [], [
            'auth' => $auth,
        ]);

        if (!$response->success || 200 !== $response->status_code) {
            throw new Exception('Apify login error');
        }

        $body = json_decode($response->body, true);

        return $body;
    }

    /**
     * @param string $path
     * @param array $data
     * @param array $headers
     * @return array
     */
    public function consult(string $path, $data = [], $headers = []): array
    {
        $user = $this->getUser();

        $this->session->headers = array_merge($this->session->headers, [
            'Authorization' => 'Bearer ' . $user->getToken(),
        ]);

        $response = Requests::post($this->url . $path, $headers, $data);
        $body = json_decode($response->body, true);

        return $body;
    }
}