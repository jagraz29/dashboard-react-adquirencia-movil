<?php

namespace App\Service;

use App\Event\ApifyUnauthorizedEvent;
use App\EventSubscriber\ApifyUnauthorizedSubscriber;
use App\Exception\ApifyException;
use App\Exception\ApifyRefreshTokenException;
use Exception;
use Requests;
use Requests_Auth_Basic;
use Requests_Exception;
use Requests_Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\EventDispatcher\EventDispatcher;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\RouterInterface;

class Apify extends AbstractController
{
  /**
   * @var Requests_Session
   */
  private $session;

  private $url;

  /**
   * @var EventDispatcherInterface
   */
  private $eventDispatcher;

  /**
   * @var RouterInterface
   */
  private $router;

  public function __construct(
    string $url,
    EventDispatcherInterface $eventDispatcher,
    RouterInterface $router
  ) {
    $this->url = $url;
    $this->session = new Requests_Session(
      $this->url,
      [
        'Accept' => 'application/json',
        'Content-Type' => 'application/json',
      ],
      [],
      ['timeout' => 60]
    );
    $this->eventDispatcher = $eventDispatcher;
    $this->router = $router;
  }

  public function login(string $user, string $password)
  {
    try {
      $auth = new Requests_Auth_Basic([$user, $password]);
    } catch (Requests_Exception $exception) {
    }

    $response = Requests::post(
      $this->url . 'login/mail',
      [],
      [],
      [
        'auth' => $auth,
      ]
    );

    if (!$response->success || 200 !== $response->status_code) {
      throw new ApifyException('Apify login error');
    }

    return json_decode($response->body, true);
  }

  public function loginWithKeys(string $publicKey, string $privateKey)
  {
    $auth = new Requests_Auth_Basic([$publicKey, $privateKey]);
    $response = Requests::post($this->url . 'login', [], [], ['auth' => $auth]);

    if ($response->status_code >= 400) {
      throw new ApifyException('Apify login error');
    }

    return json_decode($response->body, true);
  }

  /**
   * @param string $path
   * @param string $method ['POST', 'GET']
   * @param array $data
   * @param array $headers
   * @throws Requests_Exception
   */
  public function consult(string $path, $method = Requests::GET, $data = [], $headers = [])
  {
    $user = $this->getUser();

    $this->session->headers = array_merge($this->session->headers, [
      'Authorization' => 'Bearer ' . $user->getToken(),
    ]);

    $response = $this->consultApify($method, $path, $headers, $data);

    if ($response->status_code === 401) {
      // Refresh token apify
      $this->eventDispatcher->dispatch(new ApifyUnauthorizedEvent(), ApifyUnauthorizedEvent::NAME);
      $this->session->headers['Authorization'] = 'Bearer ' . $user->getToken();
      $response = $this->consultApify($method, $path, $headers, $data);
      if ($response->status_code === 401) {
        throw new ApifyRefreshTokenException('Error in apify login');
      }
    }

    return json_decode($response->body, true);
  }

  /**
   * @param string $token
   * @return mixed
   * @throws Requests_Exception
   */
  public function getClientKeys(string $token)
  {
    $this->session->headers = array_merge($this->session->headers, [
      'Authorization' => 'Bearer ' . $token,
    ]);

    $response = $this->session->request($this->url . 'configuration/keys');
    $body = json_decode($response->body, true);
    return $body[0]['data'];
  }

  /**
   * @param string $token
   * @param string $path
   * @param string $method
   * @return mixed
   * @throws Requests_Exception
   */
  public function consultWithoutLogin(string $token, string $path, string $method)
  {
    $this->session->headers = array_merge($this->session->headers, [
      'Authorization' => 'Bearer ' . $token,
    ]);

    $response = $this->session->request($this->url . $path, [], [], $method);
    $body = json_decode($response->body, true);
    return $body['data'];
  }

  /**
   * @param string $method
   * @param string $path
   * @param array $headers
   * @param array $data
   * @return \Requests_Response
   * @throws Requests_Exception
   */
  private function consultApify(string $method, string $path, $headers = [], $data = [])
  {
    return $this->session->request($this->url . $path, $headers, $data, $method);
  }
}
