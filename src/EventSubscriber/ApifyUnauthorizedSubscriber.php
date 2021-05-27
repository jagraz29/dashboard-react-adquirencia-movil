<?php

namespace App\EventSubscriber;

use App\Event\ApifyUnauthorizedEvent;
use App\Service\Apify;
use Doctrine\DBAL\Exception;
use Psr\Container\ContainerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\ControllerTrait;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\InMemoryUserProvider;
use Symfony\Component\Security\Core\User\UserProviderInterface;

class ApifyUnauthorizedSubscriber implements EventSubscriberInterface
{
  /**
   * @var Apify
   */
  private $apify;
  /**
   * @var Security
   */
  private $security;
  /**
   * @var UserProviderInterface
   */
  private $userProvider;

  public function __construct(Apify $apify, Security $security, UserProviderInterface $userProvider)
  {
    $this->apify = $apify;
    $this->security = $security;
    $this->userProvider = $userProvider;
  }

  public static function getSubscribedEvents()
  {
    return [
      ApifyUnauthorizedEvent::NAME => [['apifyUnauthorized', 0]],
    ];
  }

  public function apifyUnauthorized(ApifyUnauthorizedEvent $event)
  {
    $user = $this->security->getUser();
    if ($user->getPrivateKey() === '' || $user->getPublicKey() === '') {
      return;
    }

    $apifyResponse = $this->apify->loginWithKeys($user->getPublicKey(), $user->getPrivateKey());
    if (!is_array($apifyResponse) || !isset($apifyResponse['token'])) {
      return false;
    }
    $user->setToken($apifyResponse['token']);
    $this->userProvider->refreshUser($user);
  }
}
