<?php

namespace App\Dto;
use Symfony\Component\Validator\Constraints as Assert;

class CollectTableDto
{
  private $id;

  /**
   * @Assert\NotBlank
   */
  private $quantity;

  /**
   * @Assert\NotBlank
   */
  private $amount;

  /**
   * @Assert\NotBlank
   */
  private $currency;

  /**
   * @Assert\NotBlank
   */
  private $description;

  /**
   * @Assert\NotBlank
   */
  private $title;

  /**
   * @Assert\NotBlank
   */
  private $typeSell;

  /**
   * @Assert\NotBlank
   */
  private $onePayment;

  private $indicative;

  private $mobilePhone;

  private $email;

  private $available;

  private $reference;

  private $base;

  private $tax;

  private $urlConfirmation;

  private $urlResponse;

  private $expirationDate;

  /**
   * @return mixed
   */
  public function getId()
  {
    return $this->id;
  }

  /**
   * @param mixed $id
   */
  public function setId($id): void
  {
    $this->id = $id;
  }

  /**
   * @return mixed
   */
  public function getQuantity()
  {
    return $this->quantity;
  }

  /**
   * @param mixed $quantity
   */
  public function setQuantity($quantity): void
  {
    $this->quantity = $quantity;
  }

  /**
   * @return mixed
   */
  public function getAmount()
  {
    return $this->amount;
  }

  /**
   * @param mixed $amount
   */
  public function setAmount($amount): void
  {
    $this->amount = $amount;
  }

  /**
   * @return mixed
   */
  public function getCurrency()
  {
    return $this->currency;
  }

  /**
   * @param mixed $currency
   */
  public function setCurrency($currency): void
  {
    $this->currency = $currency;
  }

  /**
   * @return mixed
   */
  public function getDescription()
  {
    return $this->description;
  }

  /**
   * @param mixed $description
   */
  public function setDescription($description): void
  {
    $this->description = $description;
  }

  /**
   * @return mixed
   */
  public function getTitle()
  {
    return $this->title;
  }

  /**
   * @param mixed $title
   */
  public function setTitle($title): void
  {
    $this->title = $title;
  }

  /**
   * @return mixed
   */
  public function getTypeSell()
  {
    return $this->typeSell;
  }

  /**
   * @param mixed $typeSell
   */
  public function setTypeSell($typeSell): void
  {
    $this->typeSell = $typeSell;
  }

  /**
   * @return mixed
   */
  public function getOnePayment()
  {
    return $this->onePayment;
  }

  /**
   * @param mixed $onePayment
   */
  public function setOnePayment($onePayment): void
  {
    $this->onePayment = $onePayment;
  }

  /**
   * @return mixed
   */
  public function getIndicative()
  {
    return $this->indicative;
  }

  /**
   * @param mixed $indicative
   */
  public function setIndicative($indicative): void
  {
    $this->indicative = $indicative;
  }

  /**
   * @return mixed
   */
  public function getReference()
  {
    return $this->reference;
  }

  /**
   * @param mixed $reference
   */
  public function setReference($reference): void
  {
    $this->reference = $reference;
  }

  /**
   * @return mixed
   */
  public function getMobilePhone()
  {
    return $this->mobilePhone;
  }

  /**
   * @param mixed $mobilePhone
   */
  public function setMobilePhone($mobilePhone): void
  {
    $this->mobilePhone = $mobilePhone;
  }

  /**
   * @return mixed
   */
  public function getEmail()
  {
    return $this->email;
  }

  /**
   * @param mixed $email
   */
  public function setEmail($email): void
  {
    $this->email = $email;
  }

  /**
   * @return mixed
   */
  public function getAvailable()
  {
    return $this->available;
  }

  /**
   * @param mixed $available
   */
  public function setAvailable($available): void
  {
    $this->available = $available;
  }

  /**
   * @return mixed
   */
  public function getBase()
  {
    return $this->base;
  }

  /**
   * @param mixed $base
   */
  public function setBase($base): void
  {
    $this->base = $base;
  }

  /**
   * @return mixed
   */
  public function getTax()
  {
    return $this->tax;
  }

  /**
   * @param mixed $tax
   */
  public function setTax($tax): void
  {
    $this->tax = $tax;
  }

  /**
   * @return mixed
   */
  public function getExpirationDate()
  {
    return $this->expirationDate;
  }

  /**
   * @param mixed $expirationDate
   */
  public function setExpirationDate($expirationDate): void
  {
    $this->expirationDate = $expirationDate;
  }

  /**
   * @return mixed
   */
  public function getUrlResponse()
  {
    return $this->urlResponse;
  }

  /**
   * @param mixed $urlResponse
   */
  public function setUrlResponse($urlResponse): void
  {
    $this->urlResponse = $urlResponse;
  }

  /**
   * @return mixed
   */
  public function getUrlConfirmation()
  {
    return $this->urlConfirmation;
  }

  /**
   * @param mixed $urlConfirmation
   */
  public function setUrlConfirmation($urlConfirmation): void
  {
    $this->urlConfirmation = $urlConfirmation;
  }
}
