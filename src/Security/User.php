<?php

namespace App\Security;

use Symfony\Component\Security\Core\User\UserInterface;

class User implements UserInterface
{
  private $email;

  private $roles = [];

  private $token;

  private $name;

  private $lastName;

  private $password;

  private $privateKey;

  private $publicKey;

  private $cellPhone;

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
    // If you store any temporary, sensitive data on the user, clear it here
    // $this->plainPassword = null;
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

  public function getLastName(): ?string
  {
    return $this->lastName;
  }

  public function setLasName(string $lastName): self
  {
    $this->lastName = $lastName;

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
