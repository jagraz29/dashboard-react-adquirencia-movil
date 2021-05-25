<?php

namespace App\Repository;

use App\Entity\GrantUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method GrantUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method GrantUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method GrantUser[]    findAll()
 * @method GrantUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GrantUserRepository extends ServiceEntityRepository
{
  public function __construct(ManagerRegistry $registry)
  {
    parent::__construct($registry, GrantUser::class);
  }

  // /**
  //  * @return GrantUser[] Returns an array of GrantUser objects
  //  */
  /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

  /*
    public function findOneBySomeField($value): ?GrantUser
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
