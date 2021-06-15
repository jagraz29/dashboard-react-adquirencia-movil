import React from 'react'
import { Breadcrumb, Crumb } from './styles'

type Props = {
  breadcrumb: {
    title: string
    path: string
    active: boolean
  }[]
}

const Breadcrumbs: React.FC<Props> = ({ breadcrumb }) => {
  return (
    <Breadcrumb>
      {breadcrumb.map((item, index) => (
        <Crumb>{item.active == true ? <a href={item.path}>{item.title}</a> : item.title}</Crumb>
      ))}
    </Breadcrumb>
  )
}

export default Breadcrumbs
