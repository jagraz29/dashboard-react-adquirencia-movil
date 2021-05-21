<?php

namespace App\Entity;

use App\Repository\ClientKeyRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ClientKeyRepository::class)
 * @ORM\Table(name="llaves_clientes")
 */
class ClientKey
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $publicKey;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $privateKeyDecrypt;

    /**
     * @ORM\Column(type="integer", name="cliente_id")
     */
    private $clientId;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getPrivateKeyDecrypt(): ?string
    {
        return $this->privateKeyDecrypt;
    }

    public function setPrivateKeyDecrypt(string $privateKeyDecrypt): self
    {
        $this->privateKeyDecrypt = $privateKeyDecrypt;

        return $this;
    }

    public function getClientId(): ?int
    {
        return $this->clientId;
    }

    public function setClientId(int $clientId): self
    {
        $this->clientId = $clientId;

        return $this;
    }
}
