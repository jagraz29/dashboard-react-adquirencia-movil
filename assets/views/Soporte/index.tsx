import Breadcrumbs from '../../components/Breadcrumbs/'
import Title from '../../components/Title'
import React from 'react'
const breadcrumb = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Soporte',
    path: '/soporte',
    active: false,
  },
]

const Soporte = () => {
  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={'Soporte'}></Title>
    </div>
  )
}

export default Soporte
