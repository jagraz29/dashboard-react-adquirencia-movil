<?php

namespace App\EventSubscriber;

use App\Exception\ApifyException;
use App\Exception\ApifyRefreshTokenException;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class ExceptionSubscriber implements EventSubscriberInterface
{
  /**
   * @var RouterInterface
   */
  private $router;

  public function __construct(RouterInterface $router)
  {
    $this->router = $router;
  }

  public static function getSubscribedEvents()
  {
    // return the subscribed events, their methods and priorities
    return [
      KernelEvents::EXCEPTION => 'onKernelException',
    ];
  }

  public function onKernelException(ExceptionEvent $event)
  {
    $exception = $event->getThrowable();

    if ($exception instanceof ApifyRefreshTokenException) {
      $response = RedirectResponse::create($this->router->generate('app_logout'));
      $event->setResponse($response);
    }
    if ($exception instanceof ApifyException) {
      $message = $exception->getMessage();
      $response = [
        'status' => false,
        'message' => $message,
      ];
      return JsonResponse::create($response, 500);
    }
  }
}
