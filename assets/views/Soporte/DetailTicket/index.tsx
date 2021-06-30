import Breadcrumbs from '../../../components/Breadcrumbs/'
import Title from '../../../components/Title'
import React, { useEffect, useState } from 'react'
const breadcrumb = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Soporte',
    path: '/soporte',
    active: true,
  },
  {
    title: 'Detalle ticket',
    path: '/soporte/detalle/:id',
    active: false,
  },
]
const DetailTicket = () => {
  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={'Detalle ticket'}></Title>
    </div>
  )
}

export default DetailTicket
