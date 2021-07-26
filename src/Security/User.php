<?php

namespace App\Security;

use Symfony\Component\Security\Core\User\UserInterface;

class User implements UserInterface
{
  private $email;

  private $id;

  private $roles = [];

  private $token;

  private $name;

  private $socialName;

  private $password;

  private $privateKey;

  private $publicKey;

  private $cellPhone;

  private $indicative;

  private $logo;

  public function getEmail(): ?string
  {
    return $this->email;
  }

  public function setEmail(string $email): self
  {
    $this->email = $email;

    return $this;
  }

  public function getId(): ?string
  {
    return $this->id;
  }

  public function setId(int $id): self
  {
    $this->id = $id;

    return $this;
  }

  /**
   * A visual identifier that represents this user.
   *
   * @see UserInterface
   */
  public function getUsername(): string
  {
    return (string) $this->email;
  }

  /**
   * @see UserInterface
   */
  public function getRoles(): array
  {
    $roles = $this->roles;
    // guarantee every user at least has ROLE_USER
    $roles[] = 'ROLE_USER';

    return array_unique($roles);
  }

  public function setRoles(array $roles): self
  {
    $this->roles = $roles;

    return $this;
  }

  /**
   * This method can be removed in Symfony 6.0 - is not needed for apps that do not check user passwords.
   *
   * @see UserInterface
   */
  public function getPassword(): ?string
  {
    return $this->password;
  }

  public function setPassword(string $password): self
  {
    $this->password = $password;
    return $this;
  }

  /**
   * This method can be removed in Symfony 6.0 - is not needed for apps that do not check user passwords.
   *
   * @see UserInterface
   */
  public function getSalt(): ?string
  {
    return null;
  }

  /**
   * @see UserInterface
   */
  public function eraseCredentials()
  {
  }

  public function getToken(): ?string
  {
    return $this->token;
  }

  public function setToken(string $token): self
  {
    $this->token = $token;

    return $this;
  }

  public function getName(): ?string
  {
    return $this->name;
  }

  public function setName(string $name): self
  {
    $this->name = $name;

    return $this;
  }

  public function getSocialName(): ?string
  {
    return $this->socialName;
  }

  public function setSocialName(string $socialName): self
  {
    $this->socialName = $socialName;

    return $this;
  }

  public function getPrivateKey(): ?string
  {
    return $this->privateKey;
  }

  public function setPrivateKey(string $privateKey): self
  {
    $this->privateKey = $privateKey;
    return $this;
  }

  public function getPublicKey(): ?string
  {
    return $this->publicKey;
  }

  public function setPublicKey(string $publicKey): self
  {
    $this->publicKey = $publicKey;
    return $this;
  }

  public function getCellPhone(): ?string
  {
    return $this->cellPhone;
  }

  public function setCellPhone(string $cellPhone): self
  {
    $this->cellPhone = $cellPhone;
    return $this;
  }

  public function getIndicative(): ?string
  {
    return $this->indicative;
  }

  public function setIndicative(?int $indicative): self
  {
    $this->indicative = $indicative;
    return $this;
  }

  public function getLogo(): ?string
  {
    return $this->logo;
  }

  public function setLogo(string $logo): self
  {
    $this->logo = $logo;
    return $this;
  }
}
