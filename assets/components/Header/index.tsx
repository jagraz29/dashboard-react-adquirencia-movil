import React, {useState} from 'react'
import { Header, AvatarImg, ContainerUser, ContainerButtonMenu, DropdownUser, ContainermenuBreadcrumbs, ContentBreadcrumbs } from './style'
import Avatar from '../Avatar'
import { IconSoporte } from '../../config/configImages'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { FiMenu } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import Breadcrumbs from '../Breadcrumbs';

const index = ({sidebar, setSidebar, breadcrumb}:any) => {
    
    const viewState: RootState = useSelector((state: RootState) => state)
    const avatar = viewState.captcha.userData.data.logo
    const info = viewState.captcha.userData

    const [dropdown, setDropdown] = useState(false)


    return (
    <Header>
      <ContainermenuBreadcrumbs>
        <ContainerButtonMenu data-sidebar={sidebar}>
          <button onClick={() => setSidebar(!sidebar)}   >
            <FiMenu/>
          </button>
        </ContainerButtonMenu>
        <ContentBreadcrumbs>
          <Breadcrumbs breadcrumb={breadcrumb} />
        </ContentBreadcrumbs>
      </ContainermenuBreadcrumbs>

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
