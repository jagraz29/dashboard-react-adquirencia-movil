import React, { useEffect, useState} from 'react'
import { Header, AvatarImg, ContainerUser, ContainerButtonMenu, DropdownUser } from './style'
import Avatar from '../Avatar'
import { IconSoporte } from '../../config/configImages'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { FiMenu } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';


const index = ({sidebar, setSidebar}:any) => {
    
    const viewState: RootState = useSelector((state: RootState) => state)
    const avatar = viewState.captcha.userData.data.logo
    const info = viewState.captcha.userData

    const [dropdown, setDropdown] = useState(false)

    return (
    
    <Header>
      <ContainerButtonMenu data-sidebar={sidebar}>
        <button onClick={() => setSidebar(!sidebar)}   >
          <FiMenu/>
        </button>
      </ContainerButtonMenu>
    <AvatarImg>
      <Link to={'/soporte'}>
        <Avatar srcImage={IconSoporte.url} size={'35px'}></Avatar>
      </Link>
      <ContainerUser onClick={() => setDropdown(!dropdown)} className="dropdown">
        {avatar?
          <Avatar srcImage={avatar} size={'35px'}></Avatar>
          :
          <FaCircle/>
        }
        {dropdown && (
          <DropdownUser className="dropdown-content">
            <a href="/logout">Cerrar sesión</a>
          </DropdownUser>
        )}
      </ContainerUser>
    </AvatarImg>
  </Header>
  )
}

export default index
