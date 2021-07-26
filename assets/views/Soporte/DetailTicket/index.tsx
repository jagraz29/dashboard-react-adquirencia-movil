import Breadcrumbs from '../../../components/Breadcrumbs/'
import Title from '../../../components/Title'
import moment from 'moment'
import React, { useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faFile, faTrash } from '@fortawesome/free-solid-svg-icons'
import {
  CardPending,
  CardTransactionTitle,
  CardTrasactionOk,
  Content,
  ContentInput,
  ContentInputCard,
  ContentItems,
  LabelKey,
  TitleKey,
  StyleContainerFild,
  StyleDetail,
  ContainerDetailTicket,
  TitleSoporte,
  CardTransactionTitleAction,
  TitleDescription,
  ContainerResponseChat,
  FormChat,
  ContainerField,
  ContainerTextarea,
  ContainerFile,
  DateContainer,
  MessageContainer,
  TextMessageContainer,
  IconMessageContainer

} from './styles'
import { useParams } from 'react-router'
import {
  closeTicket,
  createTicketResponse,
  detailTicket,
  reOpenTicket,
} from '../../../redux/actions'
import { toast } from 'react-toastify'
import ButtonSpinner from '../../../components/Button'
import { CardContentButton } from '../../Integraciones/styles'
import { CardSubTitle } from '../../Cobra/Edit/styles'
import styled from 'styled-components'
import { Avatar, Button, Icon } from 'antd'
import Dropzone from 'react-dropzone'
import { Collapse } from 'react-collapse'
import { ButtonImageLoad } from '../CreateTicket/styles'
import { TicketDocument, TicketMessage } from '../../../types'

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
    title: 'Detalle ticket',
    path: '/soporte/detalle/:id',
    active: false,
  },
]
const DetailTicket = ({setBreadcrumb}:any) => {
  let { id }: any = useParams()
  const [prioridad, setPrioridad] = useState('')
  const [asunto, setAsunto] = useState('')
  const [departamento, setDepartamento] = useState('')
  const [texto, setTexto] = useState('')
  const [estado, setEstado] = useState('')
  const [etapa, setEtapa] = useState('')
  const [fecha, setFecha] = useState('')
  const [fechaActualizacion, setFechaActualizacion] = useState('')
  const [respuestas, setRespuestas] = useState<TicketMessage[]>([])
  const [loadingButton, setLoadingButton] = useState(false)
  const [showSavedDocs, setShowSavedDocs] = useState(false)
  const [slideActive, setSlideActive] = useState('')
  const [activeUpfil, setActiveUpfil] = useState(false)
  const [loading, setLoading] = useState(false)
  const [respuesta, setRespuesta] = useState('')
  const [imgLoaded, setImgLoaded] = useState([])
  const [showerror, setShowerror] = useState(false)
  const urlRackespace = process.env.REACT_APP_RACKSPACE_CONTAINER_BASE_PUBLIC_URL

  useEffect(() => {
    setBreadcrumb(breadcrumbTitle)
    getTicket()
  }, [])

  const diffDateMessege = ({ years, days, hours, min, se }: any) => {
    years = Math.round(years)
    days = Math.round(days)
    hours = Math.round(hours)
    min = Math.round(min)
    se = Math.round(se)

    if (se <= 60) {
      return se <= 1 ? `${se} segundo` : `${se} segundos`
    } else if (min <= 60) {
      return min <= 1 ? `${min} minuto` : `${min} minutos`
    } else if (hours <= 12) {
      return hours <= 1 ? `${hours} hora` : `${hours} horas`
    } else if (days <= 31) {
      return days <= 1 ? `${days} día` : `${days} días`
    } else {
      return years <= 1 ? `${years} año` : `${years} años`
    }
  }

  const ViewGalleryMessege = ({ urlBase, url, name, count, gallery, action, id }: any) => {
    // Estilo de mini vista en styleComponent
    const StyleView = styled.div`
      width: 113px;
      height: 93px;
      background-color: #ffffff;
      padding: 0px;
      margin: 0 5px;
      border-radius: 10px;
      cursor: pointer;

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: block;
      position: relative;
    `
    console.log("ACA",urlBase + url,process.env.REACT_APP_RACKSPACE_CONTAINER_BASE_PUBLIC_URL)
    return url.substr(url.length - 3) == 'pdf' ? (
      <p>
        <FontAwesomeIcon icon={faDownload} onClick={() => window.open(urlBase + url, '_blank')} />
        {name}
      </p>
    ) : (
      <StyleView
        className={`document-view-${count}`}
        style={{
          backgroundImage: `url('${urlBase + url}')`,
        }}
        onClick={() => action(gallery, id)}
      />
    )
  }

  const ListMessegeTicket = ({ id, type, name, date, text, gallery, action, floatValue, typeUser }: any) => {
    const message = text.replace(/(?:\r\n|\r|\n)/g, '<br>')
    const dateRagerMessege = moment(new Date()).format('YYYY-MM-DD')

    const dateMessege = moment(date).format('YYYY-MM-DD h:mm A')
    const dateSystem = moment(new Date())

    typeUser = typeUser===1?true:false;

    let years = moment.duration(dateSystem.diff(dateMessege)).asYears()
    let days = moment.duration(dateSystem.diff(dateMessege)).asDays()
    let hours = moment.duration(dateSystem.diff(dateMessege)).asHours()
    let min = moment.duration(dateSystem.diff(dateMessege)).asMinutes()
    let se = moment.duration(dateSystem.diff(dateMessege)).asSeconds()
    useEffect(() => {
      setTimeout(()=>{
        const cont:any = document.getElementById("StyleContainerMessege")
        cont.scroll({
          top: cont.scrollHeight,
          left: 0,
          behavior: 'smooth'
        })
      },500)
    })
    return (
      <StyleDetail>
        <DateContainer>
          <label>
            {dateMessege}
          </label>
        </DateContainer>
        <MessageContainer data-typeUser={typeUser}>
          <TextMessageContainer data-typeUser={typeUser}>
            <label>{name}</label>
            <p>{message}</p>
            {
            gallery != null 
            && 
            typeof gallery == 'object' 
            && 
            gallery.length > 0 
            && 
            gallery.map((img: any, index: any) => 
              (
                    <ViewGalleryMessege
                      urlBase={urlRackespace}
                      url={img.ruta}
                      name={img.nombre}
                      count={gallery.length}
                      key={index}
                      id={index}
                      gallery={gallery}
                      action={action}
                    />
                  )
            )}
            <i>{`Hace ${diffDateMessege({ years, days, hours, min, se })}`}</i>
          </TextMessageContainer>
          <IconMessageContainer>
          {typeof type == 'boolean' && type ? (
              <Avatar size="large" icon="user" />
            ) : (
              <Avatar
                size="large"
                src="https://multimedia.epayco.co/dashboard/v2/Logos/epayco-logo-gris.svg"
              />
            )}
          </IconMessageContainer>
        </MessageContainer>
      </StyleDetail> 
      
    )
  }

  const deleteFile = (numero: number) => {
    let currentfiles = [...imgLoaded]
    currentfiles.splice(numero, 1)
    setImgLoaded(currentfiles)
  }

  const onDropImg = async (accepted: any, rejected: any) => {
    if (rejected.length > 0) {
      toast.error('Solo puede subir archivos con extención .jpg, .jpeg, .png, .gif')
    } else {
      if (accepted.length > 3 - imgLoaded.length) {
        toast.error('Solo puede subir máximo 3 imágenes')
      } else {
        setImgLoaded(imgLoaded.concat(accepted[0]))
      }
    }
  }

  const toBase64 = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })

  const openDocSaved = (documentos: TicketDocument[], id: any) => {
    setShowSavedDocs(true)
    setSlideActive(id != null && typeof id == 'number' ? String(id) : String(documentos[0].id))
  }

  const getTicket = async () => {

    const dataRespuestas:any=[
      {
        asunto: null,
        creado_por: "ALEXANDER",
        created_at: "2021-07-02 10:27:14",
        documentos: [],
        estadosrespuestas_id: 1,
        firma: null,
        id: 193530,
        texto: "El Bicho",
        tickets_id: 19694,
        tipo_user: 1,
        tiporespuesta: 2
      },
      {
        asunto: null,
        creado_por: "ALEXANDER",
        created_at: "2021-07-02 10:27:14",
        documentos: [],
        estadosrespuestas_id: 1,
        firma: null,
        id: 193530,
        texto: "asdfasdfasd",
        tickets_id: 19694,
        tipo_user: 2,
        tiporespuesta: 2
      },
      {
        asunto: null,
        creado_por: "ALEXANDER",
        created_at: "2021-07-02 10:27:14",
        documentos: [],
        estadosrespuestas_id: 1,
        firma: null,
        id: 193530,
        texto: "El asdf El asdf",
        tickets_id: 19694,
        tipo_user: 2,
        tiporespuesta: 2
      }
    ]
    //setRespuestas(dataRespuestas)
    const data = await detailTicket(id)
    const ticketDetail = data.ticket
    if (typeof ticketDetail != 'boolean') {
      setPrioridad(ticketDetail.prioridad)
      setAsunto(ticketDetail.asunto)
      setDepartamento(ticketDetail.departamento)
      setTexto(ticketDetail.solicitud.texto)
      setEstado(ticketDetail.estado)
      setEtapa(ticketDetail.etapa)
      setFecha(ticketDetail.fecha)
      setFechaActualizacion(
        ticketDetail.fechaActualizacion != ''
          ? ticketDetail.fechaActualizacion
          : 'Sin Actualización'
      )
      setRespuestas(data.respuestas)
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
  }

  const handleInputChange = useCallback(async (e: any) => {
    const target = e.target
    const name = target.name
    const value = target.value
    setRespuesta(value)
  }, [])

  const handleSubmit = async () => {
    setLoading(true)
    const arrImages = []
    if (respuesta == '') {
      toast.error('La Respuesta es Requerida')
      setLoading(false)
      return false
    }
    if (imgLoaded.length > 0) {
      for (const image of imgLoaded) {
        arrImages.push(await toBase64(image))
      }
    }
    const data = {
      id: id,
      respuesta: respuesta,
      files: arrImages,
    }
    const res = await createTicketResponse(data)
    if (!!res == true) {
      toast.success('Se ha guardado correctamente el ticket.')
      getTicket()
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
    setLoading(false)
  }

  const ticketClose = async () => {
    setLoadingButton(true)
    const res = await closeTicket(id)
    if (typeof res != 'boolean') {
      setLoadingButton(false)
      toast.success('Ticket Cerrado Exitosamente')
      window.location.href = '/soporte/detalle/' + id
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
  }

  const ticketReOpen = async () => {
    setLoadingButton(true)
    const res = await reOpenTicket(id)
    if (typeof res != 'boolean') {
      setLoadingButton(false)
      toast.success('Ticket Reabierto Exitosamente')
      window.location.href = '/soporte/detalle/' + id
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
  }

  const crollAnimate = (index: any) => {
    let scrollHight = $('#StyleContainerMessege').prop('scrollHeight')

    if (scrollHight != null) {
      $('#StyleContainerMessege').animate({ scrollTop: scrollHight }, 1000)
    }
  }
  return (
    <ContainerDetailTicket>
      <Title title={'Detalle ticket'}></Title>
      <Content>
        <TitleSoporte>
            <p>
              Seleccione una de las siguientes opciones para resolver sus dudas o recibir
              soporte.{' '}
            </p>
          </TitleSoporte>
        
        <ContentItems>
          <CardTrasactionOk style={{padding: "1rem"}}>
            <CardTransactionTitle>Detalle</CardTransactionTitle>
            
            <ContentInput style={{borderTop:" 1px solid #d3d3d3",paddingTop: "0.5rem"}}>
              <ContentInputCard>
                <TitleKey>ID Ticket</TitleKey>
                <LabelKey>{id}</LabelKey>
              </ContentInputCard>
              <ContentInputCard>
                <TitleKey>Nivel de impacto</TitleKey>
                <LabelKey>{prioridad}</LabelKey>
              </ContentInputCard>
            </ContentInput>

            <ContentInput>
              <ContentInputCard>
                <TitleKey>Asunto</TitleKey>
                <LabelKey>{asunto}</LabelKey>
              </ContentInputCard>
              <ContentInputCard>
                <TitleKey>Área de atención</TitleKey>
                <LabelKey>{departamento}</LabelKey>
              </ContentInputCard>
            </ContentInput>

            <ContentInput style={{gridTemplateColumns: "100%"}}>
              <ContentInputCard>
                <TitleKey>Solicitud</TitleKey>
                <LabelKey >{texto}</LabelKey>
              </ContentInputCard>
            </ContentInput>
          </CardTrasactionOk>
          
          <CardPending >
            <CardTransactionTitle>Información adicional</CardTransactionTitle>
            <ContentInput style={{borderTop:" 1px solid #d3d3d3",paddingTop: "0.5rem"}}>
              <ContentInputCard>
                <TitleKey>Estado</TitleKey>
                <LabelKey>{estado}</LabelKey>
              </ContentInputCard>
            </ContentInput>
            <ContentInput>
              <ContentInputCard>
                <TitleKey>Etapa</TitleKey>
                <LabelKey>{etapa}</LabelKey>
              </ContentInputCard>
            </ContentInput>
            <ContentInput>
              <ContentInputCard>
                <TitleKey>Fecha de creación</TitleKey>
                <LabelKey>{fecha}</LabelKey>
              </ContentInputCard>
            </ContentInput>
            <ContentInput>
              <ContentInputCard>
                <TitleKey>Última actualización</TitleKey>
                <LabelKey>{fechaActualizacion}</LabelKey>
              </ContentInputCard>
            </ContentInput>

            <CardTransactionTitleAction>Acción</CardTransactionTitleAction>
            <CardContentButton>
              {estado == 'abierto' ? (
                <ButtonSpinner
                  text={'Cerrar Ticket'}
                  loading={loadingButton}
                  style={{ width: '100%' }} 
                  onClick={() => {
                    ticketClose()
                  }}
                  disabled={false}
                ></ButtonSpinner>
              ) : (
                <ButtonSpinner
                  text={'Reabrir Ticket'}
                  loading={loadingButton}
                  style={{ width: '100%' }} 
                  onClick={() => {
                    ticketReOpen()
                  }}
                  disabled={false}
                ></ButtonSpinner>
              )}
            </CardContentButton>
          </CardPending>
        </ContentItems>

        <ContentItems>
          <CardTrasactionOk>
            <TitleDescription>
              Seguimiento del ticket 
              <i>   Respuestas de la solicitud. No es un chat online</i>
            </TitleDescription>
            <ContainerResponseChat id={'StyleContainerMessege'}>
              {respuestas.map((message, index) => (
                <ListMessegeTicket
                  key={message.id}
                  text={message.texto}
                  date={message.created_at}
                  name={message.creado_por}
                  gallery={message.documentos}
                  id={index}
                  type={message.estadosrespuestas_id == 1}
                  action={openDocSaved}
                  typeUser={message.tipo_user}
                />
              ))}
            </ContainerResponseChat>
            <FormChat
              onSubmit={respuesta.length ? handleSubmit : () => {}}
              autoComplete={'off'}
            >
              <StyleContainerFild
                className={'d-flex flex-column justify-content-start align-items-end'}
              >
                {estado != 'abierto' && estado != 'proceso' && (
                  <div className={'ticket-block d-flex justify-content-center align-items-center'}>
                    <span>
                      si desea hacer una nueva pregunta o respuesta, debe reabrir el ticket
                    </span>
                  </div>
                )}
                <ContainerFile className={`${activeUpfil ? 'open' : null} `}>
                  <div className={'row m-0 mb-3'}>
                    <div className={'col-12'}>
                      <div className="campo pl-0">
                        <label htmlFor="">
                          Documentos adicionales
                          <small>
                            <i className={'cg'}>
                              Soporte su solicitud anterior con documentos o imágenes.{' '}
                            </i>
                          </small>{' '}
                        </label>
                        <p className={'description'}>Máximo hasta 3 documentos</p>
                       
                        <div className="f01 jcfs">
                          {imgLoaded.length < 3 &&
                          !loading &&
                          (estado == 'abierto' || estado == 'proceso') ? (
                            <Dropzone
                              accept="image/jpeg, image/png, image/jpg, application/pdf"
                              onDrop={onDropImg}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <ButtonImageLoad {...getRootProps()}>
                                  <input {...getInputProps()} />
                                  <i style={{ fontSize: '10px' }}>
                                    Arrastre el archivo o{' '}
                                    <span style={{ color: 'skyblue' }}>Seleccione</span> un archivo
                                    desde su equipo (svg, jpg o pdf) que no supere 5MB
                                  </i>
                                </ButtonImageLoad>
                              )}
                            </Dropzone>
                          ) : (
                            <div className={'drop-photo disabled'}>
                              <div className="f02 drop-photo-icon">
                                <span>
                                  Alcanzaste el máximo de archivos permitidos, puedes cambiar un
                                  archivo pero primero <i>elimina</i> uno.
                                </span>
                              </div>
                            </div>
                          )}

                          <div className="drop-photo-loaded f01 jcfs">
                            {imgLoaded.map((image: any, index: number) => (
                              <div className={'container-photo'}>
                                <div className="photo" key={`${image.name}-${index}`}>
                                  {image.type == 'application/pdf' ? (
                                    <p>
                                      <FontAwesomeIcon icon={faFile} />
                                      {image.name}
                                    </p>
                                  ) : (
                                    <img src={URL.createObjectURL(image)} alt="" />
                                  )}
                                  {!loading && (
                                    <div
                                      className="close-photo f02"
                                      onClick={() => deleteFile(index)}
                                    >
                                      <small>Eliminar</small>
                                    </div>
                                  )}
                                </div>
                                <div
                                  className="close-photo d-flex justify-content-center align-items-center"
                                  onClick={() => !loading && deleteFile(index)}
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                  {!loading ? <span>Eliminar</span> : <span>procesando</span>}
                                </div>
                              </div>
                            ))}
                          </div>
                          <Collapse className={'wc '} isOpened={showerror ? true : false}>
                            <small className={'error'}> {showerror}</small>
                          </Collapse>
                        </div>
                      </div>
                    </div>
                  </div>
                </ContainerFile>
                <ContainerField>
                  <Icon
                    className={'btn-icon-fil'}
                    type={`${!activeUpfil ? 'upload' : 'close-circle'}`}
                    onClick={() =>
                      !loading && (estado == 'abierto' || estado == 'proceso')
                        ? setActiveUpfil(!activeUpfil)
                        : null
                    }
                  />
                  <ContainerTextarea className={'component-textarea d-flex campo p-0'}>
                    <textarea
                      disabled={estado != 'abierto' && estado != 'proceso' ? true : loading}
                      name={'respuesta'}
                      value={respuesta}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </ContainerTextarea>
                  <Button
                    type="primary"
                    icon="message"
                    disabled={estado != 'abierto' && estado != 'proceso' ? true : loading}
                    loading={loading}
                    htmlType={!loading && respuesta.length ? 'submit' : 'button'}
                    onClick={() => {}}
                  >
                    {loading ? 'Enviando' : 'Enviar'}
                  </Button>
                </ContainerField>
              </StyleContainerFild>
            </FormChat>
          </CardTrasactionOk>
        </ContentItems>

      </Content>
    </ContainerDetailTicket>
  )
}

export default DetailTicket
