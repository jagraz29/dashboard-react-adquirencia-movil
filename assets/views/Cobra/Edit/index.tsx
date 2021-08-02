import React, { useState, useCallback, useEffect } from 'react'
import * as BsIcons from 'react-icons/bs'

import Title from '../../../components/Title'
import InputCustumer from '../../../components/InputCostumer'
import TextareaCustomer from '../../../components/TextareaCustomer'
import InputLabel from '../../../components/InputLabel'
import CustomSwitch from '../../../components/Switch'
import InputSelect from '../../../components/InputSelect'
import NumberFormat from 'react-number-format'
import { createSellLink, editSellLink } from '../../../redux/actions'
import { config } from '../../../config/enviroment'
import Dropzone from 'react-dropzone'

import {
  Content,
  ContentCard,
  Card,
  CardHeader,
  LoadImage,
  ClosePhoto,
  CardContent1,
  CardContent2,
  CardContent3,
  CardTitle,
  CardSubTitle,
  CardIcon,
  ImageShow,
  ContentInput,
  CardContentButton,
  ButtonImageLoad,
  ButtonOk,
  ButtonCancel,
  ContentInputCard,
  ContentInputImageCard,
  InputGroup,
  PhotoDropLoaded,
  DropLoaded,
  DropDocArea,
  Spinner,
  ContainerPrincipal
} from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CardHeaderLink, CardTitleSubtitle, ContainerPhotoLoaded, ContainerTitleCustom, ContentCustomCollection, InputGroupTax, Labeltax, SubtitleDropLoaded } from '../Create/styles'

const breadcrumbTitle = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Cobra',
    path: '/cobra',
    active: true,
  },
  {
    title: 'Link de cobro',
    path: '/cobra',
    active: false,
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
  base64?: string
}

interface cobroInterface {
  [key: string]: any
}

