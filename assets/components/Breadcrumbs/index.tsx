import React from 'react'
import { Link } from 'react-router-dom'
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
      {breadcrumb.length>0 && breadcrumb.map((item, index) => (
        <Crumb>{item.active == true ? <Link to={item.path}>{item.title}</Link> : item.title}</Crumb>
      ))}
    </Breadcrumb>
  )
}

export default Breadcrumbs
