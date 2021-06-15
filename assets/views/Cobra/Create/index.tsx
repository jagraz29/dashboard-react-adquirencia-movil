import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as BsIcons from 'react-icons/bs'

import Title from '../../../components/Title'
import Breadcrumbs from '../../../components/Breadcrumbs/'
import InputCustumer from '../../../components/InputCostumer'
import TextareaCustomer from '../../../components/TextareaCustomer'
import InputLabel from '../../../components/InputLabel'
import CustomSwitch from '../../../components/Switch'
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
  const [openCard2, setOpenCard2] = useState(false)
  const [openCard3, setOpenCard3] = useState(false)

  const [openCardContent, setOpenCardContent] = useState({ display: 'block' })
  const [openCardContent2, setOpenCardContent2] = useState({ display: 'none' })
  const [openCardContent3, setOpenCardContent3] = useState({ display: 'none' })

  const openClose = async (number:number) => {
    switch (number) {
      case 1:
        if(!openCard){
          setOpenCard(true)
          setOpenCardContent({
            display: 'block'
          })
        }else{
          setOpenCard(false)
          setOpenCardContent({
            display: 'none'
          });
        }
        break;
      case 2:
        if(!openCard2){
          setOpenCard2(true)
          setOpenCardContent2({
            display: 'block'
          })
        }else{
          setOpenCard2(false)
          setOpenCardContent2({
            display: 'none'
          });
        }
      break
      case 3:
        if(!openCard3){
          setOpenCard3(true)
          setOpenCardContent3({
            display: 'block'
          })
        }else{
          setOpenCard3(false)
          setOpenCardContent3({
            display: 'none'
          });
        }
        break;
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
            {
              openCardContent && <hr />
            }
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
            {
              openCardContent && <hr />
            }
            <CardContent1 theme={openCardContent}>
              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'¿Cuanto Vale?'} />
                  <InputGroup>
                    <InputSelect
                      name={'type_telefono'}
                      placeholder={'Seleccione Moneda'}
                      width={'12vw'}
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
                      width={'12vw'}
                      value={'hhhhh'}
                      onChange={(e: any) => {
                        console.log(e)
                      }}
                    />
                  </InputGroup>
                </ContentInputCard>
              </ContentInput>
            </CardContent1>

            <CardContent1 theme={openCardContent}>
              <ContentInput>
                <ContentInputCard>
                <InputLabel label={'¿Desea incluir impuestos?'} />
                  <CustomSwitch
                    disabled={false}
                    value={true}
                    onChange={(e:any) => {
                      console.log(e)
                    }}
                  />
                </ContentInputCard>
              </ContentInput>
            </CardContent1>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Personalizar Cobro</CardTitle>
              <CardSubTitle>
                  Suba imágenes, especificaciones de su producto y/o servicio de un archivo de caraterísticas, inventario y fecha de vencimiento del link de cobro.
              </CardSubTitle>
              <CardIcon onClick={() => openClose(2)}>
                  {openCard2 == true ? (
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
                          onChange={() => {console.log("holaa")}}
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
                          onChange={() => {console.log("Conf")}}
                      />
                      </ContentInputCard>
                  </ContentInput>
                </CardContent2>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>URL de Confirmación</CardTitle>
              <CardSubTitle>
                  Ingrese una página de confirmación y/o agradecimiento por la compra.
              </CardSubTitle>
              <CardIcon onClick={() => openClose(3)}>
                  {openCard3 == true ? (
                  <BsIcons.BsFillCaretUpFill style={iconStyles} />
                  ) : (
                  <BsIcons.BsFillCaretDownFill style={iconStyles} />
                  )}
              </CardIcon>
            </CardHeader>
              <CardContent3 theme={openCardContent3}>
                <ContentInput>
                    <ContentInputCard>
                      <InputLabel label={'Url de confirmación'} />
                      <InputCustumer
                          name={'url_confirmacion'}
                          type={'text'}
                          placeholder={'https://mi-tienda.com/page-response'}
                          width={'22.3vw'}
                          value={''}
                          onChange={() => {console.log("Conf")}}
                      />
                      <i style={{fontSize:"0.5vw"}}>(Url donde se envia la confirmación de la transacción)</i>
                    </ContentInputCard>
                  </ContentInput>
                  <ContentInput>
                    <ContentInputCard>
                        <InputLabel label={'Url de respuesta'} />
                        <InputCustumer
                            name={'url_respuesta'}
                            type={'text'}
                            placeholder={'https://mi-tienda.com/page-confirmation'}
                            width={'22.3vw'}
                            value={''}
                            onChange={() => {console.log("holaa")}}
                        />
                        <i style={{fontSize:"0.5vw"}}>(Url donde el cliente es redireccionado al finalizar la transacción)</i>
                    </ContentInputCard>
                  </ContentInput>
                </CardContent3>
          </Card>
          <CardContentButton>
              <ButtonOk>Guardar Información</ButtonOk>
              <ButtonCancel>Cancelar</ButtonCancel>
          </CardContentButton>
        </ContentCard>
      </Content>
    </div>
  )
}

export default CobraCreate
