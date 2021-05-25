<?php

namespace App\Repository;

use App\Entity\ClientKey;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ClientKey|null find($id, $lockMode = null, $lockVersion = null)
 * @method ClientKey|null findOneBy(array $criteria, array $orderBy = null)
 * @method ClientKey[]    findAll()
 * @method ClientKey[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClientKeyRepository extends ServiceEntityRepository
{
  public function __construct(ManagerRegistry $registry)
  {
    parent::__construct($registry, ClientKey::class);
  }

  // /**
  //  * @return ClientKey[] Returns an array of ClientKey objects
  //  */
  /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

  /*
    public function findOneBySomeField($value): ?ClientKey
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