const CobraEdit = ({setBreadcrumb}:any) => {
  const iconStyles = { color: '#d3d3d3' }

  const [cobro, setCobro] = useState<cobroInterface>({
    nombre: '',
    descripcion: '',
    factura: '',
    tipoMoneda: 'COP',
    valor: 0,
    impuestos: 0,
    imagenes: [],
    archivo: null,
    cantidad: 0,
    fechaVencimiento: '',
    urlConfirmacion: '',
    urlRespuesta: '',
    total: 0,
  })

  const history = useHistory()
  const dispatch = useDispatch()
  const params: any = useParams()
  const [checkTax, setCheckTax] = useState(false)

  const [total, setTotal] = useState(0)

  const [impuestos, setImpuestos] = useState({ consumo: '0', agregado: '0' })

  const [loadButton, setLoadButton] = useState(false)
  const [loadImages, setLoadImages] = useState<arrayFileInterface[]>([])
  const [loadFiles, setLoadFiles] = useState<arrayFileInterface[]>([])

  const [openCard, setOpenCard] = useState(true)
  const [openCard2, setOpenCard2] = useState(false)
  const [openCard3, setOpenCard3] = useState(false)

  const [openCardContent, setOpenCardContent] = useState({ display: 'block' })
  const [openCardContent2, setOpenCardContent2] = useState({ display: 'none' })
  const [openCardContent3, setOpenCardContent3] = useState({ display: 'none' })

  useEffect(() => {
    setBreadcrumb(breadcrumbTitle)
  },[])

  const onDropImg = async (accepted: any, rejected: any) => {
    if (rejected.length > 0) {
      toast.error('Solo puede subir archivos con extención .jpg, .jpeg, .png, .gif')
    } else {
      if (accepted.length > 3 - loadImages.length) {
        toast.error('Solo puede cargar hasta 3 imágenes.')
      } else {
        accepted = await Promise.all(accepted.map(fileToDataURL))
        setLoadImages((prev) => prev.concat(accepted))
      }
    }
  }

  const fileToDataURL = (file: any, pdf = false) => {
    const reader = new FileReader()
    return new Promise(function (resolve, reject) {
      reader.onload = function (event: any) {
        if (pdf) {
          const str = event.target.result.split('base64,')
          file.base64 = str[1]
        } else {
          file.base64 = event.target.result
        }
        resolve(file)
      }
      reader.readAsDataURL(file)
    })
  }

  const onDropDoc = async (accepted: any, rejected: any) => {
    if (rejected.length > 0) {
      toast.error('Error al subir el archivo pdf.')
    } else {
      accepted = await Promise.all(accepted.map((acc: any) => fileToDataURL(acc, true)))
      setLoadFiles((prev) => prev.concat(accepted))
    }
  }

  const deletedoc = () => {
    setLoadFiles([])
  }

  const deleteFile = (numero: number) => {
    const currentfiles = [...loadImages]
    currentfiles.splice(numero, 1)
    setLoadImages([...currentfiles])
  }

  const handleChangeInput = useCallback(async (e: any) => {
    const target = e.target
    const name = target.name
    const value = target.value

    if (name == 'consumo' || name == 'agregado') {
      if (value < 0) {
        toast.error('Debe ingresar un valor mayor a 0')
        return 0
      }

      await setImpuestos((prevState: any) => ({
        ...prevState,
        [name]: value,
      }))
    }

    if (name == 'valor' || name == 'cantidad') {
      if (value < 0) {
        toast.error('Debe ingresar un valor mayor a 0')
        return 0
      }
    }

    await setCobro((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }, [])

  const redirectRoute = (path: string) => {
    history.push(path)
  }

  const validate = () => {
    const regex = new RegExp(
      '^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )

    if (cobro.nombre == '' || cobro.descripcion == '' || cobro.tipoMoneda == '') {
      return 'Debe diligenciar todos los campos obligatorios.'
    }

    if (cobro.valor <= 0) {
      return 'el valor total deben ser números mayores a 0.'
    }

    if (cobro.urlConfirmacion != '') {
      if (!regex.test(cobro.urlConfirmacion)) {
        return 'La URL de confirmación es incorrecta.'
      }
    }

    if (cobro.urlRespuesta) {
      if (!regex.test(cobro.urlRespuesta)) {
        return 'La URL de respuesta es incorrecta.'
      }
    }

    if (cobro.fechaVencimiento != '') {
      const date = new Date(cobro.fechaVencimiento).getTime()
      if (date <= new Date().getTime()) {
        return 'La Fecha de vencimiento debe ser mayor a la fecha actual.'
      }
    }

    if (checkTax) {
      if (Number(impuestos.consumo) <= 0 && Number(impuestos.agregado) <= 0) {
        return 'Debe ingresar valores correctos para los impuestos.'
      }
    }

    return true
  }

  const handleSubmit = async () => {
    const val = validate()
    setLoadButton(true)
    const arrImages = []
    let file = null

    if (typeof val != 'boolean') {
      toast.error(val)
      setLoadButton(false)
      return false
    }

    if (loadImages.length > 0) {
      for (const image of loadImages) {
        arrImages.push(image.base64)
      }
    }

    if (loadFiles.length > 0) {
      file = loadFiles[0].base64
    }

    const data = {
      id: params.id,
      nombre: cobro.nombre,
      descripcion: cobro.descripcion,
      factura: cobro.factura,
      tipoMoneda: cobro.tipoMoneda,
      valor: cobro.valor,
      iva: impuestos.agregado,
      ico: impuestos.consumo,
      cantidad: cobro.cantidad > 0 ? cobro.cantidad : 1,
      fechaVencimiento: cobro.fechaVencimiento,
      urlConfirmacion: cobro.urlConfirmacion,
      urlRespuesta: cobro.urlRespuesta,
      imagenes: arrImages,
      archivo: file,
      total,
    }

    const res = await dispatch(createSellLink(data))
    if (!!res == true) {
      toast.success('Se ha guardado correctamente el link de cobro.')
      redirectRoute('/cobra')
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
    setLoadButton(false)
  }

  const openClose = async (number: number) => {
    switch (number) {
      case 1:
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
        break
      case 2:
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
        break
      case 3:
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
        break
    }
  }

  const getSellEdit = async () => {
    const id = params.id
    const res: any = await dispatch(editSellLink(Number(id)))

    if (typeof res != 'boolean') {
      if (res.tax || res.taxIco) {
        setCheckTax(true)
        const calcTax = (res.tax * 100) / res.amount
        const calcTaxIco = (res.taxIco * 100) / res.amount
        setImpuestos({ consumo: String(calcTaxIco), agregado: String(calcTax) })
      }
      let d = new Date()

      if (res.expirationDate) {
        d = new Date(res.expirationDate)
      }

      setCobro({
        nombre: res.title,
        descripcion: res.description,
        factura: res.reference,
        tipoMoneda: res.currency,
        valor: res.amount,
        impuestos: res.tax,
        imagenes: [],
        archivo: res.files,
        cantidad: res.quantity,
        fechaVencimiento:
          d.getFullYear() +
          '-' +
          ('0' + (d.getMonth() + 1)).slice(-2) +
          '-' +
          ('0' + d.getDate()).slice(-2),
        urlConfirmacion: res.urlConfirmacion,
        urlRespuesta: res.urlRespuesta,
        total: res.amount,
      })
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
  }

  useEffect(() => {
    if (checkTax) {
      const taxPercent = Number(impuestos.consumo) + Number(impuestos.agregado)
      const tax = (taxPercent * cobro.valor) / 100

      setCobro((prevState) => ({
        ...prevState,
        impuestos: tax,
      }))

      setTotal(tax + Number(cobro.valor))
    }
  }, [impuestos])

  useEffect(() => {
    const taxPercent = Number(impuestos.consumo) + Number(impuestos.agregado)
    const tax = (taxPercent * cobro.valor) / 100
    setTotal(tax + Number(cobro.valor))
  }, [cobro.valor])

  useEffect(() => {
    window.scrollTo(0, 0)

    getSellEdit()
  }, [])

  return (
    <ContainerPrincipal>
      <Title title={'Link de Cobro'}></Title>
      <Content>
        <ToastContainer />
        <ContentCard>
          <Card>
            <CardHeaderLink>
              <CardTitle>Editar link de cobro</CardTitle>
              <CardSubTitle>Datos principales del link de cobro.</CardSubTitle>
            </CardHeaderLink>

            <CardContent1 theme={openCardContent}>
              <ContentInput>
                <ContentInputCard>
                  <InputLabel required={true} label={'¿Qué cobra?'} />
                  <InputCustumer
                    name={'nombre'}
                    type={'text'}
                    placeholder={'Ej: Tennis blancos, Servicios profesionales'}
                    width={'96%'}
                    value={cobro.nombre}
                    onChange={handleChangeInput}
                    returnComplete={true}
                  />
                </ContentInputCard>
              </ContentInput>

              <ContentInput>
                <ContentInputCard>
                  <InputLabel required={true} label={'Descripción'} />
                  <TextareaCustomer
                    name={'descripcion'}
                    type={'text'}
                    placeholder={
                      'Describa el producto o servicio, sus características y disponibilidad'
                    }
                    width={'96%'}
                    value={cobro.descripcion}
                    onChange={handleChangeInput}
                  />
                </ContentInputCard>
              </ContentInput>
            </CardContent1>

            <CardContent1 theme={openCardContent}>
              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'# Factura'} />
                  <InputCustumer
                    name={'factura'}
                    type={'text'}
                    placeholder={'Ej: P0001'}
                    width={'96%'}
                    value={cobro.factura}
                    onChange={handleChangeInput}
                    returnComplete={true}
                  />
                  <span style={{ color: '#d3d3d3' }}>
                    (Número de factura o referecia único por cobro)
                  </span>
                </ContentInputCard>
              </ContentInput>
            </CardContent1>

            <CardContent1 theme={openCardContent}>
              <ContentInput>
                <ContentInputCard>
                  <InputLabel required={true} label={'¿Cuánto vale?'} />
                  <InputGroup>
                    <InputSelect
                      name={'tipoMoneda'}
                      placeholder={'Seleccione Moneda'}
                      width={'96%'}
                      value={cobro.tipoMoneda}
                      dataSelect={[
                        { value: 'COP', label: 'COP' },
                        { value: 'USD', label: 'USD' },
                      ]}
                      onChange={handleChangeInput}
                      onClick={handleChangeInput}
                      returnComplete={true}
                    />
                    <NumberFormat
                      value={`$${cobro.valor}`}
                      thousandSeparator={true}
                      className="numberFormat"
                      prefix={'$'}
                      onValueChange={(values) => {
                        const data = {
                          target: {
                            name: 'valor',
                            value: values.floatValue,
                          },
                        }
                        handleChangeInput(data)
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
                    value={checkTax}
                    onChange={() => setCheckTax(!checkTax)}
                  />
                </ContentInputCard>
              </ContentInput>
            </CardContent1>

            {checkTax && (
              <CardContent1 theme={openCardContent}>
                <ContentInput>
                  <InputGroupTax>
                    <ContentInputCard>
                      <Labeltax>Impuesto al Consumo</Labeltax>
                      <InputCustumer
                        name={'consumo'}
                        type={'number'}
                        placeholder={'10'}
                        width={'96%'}
                        value={impuestos.consumo}
                        onChange={handleChangeInput}
                        returnComplete={true}
                      />
                    </ContentInputCard>
                    <ContentInputCard>
                      <Labeltax>Impuesto al valor agregado</Labeltax>
                      <InputCustumer
                        name={'agregado'}
                        type={'number'}
                        placeholder={'10'}
                        width={'96%'}
                        value={impuestos.agregado}
                        onChange={handleChangeInput}
                        returnComplete={true}
                      />
                    </ContentInputCard>
                    <ContentInputCard>
                      <Labeltax>Total + Impuestos: ${total}</Labeltax>
                    </ContentInputCard>

                  </InputGroupTax>
                </ContentInput>
              </CardContent1>
            )}
          </Card>

          <Card>
            <CardHeader onClick={() => openClose(2)}>
              <CardTitleSubtitle>
                <CardTitle>Personalizar Cobro</CardTitle>
                <CardSubTitle>
                  Suba imágenes, especificaciones de su producto y/o servicio de un archivo de
                  caraterísticas, inventario, fecha de expiración del link de cobro.
                </CardSubTitle>
              </CardTitleSubtitle>
              <CardIcon>
                {openCard2 == true ? (
                  <BsIcons.BsFillCaretUpFill style={iconStyles} />
                ) : (
                  <BsIcons.BsFillCaretDownFill style={iconStyles} />
                )}
              </CardIcon>
            </CardHeader>

            <CardContent2 theme={openCardContent2}>
              <ContentCustomCollection style={{ borderBottom: '1px solid #d3d3d3' }}>
                <ContentInputImageCard>
                  <ContainerTitleCustom>
                    <InputLabel label={'Agregue imágenes del producto'} />
                    <SubtitleDropLoaded>(Máximo 3 imágenes en formato .jpeg, .png, .jpg, .gifdfsfdsdfsdf)</SubtitleDropLoaded>
                  </ContainerTitleCustom>
                  <ContainerPhotoLoaded>
                    <PhotoDropLoaded>
                      {loadImages.map((image, index) => ( 
                        <LoadImage key={`${image.name}-${index}`}>
                          <ImageShow src={URL.createObjectURL(image)} alt="" />
                          <ClosePhoto onClick={() => deleteFile(index)}>
                            <small>Eliminar</small>
                          </ClosePhoto>
                        </LoadImage>
                      ))}
                    </PhotoDropLoaded>
                    {loadImages.length < 3 && (
                      <Dropzone
                        accept="image/jpeg, image/png, image/jpg"
                        onDrop={onDropImg}
                        maxSize={5242880}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <ButtonImageLoad {...getRootProps()}>
                            <input {...getInputProps()} />
                            <img
                              style={{ width: '2vw' }}
                              src={`${config.amazonUrl}` + '/dashboard/image.png'}
                              alt=""
                            />
                          </ButtonImageLoad>
                        )}
                      </Dropzone>
                    )}
                  </ContainerPhotoLoaded>
                </ContentInputImageCard>
              </ContentCustomCollection>

              <ContentCustomCollection style={{ borderBottom: '1px solid #d3d3d3' }}>
                <ContentInputCard style={{marginTop: "0.5rem"}}>
                  <ContainerTitleCustom >
                    <InputLabel label={'Suba indicaciones o especificaciones del producto'} />
                    <SubtitleDropLoaded>(Máximo 1 archivo en formato .pdf)</SubtitleDropLoaded>
                  </ContainerTitleCustom>
                  <div style={{ display: 'flex', margin: '1rem 0' }}>
                    {loadFiles.map((file) => (
                      <DropLoaded key={file.name}>
                        <span>
                          <i className={'fa fa-file mr-2'}></i> {file.name}
                        </span>
                        <div className="close" onClick={deletedoc}>
                          <BsIcons.BsFillTrashFill style={{ color: 'black' }} />
                        </div>
                      </DropLoaded>
                    ))}
                    {loadFiles.length < 1 && (
                      <Dropzone
                        multiple={false}
                        accept="application/pdf"
                        onDrop={onDropDoc} 
                        maxSize={5242880}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <DropDocArea {...getRootProps()}>
                            <input {...getInputProps()} />
                            <BsIcons.BsCloudUpload
                              style={{ color: '#40A8E6', marginLeft: '0.5rem' }}
                            />
                            <p>Subir archivo</p>
                          </DropDocArea>
                        )}
                      </Dropzone>
                    )}
                  </div>
                </ContentInputCard>
              </ContentCustomCollection>

              <ContentCustomCollection style={{ borderBottom: '1px solid #d3d3d3' }}>
                <ContentInputCard style={{margin: "0.5rem 0"}}>
                  <ContainerTitleCustom >
                    <InputLabel label={'Cantidad'} />
                    <SubtitleDropLoaded>(Las veces que se hará el cobro)</SubtitleDropLoaded>
                  </ContainerTitleCustom>
                  <InputCustumer
                    name={'cantidad'}
                    type={'number'}
                    placeholder={'0'}
                    width={'15rem'}
                    value={cobro.cantidad}
                    onChange={handleChangeInput}
                    returnComplete={true}
                  />
                </ContentInputCard>
              </ContentCustomCollection>

              <ContentCustomCollection>
                <ContentInputCard style={{margin: "0.5rem 0"}}>
                  <InputLabel label={'Fecha de vencimiento'} />
                  <InputCustumer
                    name={'fechaVencimiento'}
                    type={'date'}
                    placeholder={'0'}
                    width={'15rem'}
                    value={cobro.fechaVencimiento}
                    onChange={handleChangeInput}
                    returnComplete={true}
                  />
                </ContentInputCard>
              </ContentCustomCollection>
            </CardContent2>
          </Card>

          <Card>
            <CardHeader onClick={() => openClose(3)}>
              <CardTitleSubtitle>
                <CardTitle>URL de Confirmación</CardTitle>
                <CardSubTitle>
                  Ingrese una página de confirmación y/o agradecimiento por la compra.
                </CardSubTitle>
              </CardTitleSubtitle>
              <CardIcon>
                {openCard3 == true ? (
                  <BsIcons.BsFillCaretUpFill style={iconStyles} />
                ) : (
                  <BsIcons.BsFillCaretDownFill style={iconStyles} />
                )}
              </CardIcon>
            </CardHeader>
            <CardContent3 theme={openCardContent3}>
              <ContentInput style={{borderTop: "1px solid #d3d3d3"}}>
                <ContentInputCard  style={{padding:"1rem"}}>
                  <InputLabel label={'URL de confirmación'} />
                  <InputCustumer
                    name={'urlConfirmacion'}
                    type={'text'}
                    placeholder={'https://mi-tienda.com/page-confirmation'}
                    width={'96%'}
                    value={cobro.urlConfirmacion}
                    onChange={handleChangeInput}
                    returnComplete={true}
                  />
                  <CardSubTitle>(URL donde se envia la confirmación de la transacción) </CardSubTitle>
                </ContentInputCard>
              </ContentInput>

              <ContentInput>
                <ContentInputCard  style={{padding:"0 1rem"}}>
                  <InputLabel label={'URL de respuesta'} />
                  <InputCustumer
                    name={'urlRespuesta'}
                    type={'text'}
                    placeholder={'https://mi-tienda.com/page-response'}
                    width={'96%'}
                    value={cobro.urlRespuesta}
                    onChange={handleChangeInput}
                    returnComplete={true}
                  />
                  <CardSubTitle>(URL donde el cliente es redireccionado al finalizar la transacción)</CardSubTitle>
                </ContentInputCard>
              </ContentInput>
            </CardContent3>
          </Card>

          <CardContentButton>
            <ButtonOk
              disabled={loadButton}
              onClick={handleSubmit}
            >
              {loadButton ? <Spinner /> : 'Editar link de cobro'}
            </ButtonOk>
            <ButtonCancel disabled={loadButton} onClick={() => redirectRoute('/cobra')}>
              Cancelar
            </ButtonCancel>
          </CardContentButton>
        </ContentCard>
      </Content>
    </ContainerPrincipal>
  )
}

export default CobraEdit
