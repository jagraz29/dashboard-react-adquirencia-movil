import Breadcrumbs from '../../components/Breadcrumbs/'
import Title from '../../components/Title'
import React, { useEffect, useState } from 'react'
import { StyleContainer, CardTableTitle, ContentTable } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { Content } from '../Integraciones/styles'
import CardSupportMin from '../../components/CardSupportMin'
import { getDepartments, getPriorities, getTickets } from '../../redux/actions'
import TablaCobra from '../../components/TableCobra'
import TableSoporte from '../../components/TableSoporte'
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
const optionsSoport = [
  {
    icon: 'https://multimedia.epayco.co/dashboard/iconos-soporte/ticket-2.svg ',
    text: 'Crear ticket de soporte',
    history: true,
    url: 'soporte/nuevo',
  },
  {
    icon: 'https://multimedia.epayco.co/dashboard/iconos-soporte/conocimiento.svg',
    text: 'Base de conocimiento',
    target: true,
    url: 'https://docs.epayco.co/',
  },
  {
    icon: 'https://multimedia.epayco.co/dashboard/iconos-soporte/reunion-soporte.svg',
    text: 'Agendar reunión con soporte',
    target: true,
    url: 'https://calendly.com/epayco/',
  },
  {
    icon: 'https://multimedia.epayco.co/dashboard/iconos-soporte/contacto.svg',
    text: 'Contacto telefónico: +57 (4) 448 4952',
    phone: '+57 (4) 448 4952',
  },
]

const ticketsTitle = [
  'ID TICKET',
  'Asunto',
  'Area de Atención',
  'Estado',
  'Etapa',
  'Fecha de Creación',
  'Última Actualización',
  'Acciones',
]

const ticketsBodyTitle = [
  'id',
  'asunto',
  'departamento',
  'estado',
  'etapa',
  'fecha',
  'fechaActualizacion',
]

const Soporte = () => {
  const [ticketsOpen, setTicketsOpen] = useState([])
  const [ticketsClose, setTicketsClose] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)

    getTicketsOpen()
    getTicketsClose()
  }, [])

  const getTicketsOpen = async () => {
    const data = {
      estado: 1,
    }
    const tickets = await getTickets(data)
    if (typeof tickets != 'boolean') {
      console.log(tickets)
      setTicketsOpen(tickets)
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
  }

  const getTicketsClose = async () => {
    const data = {
      estado: 2,
    }
    const tickets = await getTickets(data)
    if (typeof tickets != 'boolean') {
      setTicketsClose(tickets)
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
  }
  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={'Soporte'}></Title>
      <Content>
        <ToastContainer />
        <div className={'row m-0 animated fadeIn wc p-2 p-lg-3 p-xl-4 '}>
          <div className="container m-lg-0" style={{ maxWidth: '100%' }}>
            <StyleContainer className={'wc'}>
              <div className={'wc pt-5'}>
                <p style={{ color: '#5C5B5C' }}>
                  Seleccione una de las siguientes opciones para resolver sus dudas o recibir
                  soporte.{' '}
                </p>
              </div>
              <div className={'row option-support '}>
                {optionsSoport.map((ticket, key) => {
                  return (
                    <div
                      key={key}
                      className={'col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center'}
                    >
                      <CardSupportMin {...ticket} className={'shadow-hover'} />
                    </div>
                  )
                })}
              </div>
              <ContentTable>
                <CardTableTitle>Tickets de soporte Abiertos / En proceso</CardTableTitle>
                {ticketsOpen && ticketsOpen.length > 0 ? (
                  <TableSoporte
                    data={ticketsOpen}
                    titleData={ticketsTitle}
                    bodyTitle={ticketsBodyTitle}
                    ticketsOpen={true}
                  />
                ) : (
                  <p style={{ textAlign: 'center' }}>
                    <i>
                      {' '}
                      No tiene tickets pendientes, si tiene alguna inquietud o algo qué resolver
                      puede <strong>crear ticket de soporte</strong>
                    </i>
                  </p>
                )}
              </ContentTable>
              <ContentTable style={{ marginBottom: '20vw' }}>
                <CardTableTitle>Tickets de soporte cerrados</CardTableTitle>
                {ticketsClose && ticketsClose.length > 0 ? (
                  <TableSoporte
                    data={ticketsClose}
                    titleData={ticketsTitle}
                    bodyTitle={ticketsBodyTitle}
                    ticketsOpen={false}
                  />
                ) : (
                  <p style={{ textAlign: 'center' }}>
                    <i> No tiene tickets cerrados</i>
                  </p>
                )}
              </ContentTable>
            </StyleContainer>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default Soporte
