import React, { useState, useCallback, useEffect } from 'react'

import Title from '../../../components/Title'
import Breadcrumbs from '../../../components/Breadcrumbs/'
import InputCustumer from '../../../components/InputCostumer'
import TextareaCustomer from '../../../components/TextareaCustomer'
import InputLabel from '../../../components/InputLabel'
import InputSelect from '../../../components/InputSelect'
import { createSellLink } from '../../../redux/actions/'

import Dropzone from 'react-dropzone'

import {
  Content,
  ContentCard,
  Card,
  CardHeader,
  LoadImage,
  ClosePhoto,
  CardContent1,
  CardTitle,
  ImageShow,
  ContentInput,
  CardContentButton,
  ButtonImageLoad,
  ButtonOk,
  ButtonCancel,
  ContentInputCard,
  ContentInputImageCard,
  PhotoDropLoaded,
  Spinner,
} from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

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

const CreateTicket = (props: any) => {
  const iconStyles = { color: '#ADADAD' }

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

  const [checkTax, setCheckTax] = useState(false)

  const [total, setTotal] = useState(0)

  const [impuestos, setImpuestos] = useState({ consumo: '0', agregado: '0' })

  const [loadButton, setLoadButton] = useState(false)
  const [loadImages, setLoadImages] = useState<arrayFileInterface[]>([])
  const [loadFiles, setLoadFiles] = useState<arrayFileInterface[]>([])

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
          file.base64 = event.target.result
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={'Crear ticket de soporte'}></Title>
      <Content>
        <ToastContainer />
        <ContentCard>
          <Card style={{ padding: '0 2vw' }}>
            <CardHeader>
              <CardTitle>
                <b>Datos y descripción</b>
              </CardTitle>
            </CardHeader>
            <span style={{ margin: '2vw 1vw', display: 'block', color: '#ADADAD' }}>
              <i>
                Por favor diligencie el siguiente formulario y proporciónenos los datos más precisos
                y detallados de su solicitud, para que podamos atender su solicitud efectivamente.
              </i>
            </span>
            <CardContent1>
              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Área de atención'} />
                  <InputSelect
                    name={'area'}
                    placeholder={'Servicio al cliente'}
                    width={'12vw'}
                    dataSelect={[
                      { value: 'COP', label: 'COP' },
                      { value: 'USD', label: 'USD' },
                    ]}
                    onChange={handleChangeInput}
                    onClick={handleChangeInput}
                    returnComplete={true}
                  />
                </ContentInputCard>
              </ContentInput>

              <ContentInput>
                <ContentInputCard>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <InputLabel label={'Nivel de Impacto'} />
                    <i style={{ fontSize: '0.7vw', marginLeft: '1vw', color: '#ADADAD' }}>
                      De acuerdo al grado de aceptación de su actividad operativa.
                    </i>
                  </div>
                  <InputSelect
                    name={'impacto'}
                    placeholder={'Nivel de Impacto'}
                    width={'15vw'}
                    dataSelect={[
                      { value: 'COP', label: 'COP' },
                      { value: 'USD', label: 'USD' },
                    ]}
                    onChange={handleChangeInput}
                    onClick={handleChangeInput}
                    returnComplete={true}
                  />
                </ContentInputCard>
              </ContentInput>

              <ContentInput>
                <ContentInputCard>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <InputLabel label={'Asunto'} />
                    <i style={{ fontSize: '0.7vw', marginLeft: '1vw', color: '#ADADAD' }}>
                      Especifique el tema de su solicitud.
                    </i>
                  </div>
                  <InputCustumer
                    name={'factura'}
                    type={'text'}
                    placeholder={''}
                    width={'17vw'}
                    value={cobro.factura}
                    onChange={handleChangeInput}
                    returnComplete={true}
                  />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', width: '17.5vw' }}>
                    <span style={{ fontSize: '0.7vw', color: '#ADADAD' }}>60 caracteres</span>
                  </div>
                </ContentInputCard>
              </ContentInput>

              <ContentInput>
                <ContentInputCard>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <InputLabel label={'Solicitud'} />
                    <i style={{ fontSize: '0.7vw', marginLeft: '1vw', color: '#ADADAD' }}>
                      Describa la solicitud o requerimiento.
                    </i>
                  </div>
                  <TextareaCustomer
                    name={'descripcion'}
                    type={'text'}
                    placeholder={''}
                    style={{ height: '8vw' }}
                    width={'22.3vw'}
                    value={cobro.descripcion}
                    onChange={handleChangeInput}
                  />
                </ContentInputCard>
              </ContentInput>
            </CardContent1>

            <ContentInput style={{ marginLeft: '1vw' }}>
              <ContentInputImageCard>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <InputLabel label={'Documentos adicionales'} />
                  <i style={{ fontSize: '0.7vw', marginLeft: '1vw', color: '#ADADAD' }}>
                    Soporte su solicitud con documentos o imágenes.
                  </i>
                </div>
                <span style={{ fontSize: '0.9vw', marginLeft: '1vw', color: '#ADADAD' }}>
                  Máximo hasta 3 documentos
                </span>
                <div style={{ display: 'flex' }}>
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
                      accept="image/jpeg, image/png, image/jpg, application/pdf"
                      onDrop={onDropImg}
                      maxSize={5242880}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <ButtonImageLoad {...getRootProps()}>
                          <input {...getInputProps()} />
                          <i>
                            Arrastre el archivo o{' '}
                            <span style={{ color: 'skyblue' }}>Seleccione</span> un archivo desde su
                            equipo (svg, jpg o pdf) que no supere 5MB
                          </i>
                        </ButtonImageLoad>
                      )}
                    </Dropzone>
                  )}
                </div>
              </ContentInputImageCard>
            </ContentInput>
          </Card>

          {/*---------------------BUTTON SECTION-----------------*/}
          <CardContentButton style={{ marginBottom: '5vw', marginTop: '2vw' }}>
            <ButtonOk
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              disabled={loadButton}
              onClick={handleSubmit}
            >
              {loadButton ? <Spinner /> : 'Crear Ticket'}
            </ButtonOk>
            <ButtonCancel disabled={loadButton} onClick={() => redirectRoute('/cobra')}>
              Cancelar
            </ButtonCancel>
          </CardContentButton>
        </ContentCard>
      </Content>
    </div>
  )
}

export default CreateTicket
