import React, { useState, useEffect } from 'react'
import './styles.tsx'
import { MenuItems } from '../MenuItems'
import SubMenuItems from '../SubMenuItems'
import LogoSidebar from '../Logo'
import NameSidebar from '../NameSidebar'
import { Nav, NavIcon, AvatarImg, SidebarNav, SidebarWrap, Submenu } from './styles'
import Avatar from '../Avatar'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers/index'
import { getDataUser } from '../../redux/actions/'
import { StorageData } from '../../services/storegeData'
import { IconService } from '../../config/configImages'

const index = () => {
  const dispatch = useDispatch()
  const [sidebar, setSidebar] = useState(true)
  const viewState: RootState = useSelector((state: RootState) => state)
  const [storage, setStorage] = useState('')

  const saveData = new StorageData().setData(viewState.captcha.userData.data)

  useEffect(() => {
    dispatch(getDataUser())
  }, [saveData])
  const name = viewState.captcha.userData.data.companyName
  const avatar = viewState.captcha.userData.data.logo

  return (
    <div>
      <Nav>
        <AvatarImg>
          <Avatar srcImage={IconService.url} size={'35px'}></Avatar>
          <Avatar srcImage={avatar} size={'35px'}></Avatar>
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
