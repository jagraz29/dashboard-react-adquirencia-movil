import React, { useState } from 'react'
import './styles.tsx'
import * as FaIcons from 'react-icons/fa'
import { MenuItems } from '../MenuItems'
import SubMenuItems from '../SubMenuItems'
import LogoSidebar from '../Logo'
import NameSidebar from '../NameSidebar'
import { LogoEpayCo } from '../../config/configImages'
import { Nav, NavIcon, AvatarImg, SidebarNav, SidebarWrap, Submenu } from './styles'
import Avatar from '../Avatar'

const index = () => {
  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => setSidebar(!sidebar)

  const name = 'Paola Castellanos'

  return (
    <div>
      <Nav>
        <AvatarImg>
          <Avatar srcImage={'https://picsum.photos/200'} size={'35px'}></Avatar>
          <Avatar srcImage={'https://picsum.photos/100'} size={'35px'}></Avatar>
        </AvatarImg>

        <SidebarNav>
          <SidebarWrap>
            <LogoSidebar></LogoSidebar>
            <NameSidebar name={name}></NameSidebar>
            <Submenu>
              {MenuItems.map((item, index) => {
                return <SubMenuItems items={item} key={index}></SubMenuItems>
              })}
            </Submenu>
          </SidebarWrap>
        </SidebarNav>
      </Nav>
    </div>
  )
}

export default index
