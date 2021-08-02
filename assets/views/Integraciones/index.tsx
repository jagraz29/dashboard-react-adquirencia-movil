import React, { useState, useEffect, useCallback, ReactNode } from 'react'
import Title from '../../components/Title'
import * as BsIcons from 'react-icons/bs'
import InputCustumer from '../../components/InputCostumer'
import InputLabel from '../../components/InputLabel'
import InputLabelTitle from '../../components/InputLabelTitle'
import InputSelect from '../../components/InputSelect'
import InputSelectPais from '../../components/InputSelectPais'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers/index'
import LoadingBar from '../../components/LoadingBar'
import ButtonSpinner from '../../components/Button'
import {
  getPropertySite,
  setPropertySite,
  getGateWaySite,
  setGateWaySite,
  getKeysSite,
  getLogoSite,
  setLogoSite,
} from '../../redux/actions/'
import { ToastContainer, toast, cssTransition } from 'react-toastify'
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
  ButtonCancel,
  ContentInputCard,
  InputGroup,
  ContentKeys,
  LabelKey,
  TitleKey,
  ContentKeysItem,
  FileImage,
  ContentItemCard,
  ButtonImageLoad,
  LoadImage,
  ImageShow,
  ClosePhoto,
  ContainerIntegracion,
  CardTitleSubtitle
} from './styles'
import Dropzone from 'react-dropzone'
import { config } from '../../config/enviroment'
const breadcrumbTitle = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Integración',
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
    label: 'Teléfono',
  },
]

const dataIdioma = [
  {
    value: 'ES',
    label: 'Español',
  },
  {
    value: 'EN',
    label: 'Inglés',
  },
]

interface arrayFileInterface {
  lastModified: number
  lastModifiedDate: any
  name: string
  path: string
  size: number
  type: string
  webkitRelativePath: any
}

const typeMessage = {
  success: 1,
  info: 2,
  warning: 3,
  error: 4,
}

const baja = cssTransition({
  collapse: false,
  enter: 'baja',
  exit: 'sube',
})

