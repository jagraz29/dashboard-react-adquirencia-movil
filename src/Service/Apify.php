<?php

namespace App\Service;

use Exception;
use Requests;
use Requests_Auth_Basic;
use Requests_Exception;
use Requests_Session;

class Apify
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
            'User-Agent' => 'newDash',
        ], [], ['timeout' => 60]);
    }

    public function loginWithKeys(string $publicKey, string $privateKey)
    {
        try {
            $auth = new Requests_Auth_Basic([
                $publicKey,
                $privateKey,
            ]);
        } catch (Requests_Exception $exception) {
        }

        $response = Requests::post($this->url . 'login', [], [], [
            'auth' => $auth,
        ]);

        if (!$response->success || 200 !== $response->status_code) {
            throw new Exception('Apify login error');
        }

        $body = json_decode($response->body, true);

        return $body;
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
}