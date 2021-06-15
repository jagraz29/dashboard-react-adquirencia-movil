import React, { useState, useEffect, useCallback } from 'react'
import Title from '../../components/Title'
import Breadcrumbs from '../../components/Breadcrumbs/'
import * as BsIcons from 'react-icons/bs'
import InputCustumer from '../../components/InputCostumer'
import InputLabel from '../../components/InputLabel'
import InputLabelTitle from '../../components/InputLabelTitle'
import InputSelect from '../../components/InputSelect'
import InputSelectPais from '../../components/InputSelectPais'
import FileUpload from '../../components/FileUpload'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers/index'
import {
  getPropertySite,
  setPropertySite,
  getGateWay,
  setGateWay,
  getKeys,
  getLogo,
} from '../../redux/actions/'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { datos } from './data'
import {
  Content,
  ContentCard,
  Card,
  CardHeader,
  CardContent1,
  CardContent2,
  CardContent3,
  CardContent4,
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
  ContentKeys,
  LabelKey,
  TitleKey,
  ContentKeysItem,
  FileImage,
  ContentItemCard,
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
    value: 'Celular',
    label: 'Celular',
  },
  {
    value: 'Telefono',
    label: 'Telefono',
  },
]

const dataIdioma = [
  {
    value: 'ES',
    label: 'Español',
  },
  {
    value: 'EN',
    label: 'Ingles',
  },
]
//BsFillCaretUpFill
//BsFillCaretDownFill

