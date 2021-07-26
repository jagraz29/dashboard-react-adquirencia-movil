import Breadcrumbs from '../../../components/Breadcrumbs/'
import Title from '../../../components/Title'
import React, { useEffect, useState } from 'react'
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
} from './styles'
import { useParams } from 'react-router'
import { closeTicket, detailTicket, reOpenTicket } from '../../../redux/actions'
import { toast } from 'react-toastify'
import ButtonSpinner from '../../../components/Button'
import { CardContentButton } from '../../Integraciones/styles'
const breadcrumb = [
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
const DetailTicket = () => {
  let { id }: any = useParams()
  const [prioridad, setPrioridad] = useState('')
  const [asunto, setAsunto] = useState('')
  const [departamento, setDepartamento] = useState('')
  const [texto, setTexto] = useState('')
  const [estado, setEstado] = useState('')
  const [etapa, setEtapa] = useState('')
  const [fecha, setFecha] = useState('')
  const [fechaActualizacion, setFechaActualizacion] = useState('')
  const [loadingButton, setLoadingButton] = useState(false)

  useEffect(() => {
    getTicket()
  }, [])

  const getTicket = async () => {
    const ticketDetail = await detailTicket(id)
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
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
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
  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={'Detalle ticket'}></Title>
      <Content>
        <div className={'d-flex'}>
          <div className={'col-12 pt-2 pb-4'}>
            <p style={{ color: '#5C5B5C', width: '400px' }}>
              Elija el tipo de ayuda y soporte que desea obtener
            </p>
          </div>
        </div>
        <ContentItems>
          <CardTrasactionOk>
            <CardTransactionTitle>Detalle</CardTransactionTitle>
            <ContentInput>
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
            <ContentInput>
              <ContentInputCard>
                <TitleKey>Solicitud</TitleKey>
                <LabelKey>{texto}</LabelKey>
              </ContentInputCard>
              <ContentInputCard></ContentInputCard>
            </ContentInput>
          </CardTrasactionOk>
          <CardPending>
            <CardTransactionTitle>Información adicional</CardTransactionTitle>
            <ContentInput>
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
            <CardTransactionTitle>Acción</CardTransactionTitle>
            <CardContentButton style={{ marginLeft: '10px', marginTop: '-10px' }}>
              {estado == 'abierto' ? (
                <ButtonSpinner
                  text={'Cerrar Ticket'}
                  loading={loadingButton}
                  onClick={() => {
                    ticketClose()
                  }}
                  disabled={false}
                ></ButtonSpinner>
              ) : (
                <ButtonSpinner
                  text={'Reabrir Ticket'}
                  loading={loadingButton}
                  onClick={() => {
                    ticketReOpen()
                  }}
                  disabled={false}
                ></ButtonSpinner>
              )}
            </CardContentButton>
          </CardPending>
        </ContentItems>
      </Content>
    </div>
  )
}

export default DetailTicket