const Integraciones = ({setBreadcrumb}:any) => {
  let iconStyles = { color: '#d3d3d3' }

  const dispatch = useDispatch()

  const myStore: any = useSelector((state) => state)
  const { setProperty, property, getLogo, getKeys, setLogo, getGateWay, setGateWay } = myStore
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
  const [valueIndicativo, setValueIndicativo] = useState(
    telefono != '0' ? indicativo : celular != '0' ? indicativo : ''
  )
  const [typeTelCel, setTypeTelCel] = useState('')
  const [razonSocial, setRazonSocial] = useState('')
  const [nombreMostrar, setNombreMostrar] = useState('')
  const [telCel, settelCel] = useState('')
  const [typeIdioma, setTypeIdioma] = useState('')
  const [urlConfir, setUrlConfir] = useState('')
  const [urlResp, setUrlResp] = useState('')
  const [showLoadingProperty, setShowLoadingProperty] = useState(false)
  const [showLoadingGateWay, setShowLoadingGateWay] = useState(false)
  const [showLoadingLogo, setShowLoadingLogo] = useState(false)
  const [showLoadingKey, setShowLoadingKey] = useState(false)
  const [showLogoImage, setShowLogoImage] = useState(false)
  const [fileBase64, setFileBase64] = useState('')
  const [loadingButton1, setLoadingButton1] = useState(false)
  const [loadingButton2, setLoadingButton2] = useState(false)
  const [loadingButton3, setLoadingButton3] = useState(false)
  const [indicaTel, setIndicaTel] = useState(
    telefono != '0' ? indicativo : celular != '0' ? indicativo : ''
  )
  const [type, settype] = useState('info')

  const [loadImages, setLoadImages] = useState<arrayFileInterface[]>([])

  useEffect(() => {
    setBreadcrumb(breadcrumbTitle)
  },[])

  useEffect(() => {
    setTypeTelCel(telefono != '0' ? 'Teléfono' : celular != '0' ? 'Celular' : '')
    setRazonSocial(nombre_empresa)
    setNombreMostrar(nombre_mostrar)
    settelCel(telefono != '0' ? telefono : celular != '0' ? celular : '')
    setTypeIdioma(idioma)
    setUrlConfir(urlConfirmacion)
    setUrlResp(urlRespuesta)
  }, [nombre_empresa, idioma, logo, pcust])

  useEffect(() => {
    validateStatusProperty()
    showProperty()
    showKeys()
  }, [setProperty, property, getKeys])

  useEffect(() => {
    validateStatusGateWay()
    showGateWay()
  }, [setGateWay, getGateWay])

  useEffect(() => {
    validateStatusLogo()
    showLogo()
  }, [getLogo, setLogo])

  const validateStatusProperty = () => {
    if (
      setProperty.clienData.message == 'Save data successfully' &&
      (setProperty.clienData.status = true)
    ) {
      toast.success(setProperty.clienData.message)

      setLoadingButton1(false)
    } else {
      setLoadingButton1(false)
    }
  }

  const validateStatusGateWay = () => {
    if (
      setGateWay.gateWayData.message == 'Save data successfully' &&
      (setGateWay.gateWayData.status = true)
    ) {
      toast.success(setGateWay.gateWayData.message)
      setLoadingButton2(false)
    } else {
      setLoadingButton2(false)
    }

    if (
      setGateWay.gateWayData.message == 'Update Logo Successfully' &&
      (setGateWay.gateWayData.status = true)
    ) {
      toast.success(setGateWay.gateWayData.message)
      setLoadingButton3(false)
    } else {
      setLoadingButton3(false)
    }
  }

  const validateStatusLogo = () => {
    if (
      setGateWay.gateWayData.message == 'Save data successfully' &&
      (setGateWay.gateWayData.status = true)
    ) {
      toast.success(setGateWay.gateWayData.message)
      setLoadingButton3(false)
    } else {
      setLoadingButton3(false)
    }
  }

  const showProperty = () => {
    if (id != 0) {
      setShowLoadingProperty(true)
    }
  }

  const showGateWay = () => {
    if (idioma != '') {
      setShowLoadingGateWay(true)
    }
  }

  const showLogo = () => {
    if (logo != '') {
      setShowLoadingLogo(true)
    }
  }

  const showKeys = () => {
    if (pcust != '') {
      setShowLoadingKey(true)
    }
  }

  const openClose = () => {
    if (!openCard) {
      setOpenCard(true)
      setOpenCardContent({
        display: 'block',
      })

      dispatch(getPropertySite())
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

      dispatch(getGateWaySite())
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

      dispatch(getLogoSite())
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
      dispatch(getKeysSite())
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

  const changeIndicativo = useCallback((event) => {
    setValueIndicativo(event)
  }, [])

  const changeTelefonoind = useCallback((event) => {
    setIndicaTel(event)
  }, [])

  const onDropImg = async (accepted: any, rejected: any) => {
    if (rejected.length > 0) {
      toast.error('Solo puede subir archivos con extención .jpg, .jpeg, .png, .gif')
    } else {
      if (accepted.length > 1 - loadImages.length) {
        toast.error('solo puede cargar hasta 3 imágenes.')
      } else {
        accepted = await Promise.all(accepted.map(fileToDataURL))
        setFileBase64(accepted[0].base64)
        setShowLogoImage(true)
        setLoadImages((prev) => prev.concat(accepted))
      }
    }
  }

  const deleteFile = (numero: number) => {
    const currentfiles = [...loadImages]
    currentfiles.splice(numero, 1)
    setLoadImages([...currentfiles])
    setShowLogoImage(false)
  }

  const fileToDataURL = (file: any) => {
    const reader = new FileReader()
    return new Promise(function (resolve, reject) {
      reader.onload = function (event: any) {
        file.base64 = event.target.result
        resolve(file)
      }
      reader.readAsDataURL(file)
    })
  }

  const savePropiedad = () => {
    let datos
    if (typeTelCel == 'Celular') {
      datos = {
        razonSocial: razonSocial,
        nombre: nombreMostrar,
        nombreEmpresa: razonSocial,
        telefono: '0',
        celular: telCel,
        indicativoPais: valueIndicativo,
        tipoTelefonoValue: 'celular',
        indicativoCiudad: '1',
        campoTelValue: '',
        valueIndicativo: '1',
        paises: [],
      }
    } else {
      datos = {
        razonSocial: razonSocial,
        nombre: nombreMostrar,
        nombreEmpresa: razonSocial,
        telefono: telCel,
        celular: '0',
        indicativoPais: indicaTel,
        tipoTelefonoValue: 'celular',
        indicativoCiudad: '1',
        campoTelValue: '',
        valueIndicativo: '1',
        paises: [],
      }
    }

    if (razonSocial == null || nombreMostrar == '') {
      toast.error('Campo obligatorio')
    } else {
      if (razonSocial == null || razonSocial == '') {
        toast.error('Campo obligatorio')
      } else {
        if (telCel == null || telCel == '') {
          toast.error('Campo obligatorio')
        } else {
          dispatch(setPropertySite(datos))
          setLoadingButton1(true)
        }
      }
    }
  }

  const handleChangeToast = () => {}

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
    dispatch(setGateWaySite(datos))
    setLoadingButton2(true)
  }

  const saveLogo = () => {
    const datos = {
      logo: fileBase64,
    }

    dispatch(setLogoSite(datos))
    setLoadingButton3(true)
  }

  return (
    <ContainerIntegracion>
      <Title title={'Integración'}></Title>

      <Content>
        <ToastContainer />

        <ContentCard>
          <Card>
            <CardHeader onClick={() => openClose()}>
              <CardTitleSubtitle>
                <CardTitle>Propiedades del sitio</CardTitle>
                <CardSubTitle>
                  Utilice esta propiedad para configurar el checkout con su marca e información del
                  contacto.
                </CardSubTitle>
              </CardTitleSubtitle>
              <CardIcon>
                {openCard == false ? (
                  <BsIcons.BsFillCaretDownFill style={iconStyles} />
                ) : (
                  <BsIcons.BsFillCaretUpFill style={iconStyles} />
                )}
              </CardIcon>
            </CardHeader>

            <CardContent1 theme={openCardContent}>
              {showLoadingProperty == false ? (
                <LoadingBar text={'Cargando...'} />
              ) : showLoadingProperty == true ? (
                <ContentInput>
                  <ContentInputCard>
                    <InputLabel label={'Razón social'} />
                    <InputCustumer
                      name={'razon_social'}
                      type={'text'}
                      placeholder={'Razon social'}
                      width={'90%'}
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
                      width={'90%'}
                      value={nombreMostrar}
                      onChange={(e: any) => {
                        changeNombreMostrar(e)
                      }}
                    />
                  </ContentInputCard>
                </ContentInput>
              ) : (
                ''
              )}
              {showLoadingProperty == false ? (
                ''
              ) : showLoadingProperty == true ? (
                <ContentInput>
                  <ContentInputCard>
                    <InputLabel label={'Teléfono negocio'} />
                    <InputGroup>
                      <InputSelect
                        name={'type_telefono'}
                        placeholder={telefono != '0' ? 'Teléfono' : celular != '0' ? 'Celular' : '' }
                        width={'30%'}
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
                          width={'30%'}
                          value={indicaTel}
                          onChange={(e: any) => {
                            changeTelefonoind(e)
                          }}
                        />
                      ) : (
                        <InputSelectPais
                          name={'indicativo'}
                          placeholder={indicativo}
                          width={'30%'}
                          dataSelect={datos}
                          onClick={() => {}}
                          onChange={(e: any) => {
                            changeIndicativo(e)
                          }}
                        />
                      ) 
                      }

                      <InputCustumer
                        name={'telefono'}
                        type={'number'}
                        placeholder={'Teléfono'}
                        width={'30%'}
                        value={telCel}
                        onChange={(e: any) => {
                          changeTelefono(e)
                        }}
                      />
                    </InputGroup>
                  </ContentInputCard>
                </ContentInput>
              ) : (
                ''
              )}


              {showLoadingProperty == false ? (
                ''
              ) : showLoadingProperty == true ? (
                <CardContentButton theme={openCardContent}>
                  <ButtonSpinner
                    text={'Guardar Información'}
                    loading={loadingButton1}
                    onClick={() => {
                      savePropiedad()
                    }}
                    disabled={false}
                  />
                  {loadingButton1 == false ? (
                    <ButtonCancel
                      onClick={() => {
                        openClose()
                      }}
                    >
                      Cancelar
                    </ButtonCancel>
                  ) : (
                    ''
                  )}
                </CardContentButton>
              ) : (
                ''
              )}
            </CardContent1>

          </Card>

          <Card>
            <CardHeader onClick={() => openClose2()}>
            <CardTitleSubtitle>
              <CardTitle>Opciones pasarela</CardTitle>
              <CardSubTitle>
                Configure y/o predetermine parámetros para personalizar la experiencia de pago.
              </CardSubTitle>
              </CardTitleSubtitle>
              <CardIcon>
                {openCard2 == false ? (
                  <BsIcons.BsFillCaretDownFill style={iconStyles} />
                ) : (
                  <BsIcons.BsFillCaretUpFill style={iconStyles} />
                )}
              </CardIcon>
            </CardHeader>

            <CardContent2 theme={openCardContent2}>
              {showLoadingGateWay == false ? (
                <LoadingBar text={'Cargando...'} />
              ) : showLoadingGateWay == true ? (
                <ContentInput>
                  <ContentInputCard>
                    <InputLabel label={'Url de respuesta'} />
                    <InputCustumer
                      name={'url_respuesta'}
                      type={'text'}
                      placeholder={'Url donde el cliente es redireccionado al finalizar'}
                      width={'90%'}
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
                      width={'90%'}
                      value={urlConfir}
                      onChange={(e: any) => {
                        changeUrlConfirmar(e)
                      }}
                    />
                  </ContentInputCard>
                </ContentInput>
              ) : (
                ''
              )}
              {showLoadingGateWay == false ? (
                ''
              ) : showLoadingGateWay == true ? (
                <ContentInput>
                  <ContentInputCard>
                    <InputLabel label={'Idioma predeterminado'} />
                    <InputGroup>
                      <InputSelect
                        name={'idioma'}
                        placeholder={
                          typeIdioma == 'ES' ? 'Español' : typeIdioma == 'EN' ? 'Ingles' : ''
                        }
                        width={'90%'}
                        dataSelect={dataIdioma}
                        onClick={() => {}}
                        onChange={() => {}}
                      />
                    </InputGroup>
                  </ContentInputCard>
                </ContentInput>
              ) : (
                ''
              )}
            {showLoadingGateWay == false ? (
              ''
            ) : showLoadingGateWay == true ? (
              <CardContentButton theme={openCardContent2}>
                <ButtonSpinner
                  text={'Guardar Información'}
                  loading={loadingButton2}
                  onClick={() => {
                    saveGateWay()
                  }}
                  disabled={false}
                />
                {loadingButton2 == false ? (
                  <ButtonCancel
                    onClick={() => {
                      openClose2()
                    }}
                  >
                    Cancelar
                  </ButtonCancel>
                ) : (
                  ''
                )}
              </CardContentButton>
            ) : (
              ''
            )}
            </CardContent2>
          </Card>

          <Card>
            <CardHeader onClick={() => openClose3()}>
            <CardTitleSubtitle>
              <CardTitle>Personalización página de pagos</CardTitle>
              <CardSubTitle>
                Utilice nuestro administrador para personalizar y adaptar la página de pagos al
                diseño de su sitio web.
              </CardSubTitle>
              </CardTitleSubtitle>
              <CardIcon>
                {openCard3 == false ? (
                  <BsIcons.BsFillCaretDownFill style={iconStyles} />
                ) : (
                  <BsIcons.BsFillCaretUpFill style={iconStyles} />
                )}
              </CardIcon>
            </CardHeader>

            <CardContent3 theme={openCardContent3}>
              {showLoadingLogo == false ? (
                <LoadingBar text={'Cargando...'} />
              ) : showLoadingLogo == true ? (
                <ContentItemCard>
                  <Dropzone
                    accept="image/jpeg, image/png, image/jpg"
                    onDrop={onDropImg}
                    maxSize={5242880}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <ButtonImageLoad {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>
                          Click para adjuntar <br /> <b>Logo</b> <br />( O arrastre el documento)
                        </p>
                      </ButtonImageLoad>
                    )}
                  </Dropzone>

                  {showLogoImage == false ? (
                    <FileImage
                      src={`${config.rackspaceImages}/${logo}`}
                    ></FileImage>
                  ) : (
                    loadImages.map((image, index) => (
                      <LoadImage key={`${image.name}-${index}`}>
                        <ImageShow src={URL.createObjectURL(image)} alt="" />
                        <ClosePhoto onClick={() => deleteFile(index)}>
                          <small>Eliminar</small>
                        </ClosePhoto>
                      </LoadImage>
                    ))
                  )}
                </ContentItemCard>
              ) : (
                ''
              )}
            {showLoadingLogo == false ? (
              ''
            ) : showLoadingLogo == true ? (
              <CardContentButton theme={openCardContent3}>
                <ButtonSpinner
                  text={'Guardar Información'}
                  loading={loadingButton3}
                  onClick={() => {
                    saveLogo()
                  }}
                  disabled={false}
                />
                {loadingButton3 == false ? (
                  <ButtonCancel
                    onClick={() => {
                      openClose3()
                    }}
                  >
                    Cancelar
                  </ButtonCancel>
                ) : (
                  ''
                )}
              </CardContentButton>
            ) : (
              ''
            )}
            </CardContent3>
          </Card>

          <Card style={{marginBottom:"1rem"}} >
            <CardHeader onClick={() => openClose4()}>
              <CardTitleSubtitle>
                <CardTitle>Llaves secretas</CardTitle>
                <CardSubTitle>
                  Utilice estas llaves para la integración personalizada desde su página web.
                </CardSubTitle>
                </CardTitleSubtitle>
              <CardIcon>
                {openCard4 == false ? (
                  <BsIcons.BsFillCaretDownFill style={iconStyles} />
                ) : (
                  <BsIcons.BsFillCaretUpFill style={iconStyles} />
                )}
              </CardIcon>
            </CardHeader>

            <CardContent4 theme={openCardContent4}>
              {showLoadingKey == false ? (
                <LoadingBar text={'Cargando...'} />
              ) : showLoadingKey == true ? (
                <ContentInputCard>
                  <InputLabelTitle label={'Llaves secretas'} />
                  <InputLabel
                    label={
                      'Datos de configuración para la integración personalizada, copie estos datos y colóquelos en su formulario de envio POST.'
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
              ) : (
                ''
              )}
            {showLoadingKey == false ? (
              ''
            ) : showLoadingKey == true ? (
                <ContentInputCard>
                  <InputLabelTitle
                    label={'Llaves secretas Api Rest, Onpage Checkout, Satandart Checkout'}
                  />
                  <InputLabel
                    label={
                      'Datos de configuración para la integración personalizada con nuestros Api Rest, Onpage Checkout, Standard Checkout.'
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
            ) : (
              ''
              )}
            </CardContent4>

          </Card>
        </ContentCard>
      </Content>
    </ContainerIntegracion>
  )
}

export default Integraciones
