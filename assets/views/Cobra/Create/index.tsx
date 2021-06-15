import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as BsIcons from 'react-icons/bs'

import Title from '../../../components/Title'
import Breadcrumbs from '../../../components/Breadcrumbs/'
import InputCustumer from '../../../components/InputCostumer'
import TextareaCustomer from '../../../components/TextareaCustomer'
import InputLabel from '../../../components/InputLabel'
import InputSelect from '../../../components/InputSelect'
import FileUpload from '../../../components/FileUpload'
import { RootState } from '../../../redux/reducers/index'
import { getPropertySite } from '../../../redux/actions/'

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
  InputGroup,
} from './styles'

const breadcrumb = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Cobra',
    path: '/cobra',
    active: false,
  },
]

const CobraCreate = () => {
  const iconStyles = { color: '#d3d3d3' }
  const [openCard, setOpenCard] = useState(true)

  const [openCardContent, setOpenCardContent] = useState({ display: 'block' })

  const openClose = () => {
    if (!openCard) {
      setOpenCard(true)
      setOpenCardContent({
        display: 'block',
      })
    } else {
      setOpenCard(false)
      setOpenCardContent({
        display: 'none',
      })
    }
  }

  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={'Link de Cobro'}></Title>
      <Content>
        <ContentCard>
          <Card>
            <CardHeader>
              <CardTitle>Nuevo Link de Cobro</CardTitle>
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
                  <InputLabel label={'¿Que cobra?'} />
                  <InputCustumer
                    name={'razon_social'}
                    type={'text'}
                    placeholder={'Razon social'}
                    width={'40vw'}
                    value={'hola2'}
                    onChange={(e: any) => {
                      console.log(e)
                    }}
                  />
                </ContentInputCard>
              </ContentInput>

              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Descripción'} />
                  <TextareaCustomer
                    name={'nombre_mostrar'}
                    type={'text'}
                    placeholder={
                      'Describe el producto o servicio, sus características y disponibilidad'
                    }
                    width={'22.3vw'}
                    value={'hola3'}
                    onChange={(e: any) => {
                      console.log(e)
                    }}
                  />
                </ContentInputCard>
              </ContentInput>
            </CardContent1>
            <hr />
            <CardContent1 theme={openCardContent}>
              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'# Factura'} />
                  <InputCustumer
                    name={'razon_social'}
                    type={'text'}
                    placeholder={'Ej: P0001'}
                    width={'40vw'}
                    value={'hola2'}
                    onChange={(e: any) => {
                      console.log(e)
                    }}
                  />
                </ContentInputCard>
              </ContentInput>
            </CardContent1>

            <hr />
            <CardContent1 theme={openCardContent}>
              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'¿Cuanto Vale?'} />
                  <InputGroup>
                    <InputSelect
                      name={'type_telefono'}
                      placeholder={'Seleccione Moneda'}
                      width={'6vw'}
                      dataSelect={[]}
                      onClick={() => {
                        console.log('hola')
                      }}
                      onChange={(e: any) => {
                        console.log(e)
                      }}
                    />

                    <InputCustumer
                      name={'telefono'}
                      type={'number'}
                      placeholder={'Telefono'}
                      width={'9vw'}
                      value={'hhhhh'}
                      onChange={(e: any) => {
                        console.log(e)
                      }}
                    />
                  </InputGroup>
                </ContentInputCard>
              </ContentInput>
            </CardContent1>

            <CardContentButton theme={openCardContent}>
              <ButtonOk>Guardar Información</ButtonOk>
              <ButtonCancel>Cancelar</ButtonCancel>
            </CardContentButton>
          </Card>
          {/*<Card>
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
                    <InputLabel label={'Url de respuesta'} />
                    <InputCustumer
                        name={'url_respuesta'}
                        type={'text'}
                        placeholder={'Url donde el cliente es redireccionado al finalizar'}
                        width={'22.3vw'}
                        value={''}
                        onChange={() => {}}
                    />
                    </ContentInputCard>

                    <ContentInputCard>
                    <InputLabel label={'Url de confirmación'} />
                    <InputCustumer
                        name={'url_confirmacion'}
                        type={'text'}
                        placeholder={'Url donde se envia la confirmación de la transacción'}
                        width={'22.3vw'}
                        value={''}
                        onChange={() => {}}
                    />
                    </ContentInputCard>
                </ContentInput>

                <ContentInput>
                    <ContentInputCard>
                    <InputLabel label={'Idioma predeterminado'} />
                    <InputGroup>
                        <InputSelect
                        name={'idioma'}
                        placeholder={'Idioma'}
                        width={'23.3vw'}
                        dataSelect={dataIdioma}
                        onClick={() => {}}
                        onChange={() => {}}
                        />
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
                    Utilice nuestro administrador para personalizar y adaptar la pagina de pagos al
                    diseño de su sitio web.
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
            */}
        </ContentCard>
      </Content>
    </div>
  )
}

export default CobraCreate
