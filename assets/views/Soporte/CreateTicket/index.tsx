import React, { useState, useCallback, useEffect } from 'react'
import { AiFillFilePdf } from 'react-icons/ai'

import Title from '../../../components/Title'
import Breadcrumbs from '../../../components/Breadcrumbs/'
import InputCustumer from '../../../components/InputCostumer'
import TextareaCustomer from '../../../components/TextareaCustomer'
import InputLabel from '../../../components/InputLabel'
import InputSelect from '../../../components/InputSelect'
import { createTicket, getDepartments, getPriorities } from '../../../redux/actions/'

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
    title: 'Soporte',
    path: '/soporte',
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

interface ticketInterface {
  [key: string]: any
}

const CreateTicket = (props: any) => {
  const iconStyles = { color: '#ADADAD' }

  const [ticket, setTicket] = useState<ticketInterface>({
    area: '',
    impacto: '',
    asunto: '',
    solicitud: '',
    documentos: [],
  })

  const history = useHistory()
  const dispatch = useDispatch()

  const [departamentos, setDepartamentos] = useState([])
  const [prioridades, setPrioridades] = useState([])

  const [loadButton, setLoadButton] = useState(false)
  const [loadImages, setLoadImages] = useState<arrayFileInterface[]>([])
  const [loadFiles, setLoadFiles] = useState<arrayFileInterface[]>([])

  const onDropImg = async (accepted: any, rejected: any) => {
    if (rejected.length > 0) {
      toast.error('Solo puede subir archivos con extención .jpg, .jpeg, .png, .gif o .pdf')
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

  const deleteFile = (numero: number) => {
    const currentfiles = [...loadImages]
    currentfiles.splice(numero, 1)
    setLoadImages([...currentfiles])
  }

  const handleChangeInput = useCallback(async (e: any) => {
    const target = e.target
    const name = target.name
    const value = target.value

    await setTicket((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }, [])

  const redirectRoute = (path: string) => {
    history.push(path)
  }

  const validate = () => {
    if (
      ticket.area == '' ||
      ticket.impacto == '' ||
      ticket.asunto == '' ||
      ticket.solicitud == ''
    ) {
      return 'Debe diligenciar todos los campos obligatorios.'
    }

    return true
  }

  const handleSubmit = async () => {
    const val = validate()
    setLoadButton(true)
    const arrImages = []

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

    const data = {
      departamento: ticket.area,
      prioridad: ticket.impacto,
      asunto: ticket.asunto,
      pregunta: ticket.solicitud,
      files: arrImages,
    }

    const res = await createTicket(data)
    if (!!res == true) {
      toast.success('Se ha guardado correctamente el ticket.')
      redirectRoute('/soporte')
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
    setLoadButton(false)
  }

  const getDepartmentsBack = async () => {
    const departments = await getDepartments()

    if (typeof departments != 'boolean') {
      const newArr = departments.map((val: any) => {
        return {
          value: val.id,
          label: val.nombre,
        }
      })
      setDepartamentos(newArr)
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
  }

  const getPrioritiesBack = async () => {
    const priorities = await getPriorities()

    if (typeof priorities != 'boolean') {
      const newArr = priorities.map((val: any) => {
        return {
          value: val.id,
          label: val.nombre,
        }
      })
      setPrioridades(newArr)
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    getPrioritiesBack()
    getDepartmentsBack()
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
                    dataSelect={departamentos}
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
                    dataSelect={prioridades}
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
                    name={'asunto'}
                    type={'text'}
                    placeholder={''}
                    width={'17vw'}
                    value={ticket.asunto}
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
                    name={'solicitud'}
                    type={'text'}
                    placeholder={''}
                    style={{ height: '8vw' }}
                    width={'22.3vw'}
                    value={ticket.solicitud}
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
                        {image.type == 'application/pdf' ? (
                          <span
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              height: '100%',
                            }}
                          >
                            <AiFillFilePdf style={{ fontSize: '6vw', color: '#ADADAD' }} />
                          </span>
                        ) : (
                          <ImageShow src={URL.createObjectURL(image)} alt="" />
                        )}
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
                          <i style={{ fontSize: '10px' }}>
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
            <ButtonCancel disabled={loadButton} onClick={() => redirectRoute('/soporte')}>
              Cancelar
            </ButtonCancel>
          </CardContentButton>
        </ContentCard>
      </Content>
    </div>
  )
}

export default CreateTicket
