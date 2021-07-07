import React, { useState, useEffect } from 'react'
import './styles.tsx'
import { MenuItems } from '../MenuItems'
import SubMenuItems from '../SubMenuItems'
import LogoSidebar from '../Logo'
import NameSidebar from '../NameSidebar'
import { Nav, NavIcon, AvatarImg, SidebarNav, SidebarWrap, Submenu, NavContainer } from './styles'
import { Tooltip } from 'antd'
import Avatar from '../Avatar'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers/index'
import { getDataUser } from '../../redux/actions/'
import { StorageData } from '../../services/storegeData'
import { IconService, LogoDavivienda } from '../../config/configImages'
import { IconSoporte } from '../../config/configImages'
import { Link, useHistory } from 'react-router-dom'

const index = (props: any) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [dropdown, setDropdown] = useState(false)
  const viewState: RootState = useSelector((state: RootState) => state)
  const [storage, setStorage] = useState('')

  const saveData = new StorageData().setData(viewState.captcha.userData.data)

  useEffect(() => {
    dispatch(getDataUser())
  }, [saveData])
  const name = viewState.captcha.userData.data.companyName
  const avatar = viewState.captcha.userData.data.logo
  const [sidebar, setSidebar] = useState(false)

  return (
    <NavContainer>
      <SidebarNav data-show={sidebar}>
        <SidebarWrap>
          <img width="100%" src={LogoDavivienda.url}></img>
          <div>
            <label>{name ? name : ''}</label>
          </div>
          <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index} onClick={() => history.push(item.path)}>
                  <img src={item.icon} />
                  {item.title}
                </li>
              )
            })}
          </ul>
        </SidebarWrap>
      </SidebarNav>
      <Nav>
        <button style={{ position: 'relative', zIndex: 1000 }} onClick={() => setSidebar(!sidebar)}>
          x
        </button>

        <AvatarImg>
          <Link to={'/soporte'}>
            <Avatar srcImage={IconSoporte.url} size={'35px'}></Avatar>
          </Link>
          <div onClick={() => setDropdown(!dropdown)} className="dropdown">
            <Avatar srcImage={avatar} size={'35px'}></Avatar>
            {dropdown && (
              <div className="dropdown-content">
                <a href="/logout">Cerrar sesión</a>
              </div>
            )}
          </div>
        </AvatarImg>
      </Nav>
    </NavContainer>
  )
}

export default index
