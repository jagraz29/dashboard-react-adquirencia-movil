import React, { useState } from 'react'
import Title from '../../components/Title'
import { IconLink } from '../../config/configImages'
import Breadcrumbs from '../../components/Breadcrumbs/'
import TablaDashboard from '../../components/TableDashboard'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'
import InputCustumer from '../../components/InputCostumer'
import InputLabel from '../../components/InputLabel'
import InputSelect from '../../components/InputSelect'
import FileUpload from '../../components/FileUpload'
import {
  Content,
  ContentCard,
  Card,
  CardHeader,
  CardContent1,
  CardContent2,
  CardContent3,
  CardTitle,
  CardSubTitle,
  CardIcon,
  ContentInput,
  CardContentButton,
  CardButton,
  ButtonOk,
  ButtonCancel,
  ContentInputCard,
  InputGroup
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

const dataSelect = [
  {
    value: '1',
    label: 'Celular'
  },
  {
    value: '2',
    label: 'Fijo',
  },
]

const dataIdioma = [
  {
    value: '1',
    label: 'Español'
  },
  {
    value: '2',
    label: 'Ingles',
  },
]
//BsFillCaretUpFill
//BsFillCaretDownFill

const Integraciones = () => {
  let iconStyles = { color: '#d3d3d3' }

  const [openCard, setOpenCard] = useState(false)
  const [openCard2, setOpenCard2] = useState(false)
  const [openCard3, setOpenCard3] = useState(false)
  const [openCardContent, setOpenCardContent] = useState({display: 'none'})
  const [openCardContent2, setOpenCardContent2] = useState({display: 'none'})
  const [openCardContent3, setOpenCardContent3] = useState({display: 'none'})

  const openClose = () => {
    console.log('presiono el boton')
    if (!openCard) {
      setOpenCard(true)
      setOpenCardContent({
        display: 'block'
      })
    } else {
      setOpenCard(false)
      setOpenCardContent({
        display: 'none'
      })
    }
  }

  const openClose2 = () => {
    if (!openCard2) {
      setOpenCard2(true)
      setOpenCardContent2({
        display: 'block'
      })
    } else {
      setOpenCard2(false)
      setOpenCardContent2({
        display: 'none'
      })
    }
  }

  const openClose3 = () => {
    if (!openCard3) {
      setOpenCard3(true)
      setOpenCardContent3({
        display: 'block'
      })
    } else {
      setOpenCard3(false)
      setOpenCardContent3({
        display: 'none'
      })
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

            <CardContent1 theme={openCardContent}>
              <ContentInput>
                <ContentInputCard>                  
                  <InputLabel label={'Razon social'}/>
                  <InputCustumer name={'razon_social'} type={'text'} placeholder={'Razon social'} width={'22.3vw'}/>
                </ContentInputCard>

                <ContentInputCard>
                  <InputLabel label={'Nombre a mostrar'}/>
                  <InputCustumer name={'nombre_mostrar'} type={'text'} placeholder={'Nombre a mostrar'} width={'22.3vw'}/>
                </ContentInputCard>

              </ContentInput>

              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Telefono negocio'}/>
                  <InputGroup>
                    <InputSelect name={'type_telefono'}  placeholder={'Tipo'} width={'6vw'} dataSelect={dataSelect}/>
                    <InputCustumer name={'indicativo'} type={'number'}  placeholder={'Indicativo'} width={'5vw'}/>
                    <InputCustumer name={'telefono'} type={'number'}  placeholder={'Telefono'} width={'9vw'}/>
                  </InputGroup>
                </ContentInputCard>
              </ContentInput>

            </CardContent1>

            <CardContentButton theme={openCardContent}>
              <ButtonOk>Guardar Información</ButtonOk>
              <ButtonCancel>Cancelar</ButtonCancel>
            </CardContentButton>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Opciones pasarela</CardTitle>
              <CardSubTitle>
                Configura y/o predetermina parametros para personalizar la experiencia de pago.
              </CardSubTitle>
              <CardIcon onClick={() => openClose2()}>
                {openCard2 == false ? (
                  <BsIcons.BsFillCaretUpFill style={iconStyles} />
                ) : (
                  <BsIcons.BsFillCaretDownFill style={iconStyles} />
                )}
              </CardIcon>
            </CardHeader>

            <CardContent2 theme={openCardContent2}>
              <ContentInput>
                <ContentInputCard>                  
                  <InputLabel label={'Url de respuesta'}/>
                  <InputCustumer name={'url_respuesta'} type={'text'} placeholder={'Url donde el cliente es redireccionado al finalizar'} width={'22.3vw'}/>
                </ContentInputCard>

                <ContentInputCard>
                  <InputLabel label={'Url de confirmación'}/>
                  <InputCustumer name={'url_confirmacion'} type={'text'} placeholder={'Url donde se envia la confirmación de la transacción'} width={'22.3vw'}/>
                </ContentInputCard>
              </ContentInput>

              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Idioma predeterminado'}/>
                  <InputGroup>
                    <InputSelect name={'idioma'}  placeholder={'Idioma'} width={'23.3vw'} dataSelect={dataIdioma}/>
                   
                  </InputGroup>
                </ContentInputCard>
              </ContentInput>

            </CardContent2>

            <CardContentButton theme={openCardContent2}>
              <ButtonOk>Guardar Información</ButtonOk>
              <ButtonCancel>Cancelar</ButtonCancel>
            </CardContentButton>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Personalización página de pagos</CardTitle>
              <CardSubTitle>
                Utilice nuestro administrador para personalizar y adaptar la pagina de pagos al diseño de su sitio web.
              </CardSubTitle>
              <CardIcon onClick={() => openClose3()}>
                {openCard3 == false ? (
                  <BsIcons.BsFillCaretUpFill style={iconStyles} />
                ) : (
                  <BsIcons.BsFillCaretDownFill style={iconStyles} />
                )}
              </CardIcon>
            </CardHeader>

            <CardContent3 theme={openCardContent3}>
              <FileUpload></FileUpload>

            </CardContent3>

            <CardContentButton theme={openCardContent3}>
              <ButtonOk>Guardar Información</ButtonOk>
              <ButtonCancel>Cancelar</ButtonCancel>
            </CardContentButton>
          </Card>

          
        </ContentCard>
      </Content>
    </div>
  )
}

export default Integraciones
