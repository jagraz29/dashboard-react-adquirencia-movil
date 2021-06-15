import React from 'react'
import { SidebarLink, Icons, SidebarLabel } from './styles'

type Props = {
  items: {
    title: string
    path: string
    icon: string
    iconClosed: JSX.Element
    iconOpen: JSX.Element
    subNav: {
      title: string
      path: string
      icon: JSX.Element
    }[]
  }
}

const SubMenuItems: React.FC<Props> = ({ items }) => {
  return (
    <div>
      <SidebarLink to={items.path}>
        <div>
          <Icons src={items.icon}></Icons>
          <SidebarLabel>{items.title}</SidebarLabel>
        </div>
      </SidebarLink>
    </div>
  )
}

export default SubMenuItems