const Integraciones = () => {
  let iconStyles = { color: '#d3d3d3' }

  const dispatch = useDispatch()

  const [openCard, setOpenCard] = useState(false)
  const [openCard2, setOpenCard2] = useState(false)
  const [openCard3, setOpenCard3] = useState(false)
  const [openCard4, setOpenCard4] = useState(false)

  const viewState: RootState = useSelector((state: RootState) => state)

  const nombre_empresa = viewState.property.cliente.nombre_empresa
  const nombre_mostrar = viewState.property.cliente.nombre
  const telefono = viewState.property.cliente.telefono
  const celular = viewState.property.cliente.celular
  const indicativo = viewState.property.cliente.ind_pais
  const id = viewState.property.cliente.Id

  const idioma = viewState.getGateWay.gateWayData.data.idiomaPredeterminado
  const urlConfirmacion = viewState.getGateWay.gateWayData.data.urlConfirmacion
  const urlRespuesta = viewState.getGateWay.gateWayData.data.urlRespuesta

  const logo = viewState.getLogo.logoData.data.logo
  const pcust = viewState.getKeys.keysData.data.p_cust_id_cliente
  const pkey = viewState.getKeys.keysData.data.p_key
  const publiKey = viewState.getKeys.keysData.data.publicKey
  const privateKey = viewState.getKeys.keysData.data.privateKey

  const [openCardContent, setOpenCardContent] = useState({ display: 'none' })
  const [openCardContent2, setOpenCardContent2] = useState({ display: 'none' })
  const [openCardContent3, setOpenCardContent3] = useState({ display: 'none' })
  const [openCardContent4, setOpenCardContent4] = useState({ display: 'none' })
  const [valueIndicativo, setValueIndicativo] = useState(null)
  const [typeTelCel, setTypeTelCel] = useState('')
  const [razonSocial, setRazonSocial] = useState('')
  const [nombreMostrar, setNombreMostrar] = useState('')
  const [telCel, settelCel] = useState('')
  const [typeIdioma, setTypeIdioma] = useState('')
  const [urlConfir, setUrlConfir] = useState('')
  const [urlResp, setUrlResp] = useState('')

  useEffect(() => {
    dispatch(getPropertySite())
    dispatch(getGateWay())
    dispatch(getKeys())
    dispatch(getLogo())
    setTypeTelCel(telefono != null ? 'Telefono' : celular != null ? 'Celular' : '')
    setRazonSocial(nombre_empresa)
    setNombreMostrar(nombre_mostrar)
    settelCel(telefono != null ? telefono : celular != null ? celular : '')
    setTypeIdioma(idioma)
    setUrlConfir(urlConfirmacion)
    setUrlResp(urlRespuesta)
  }, [nombre_empresa])

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

  const openClose2 = () => {
    if (!openCard2) {
      setOpenCard2(true)
      setOpenCardContent2({
        display: 'block',
      })
    } else {
      setOpenCard2(false)
      setOpenCardContent2({
        display: 'none',
      })
    }
  }

  const openClose3 = () => {
    if (!openCard3) {
      setOpenCard3(true)
      setOpenCardContent3({
        display: 'block',
      })
    } else {
      setOpenCard3(false)
      setOpenCardContent3({
        display: 'none',
      })
    }
  }

  const openClose4 = () => {
    if (!openCard4) {
      setOpenCard4(true)
      setOpenCardContent4({
        display: 'block',
      })
    } else {
      setOpenCard4(false)
      setOpenCardContent4({
        display: 'none',
      })
    }
  }

  const changeTypeTelefono = useCallback((event) => {
    setTypeTelCel(event)
  }, [])

  const changeRazonSocial = useCallback((event) => {
    setRazonSocial(event)
  }, [])

  const changeNombreMostrar = useCallback((event) => {
    setNombreMostrar(event)
  }, [])

  const changeTelefono = useCallback((event) => {
    settelCel(event)
  }, [])

  const savePropiedad = async () => {
    const datos = {
      razonSocial: razonSocial,
      nombre: nombreMostrar,
      nombreEmpresa: razonSocial,
      telefono: telCel,
      celular: telCel,
      indicativoPais: '57',
      tipoTelefonoValue: 'celular',
      indicativoCiudad: '1',
      campoTelValue: '',
      valueIndicativo: '1',
      paises: [],
    }

    dispatch(setPropertySite(datos))

    const paises = viewState.setProperty.clienData

    toast.success('Guardado')
  }

  const changeUrlRespuesta = useCallback((event) => {
    setUrlResp(event)
  }, [])

  const changeUrlConfirmar = useCallback((event) => {
    setUrlConfir(event)
  }, [])

  const saveGateWay = async () => {
    const datos = {
      idiomaPredeterminado: 'ES',
      urlConfirmacion: urlConfir,
      urlRespuesta: urlResp,
    }
    dispatch(setGateWay(datos))
    toast.success('Guardado')
  }

  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={'Integracion'}></Title>

      <Content>
        <ToastContainer />
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
                  <InputLabel label={'Razon social'} />
                  <InputCustumer
                    name={'razon_social'}
                    type={'text'}
                    placeholder={'Razon social'}
                    width={'22.3vw'}
                    value={razonSocial}
                    onChange={(e: any) => {
                      changeRazonSocial(e)
                    }}
                  />
                </ContentInputCard>

                <ContentInputCard>
                  <InputLabel label={'Nombre a mostrar'} />
                  <InputCustumer
                    name={'nombre_mostrar'}
                    type={'text'}
                    placeholder={'Nombre a mostrar'}
                    width={'22.3vw'}
                    value={nombreMostrar}
                    onChange={(e: any) => {
                      changeNombreMostrar(e)
                    }}
                  />
                </ContentInputCard>
              </ContentInput>

              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Telefono negocio'} />
                  <InputGroup>
                    <InputSelect
                      name={'type_telefono'}
                      placeholder={telefono != null ? 'Telefono' : celular != null ? 'Celular' : ''}
                      width={'6vw'}
                      dataSelect={dataSelect}
                      onClick={() => {}}
                      onChange={(e: any) => {
                        changeTypeTelefono(e)
                      }}
                    />
                    {typeTelCel == 'Telefono' ? (
                      <InputCustumer
                        name={'indicativo'}
                        type={'number'}
                        placeholder={'Indicativo'}
                        width={'5vw'}
                        value={''}
                        onChange={() => {}}
                      />
                    ) : typeTelCel == 'Celular' ? (
                      <InputSelectPais
                        name={'indicativo'}
                        placeholder={indicativo}
                        width={'5vw'}
                        dataSelect={datos}
                        onClick={() => {}}
                        onChange={() => {}}
                      />
                    ) : (
                      ''
                    )}

                    <InputCustumer
                      name={'telefono'}
                      type={'number'}
                      placeholder={'Telefono'}
                      width={'9vw'}
                      value={telCel}
                      onChange={(e: any) => {
                        changeTelefono(e)
                      }}
                    />
                  </InputGroup>
                </ContentInputCard>
              </ContentInput>
            </CardContent1>

            <CardContentButton theme={openCardContent}>
              <ButtonOk
                onClick={() => {
                  savePropiedad()
                }}
              >
                Guardar Información
              </ButtonOk>
              <ButtonCancel
                onClick={() => {
                  openClose()
                }}
              >
                Cancelar
              </ButtonCancel>
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
                  <InputLabel label={'Url de respuesta'} />
                  <InputCustumer
                    name={'url_respuesta'}
                    type={'text'}
                    placeholder={'Url donde el cliente es redireccionado al finalizar'}
                    width={'22.3vw'}
                    value={urlResp}
                    onChange={(e: any) => {
                      changeUrlRespuesta(e)
                    }}
                  />
                </ContentInputCard>

                <ContentInputCard>
                  <InputLabel label={'Url de confirmación'} />
                  <InputCustumer
                    name={'url_confirmacion'}
                    type={'text'}
                    placeholder={'Url donde se envia la confirmación de la transacción'}
                    width={'22.3vw'}
                    value={urlConfir}
                    onChange={(e: any) => {
                      changeUrlConfirmar(e)
                    }}
                  />
                </ContentInputCard>
              </ContentInput>

              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Idioma predeterminado'} />
                  <InputGroup>
                    <InputSelect
                      name={'idioma'}
                      placeholder={
                        typeIdioma == 'ES' ? 'Español' : typeIdioma == 'EN' ? 'Ingles' : ''
                      }
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
              <ButtonOk
                onClick={() => {
                  saveGateWay()
                }}
              >
                Guardar Información
              </ButtonOk>
              <ButtonCancel
                onClick={() => {
                  openClose2()
                }}
              >
                Cancelar
              </ButtonCancel>
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
              <ContentItemCard>
                <FileUpload></FileUpload>
                <FileImage
                  src={
                    'https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/logos_clientes/' +
                    logo
                  }
                />
              </ContentItemCard>
            </CardContent3>

            <CardContentButton theme={openCardContent3}>
              <ButtonOk>Guardar Información</ButtonOk>
              <ButtonCancel
                onClick={() => {
                  openClose3()
                }}
              >
                Cancelar
              </ButtonCancel>
            </CardContentButton>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>llaves secretas</CardTitle>
              <CardSubTitle>
                Utiliza esta llaves para la integración personalizada desde su pagina web.
              </CardSubTitle>
              <CardIcon onClick={() => openClose4()}>
                {openCard4 == false ? (
                  <BsIcons.BsFillCaretUpFill style={iconStyles} />
                ) : (
                  <BsIcons.BsFillCaretDownFill style={iconStyles} />
                )}
              </CardIcon>
            </CardHeader>

            <CardContent4 theme={openCardContent4}>
              <ContentInputCard>
                <InputLabelTitle label={'Llaves secretas'} />
                <InputLabel
                  label={
                    'Datos de configuración para la integracion personalizada, copie estos datos y coloquelos en su formulario de envio POST.'
                  }
                />
                <ContentKeysItem>
                  <ContentKeys>
                    <TitleKey>P_CUST_ID_CLIENT: </TitleKey>
                    <LabelKey>{pcust}</LabelKey>
                  </ContentKeys>
                  <ContentKeys>
                    <TitleKey>P_KEY:</TitleKey>
                    <LabelKey>{pkey}</LabelKey>
                  </ContentKeys>
                </ContentKeysItem>
              </ContentInputCard>
            </CardContent4>
            <CardContent4 theme={openCardContent4}>
              <ContentInputCard>
                <InputLabelTitle
                  label={'Llaves secretas Api Rest, Onpage Checkout, Satandart Checkout'}
                />
                <InputLabel
                  label={
                    'Datos de configuración para la integracion personalizada con nuestros Api Rest, Onpage Checkout, Satandart Checkout.'
                  }
                />
                <ContentKeysItem>
                  <ContentKeys>
                    <TitleKey>PUBLIC_KEY: </TitleKey>
                    <LabelKey>{publiKey}</LabelKey>
                  </ContentKeys>
                  <ContentKeys>
                    <TitleKey>PRIVATE_KEY:</TitleKey>
                    <LabelKey>{privateKey}</LabelKey>
                  </ContentKeys>
                </ContentKeysItem>
              </ContentInputCard>
            </CardContent4>
          </Card>
        </ContentCard>
      </Content>
    </div>
  )
}

export default Integraciones
