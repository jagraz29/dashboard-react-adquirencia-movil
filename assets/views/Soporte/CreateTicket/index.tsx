import React, { useState, useCallback, useEffect } from 'react'
import { AiFillFilePdf } from 'react-icons/ai'

import Title from '../../../components/Title'
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
  ContainerCreateTicket,
  SubtitleHeader,
  TitleDescription,
  ContainerPhotoLoaded
} from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { useHistory } from 'react-router-dom'

const breadcrumbTitle = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Soporte',
    path: '/soporte',
    active: true,
  },
  {
    title: 'Crear ticket de soporte',
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

const CreateTicket = ({setBreadcrumb}:any) => {

  const [ticket, setTicket] = useState<ticketInterface>({
    area: '',
    impacto: '',
    asunto: '',
    solicitud: '',
    documentos: [],
  })

  const history = useHistory()

  const [departamentos, setDepartamentos] = useState([])
  const [prioridades, setPrioridades] = useState([])

  const [loadButton, setLoadButton] = useState(false)
  const [loadImages, setLoadImages] = useState<arrayFileInterface[]>([])

  useEffect(() => {
    setBreadcrumb(breadcrumbTitle)
  },[])

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
    if (res == true) {
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
    <ContainerCreateTicket>
      <Title title={'Crear ticket de soporte'}></Title>
      <Content>
        <ToastContainer />
        <ContentCard>
          <Card >
            <CardHeader>
              <CardTitle>
                <b>Datos y descripción</b>
              </CardTitle>
            </CardHeader>
            <SubtitleHeader >
              <i>
                Por favor diligencie el siguiente formulario y proporciónenos los datos más precisos
                y detallados de su solicitud, para que podamos atender su solicitud efectivamente.
              </i>
            </SubtitleHeader>
            <CardContent1>
              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Área de atención'} />
                  <InputSelect
                    name={'area'}
                    placeholder={'Servicio al cliente'}
                    width={'96%'}
                    dataSelect={departamentos}
                    onChange={handleChangeInput}
                    onClick={handleChangeInput}
                    returnComplete={true}
                  />
                </ContentInputCard>
              </ContentInput>

              <ContentInput>
                <ContentInputCard>
                    <TitleDescription>
                      Nivel de Impacto 
                      <i> De acuerdo al grado de aceptación de su actividad operativa.</i>
                    </TitleDescription>
                  <InputSelect
                    name={'impacto'}
                    placeholder={'Nivel de Impacto'}
                    width={'96%'}
                    dataSelect={prioridades}
                    onChange={handleChangeInput}
                    onClick={handleChangeInput}
                    returnComplete={true}
                  />
                </ContentInputCard>
              </ContentInput>

              <ContentInput>
                <ContentInputCard>
                  <TitleDescription>
                    Asunto 
                    <i> Especifique el tema de su solicitud.</i>
                  </TitleDescription>
                  <InputCustumer
                    name={'asunto'}
                    type={'text'}
                    placeholder={''}
                    width={'96%'}
                    maxLength={60}
                    value={ticket.asunto}
                    onChange={handleChangeInput}
                    returnComplete={true}
                  />
                    <span style={{ fontSize: '13px', color: '#ADADAD',alignSelf:"flex-end"}}>60 caracteres</span>
                </ContentInputCard>
              </ContentInput>

              <ContentInput style={{gridTemplateColumns:"100%"}}>
                <ContentInputCard>
                    <TitleDescription>
                      Solicitud 
                      <i> Describa la solicitud o requerimiento.</i>
                    </TitleDescription>
                  <TextareaCustomer
                    name={'solicitud'}
                    type={'text'}
                    placeholder={''}
                    style={{ minHeight: '7rem' }}
                    width={'96%'}
                    value={ticket.solicitud}
                    onChange={handleChangeInput}
                  />
                </ContentInputCard>
              </ContentInput>
            </CardContent1>

            <ContentInput >
              <ContentInputImageCard>
                  <TitleDescription>
                    Documentos adicionales 
                    <i> Soporte su solicitud con documentos o imágenes.</i>
                  </TitleDescription>
                <span style={{color: '#ADADAD' }}>
                  Máximo hasta 3 documentos
                </span>
                <ContainerPhotoLoaded>
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
                </ContainerPhotoLoaded>
              </ContentInputImageCard>
            </ContentInput>
          </Card>

          {/*---------------------BUTTON SECTION-----------------*/}
          <CardContentButton >
            <ButtonOk
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
    </ContainerCreateTicket>
  )
}

export default CreateTicket
