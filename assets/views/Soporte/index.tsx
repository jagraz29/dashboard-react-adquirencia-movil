import Title from '../../components/Title'
import React, { useEffect, useState } from 'react'
import { 
  StyleContainer, 
  CardTableTitle, 
  ContentTable,
  ContainerSoporte, 
  ContentSoporte,
  OptionsSoporte,
  TitleSoporte,
} from './styles'
import { toast, ToastContainer } from 'react-toastify'
import CardSupportMin from '../../components/CardSupportMin'
import { getTickets } from '../../redux/actions'
import TableSoporte from '../../components/TableSoporte'
const breadcrumbTitle = [
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
    icon: process.env.REACT_APP_AMAZON_URL + '/dashboard/iconos-soporte/ticket-2.svg',
    text: 'Crear ticket de soporte',
    history: true,
    url: 'soporte/nuevo',
  },
  {
    icon: process.env.REACT_APP_AMAZON_URL + '/dashboard/iconos-soporte/conocimiento.svg',
    text: 'Base de conocimiento',
    target: true,
    url: 'https://docs.epayco.co/',
  },
  {
    icon: process.env.REACT_APP_AMAZON_URL + '/dashboard/iconos-soporte/reunion-soporte.svg',
    text: 'Agendar reunión con soporte',
    target: true,
    url: 'https://calendly.com/epayco/',
  },
  {
    icon: process.env.REACT_APP_AMAZON_URL + '/dashboard/iconos-soporte/contacto.svg',
    text: 'Contacto telefónico: +57 (4) 448 4952',
    phone: '+57 (4) 448 4952',
  },
]

const ticketsTitle = [
  'ID Ticket',
  'Asunto',
  'Área de atención',
  'Estado',
  'Etapa',
  'Fecha de creación',
  'Última actualización',
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

const Soporte = ({setBreadcrumb}:any) => {
  const [ticketsOpen, setTicketsOpen] = useState([])
  const [ticketsClose, setTicketsClose] = useState([])
  
  useEffect(() => {
    setBreadcrumb(breadcrumbTitle)
  },[])

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
    <ContainerSoporte>
      <Title title={'Soporte'}></Title>
      <ContentSoporte>
        <ToastContainer />
        <StyleContainer>
          <TitleSoporte>
            <p>
              Seleccione una de las siguientes opciones para resolver sus dudas o recibir
              soporte.{' '}
            </p>
          </TitleSoporte>
          <OptionsSoporte >
            {optionsSoport.map((ticket, key) => {
              return <CardSupportMin key={key} {...ticket} className={'shadow-hover'} />
            })}
          </OptionsSoporte>
          </StyleContainer>

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
                No tiene tickets pendientes, si tiene alguna inquietud o algo qué resolver
                puede <strong>crear ticket de soporte</strong>
              </i>
            </p>
          )}
        </ContentTable>
        
        <ContentTable style={{marginTop:"1rem"}}>
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
      </ContentSoporte>
    </ContainerSoporte>
  )
}

export default Soporte
