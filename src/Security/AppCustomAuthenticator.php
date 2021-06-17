<?php

namespace App\Security;

use App\Common\TextResponsesCommon;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\InvalidCsrfTokenException;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Symfony\Component\Security\Guard\Authenticator\AbstractFormLoginAuthenticator;
use Symfony\Component\Security\Http\Util\TargetPathTrait;

class AppCustomAuthenticator extends AbstractFormLoginAuthenticator
{
  use TargetPathTrait;

  public const LOGIN_ROUTE = 'app_login';

  private $urlGenerator;
  private $csrfTokenManager;
  private $router;

  public function __construct(
    UrlGeneratorInterface $urlGenerator,
    CsrfTokenManagerInterface $csrfTokenManager,
    RouterInterface $router
  ) {
    $this->urlGenerator = $urlGenerator;
    $this->csrfTokenManager = $csrfTokenManager;
    $this->router = $router;
  }

  public function supports(Request $request)
  {
    return self::LOGIN_ROUTE === $request->attributes->get('_route') && $request->isMethod('POST');
  }

  public function getCredentials(Request $request)
  {
    $credentials = [
      TextResponsesCommon::EMAIL => $request->request->get(TextResponsesCommon::EMAIL),
      'password' => $request->request->get('password'),
      'csrf_token' => $request->request->get('_csrf_token'),
    ];
    $request->getSession()->set(Security::LAST_USERNAME, $credentials[TextResponsesCommon::EMAIL]);

    return $credentials;
  }

  public function getUser($credentials, UserProviderInterface $userProvider)
  {
    $token = new CsrfToken('authenticate', $credentials['csrf_token']);
    if (!$this->csrfTokenManager->isTokenValid($token)) {
      throw new InvalidCsrfTokenException();
    }

    $user = $userProvider->loadUserByUsername($credentials);

    if (!$user) {
      throw new UsernameNotFoundException('Email could not be found.');
    }

    return $user;
  }

  public function checkCredentials($credentials, UserInterface $user)
  {
    return true;
  }

  public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
  {
    if ($targetPath = $this->getTargetPath($request->getSession(), $providerKey)) {
      return new RedirectResponse($targetPath);
    }
    return new RedirectResponse($this->router->generate('dashboard'));
  }

  protected function getLoginUrl()
  {
    return $this->urlGenerator->generate(self::LOGIN_ROUTE);
  }
}
