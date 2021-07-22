<?php

namespace App\Security;

use App\Common\TextResponsesCommon;
use App\Service\Apify;
use Requests;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;

class UserProvider implements UserProviderInterface, PasswordUpgraderInterface
{
  /**
   * @var Apify
   */
  private $apify;
  /**
   * @var SessionInterface
   */
  private $session;

  public function __construct(Apify $apify, SessionInterface $session)
  {
    $this->apify = $apify;
    $this->session = $session;
  }

  /**
   * Symfony calls this method if you use features like switch_user
   * or remember_me.
   *
   * If you're not using these features, you do not need to implement
   * this method.
   *
   * @param $username
   * @return false|UserInterface
   * @throws \Exception
   */
  public function loadUserByUsername($username)
  {
    $apifyResponse = $this->apify->login($username['email'], $username['password']);
    if (!is_array($apifyResponse) || !isset($apifyResponse[TextResponsesCommon::TOKEN])) {
      return false;
    }

    try {
      $userkeys = $this->apify->getClientKeys($apifyResponse[TextResponsesCommon::TOKEN]);
      $userData = $this->apify->consultWithoutLogin(
        $apifyResponse[TextResponsesCommon::TOKEN],
        'client/edit',
        Requests::POST
      );
    } catch (\Exception $e) {
    }

    $user = new User();
    $user->setToken($apifyResponse[TextResponsesCommon::TOKEN]);
    $user->setId($userData['id']);
    $user->setEmail($username['email']);
    $user->setPrivateKey(isset($userkeys['privateKey']) ? $userkeys['privateKey'] : '');
    $user->setPublicKey(isset($userkeys['publicKey']) ? $userkeys['publicKey'] : '');
    $user->setName(isset($userData['companyName']) ? $userData['companyName'] : '');
    $user->setSocialName(isset($userData['socialName']) ? $userData['socialName'] : '');
    $user->setCellPhone(isset($userData['cellPhone']) ? $userData['cellPhone'] : '');
    $user->setIndicative(
      isset($userData['indicativeCountry']) ? $userData['indicativeCountry'] : null
    );
    $user->setLogo(isset($userData['logo']) ? $userData['logo'] : '');

    return $user;
  }

  /**
   * Refreshes the user after being reloaded from the session.
   *
   * When a user is logged in, at the beginning of each request, the
   * User object is loaded from the session and then this method is
   * called. Your job is to make sure the user's data is still fresh by,
   * for example, re-querying for fresh User data.
   *
   * If your firewall is "stateless: true" (for a pure API), this
   * method is not called.
   *
   * @return UserInterface
   */
  public function refreshUser(UserInterface $user)
  {
    if (!$user instanceof User) {
      throw new UnsupportedUserException(sprintf('Invalid user class "%s".', get_class($user)));
    }
    $this->session->migrate(true);
    return $user;

    // Return a User object after making sure its data is "fresh".
    // Or throw a UsernameNotFoundException if the user no longer exists.
  }

  /**
   * Tells Symfony to use this provider for this User class.
   */
  public function supportsClass($class)
  {
    return User::class === $class || is_subclass_of($class, User::class);
  }

  /**
   * Upgrades the encoded password of a user, typically for using a better hash algorithm.
   */
  public function upgradePassword(UserInterface $user, string $newEncodedPassword): void
  {
    // 1. persist the new password in the user storage
    // 2. update the $user object with $user->setPassword($newEncodedPassword);
  }
}
