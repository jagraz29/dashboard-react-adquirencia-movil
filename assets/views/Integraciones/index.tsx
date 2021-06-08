import React, { useState } from 'react'
import Title from '../../components/Title'
import { IconLink } from '../../config/configImages'
import Breadcrumbs from '../../components/Breadcrumbs/'
import TablaDashboard from '../../components/TableDashboard'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'
import {
  Content,
  ContentCard,
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardSubTitle,
  CardIcon,
} from './styles'

const breadcrumb = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Integracion',
    path: '/integracion',
    active: false,
  },
]
//BsFillCaretUpFill
//BsFillCaretDownFill

const Integraciones = () => {
  let iconStyles = { color: '#d3d3d3' }

  const [openCard, setOpenCard] = useState(false)

  const openClose = () => {
    console.log('presiono el boton')
    if (!openCard) {
      setOpenCard(true)
    } else {
      setOpenCard(false)
    }
  }

  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={'Integracion'}></Title>
      <Content>
        <ContentCard>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades del sitio</CardTitle>
              <CardSubTitle>
                Utiliza esta propiedad para configurar el checkout con tu marca y informacion del
                contacto.
              </CardSubTitle>
              <CardIcon onClick={() => openClose()}>
                {openCard == false ? (
                  <BsIcons.BsFillCaretUpFill style={iconStyles} />
                ) : (
                  <BsIcons.BsFillCaretDownFill style={iconStyles} />
                )}
              </CardIcon>
            </CardHeader>
            <CardContent>hola</CardContent>
          </Card>
        </ContentCard>
      </Content>
    </div>
  )
}

export default Integraciones
