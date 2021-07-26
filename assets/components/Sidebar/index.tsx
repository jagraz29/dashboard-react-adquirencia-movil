import React, { useState, useEffect } from 'react'
import './styles.tsx'
import { MenuItems } from '../MenuItems'
import { SidebarNav, SidebarWrap, NavContainer, IconLeftMenu, BackShadow} from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers/index'
import { getDataUser } from '../../redux/actions/'
import { StorageData } from '../../services/storegeData'
import { LogoDaviviendaEpayco } from '../../config/configImages'
import { useHistory } from 'react-router-dom'
import { AiOutlineLeft } from 'react-icons/ai'

const index = ({sidebar, setSidebar}:any) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const viewState: RootState = useSelector((state: RootState) => state)

  const name = viewState.captcha.userData.data.companyName
  const saveData = new StorageData().setData(viewState.captcha.userData.data)

  useEffect(() => {
    dispatch(getDataUser())
  }, [saveData])

  return (
    <NavContainer>
      <BackShadow data-show={sidebar}></BackShadow>
      <SidebarNav data-show={sidebar} >
        <SidebarWrap  data-show={sidebar}>
          {
            <IconLeftMenu data-show={sidebar} onClick={() => setSidebar(!sidebar)}>
              <AiOutlineLeft/>
            </IconLeftMenu>
            
          }
          <img width="80%" src={LogoDaviviendaEpayco.url}></img>
          <div>
            <label>{name ? name : ''}</label>
          </div>
          <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index} onClick={() => history.push(item.path)}>
                  <img src={item.icon} />
                  <h4>{item.title}</h4>
                </li>
              )
            })}
          </ul>
        </SidebarWrap>
      </SidebarNav>
    </NavContainer>
  )
}

export default index
