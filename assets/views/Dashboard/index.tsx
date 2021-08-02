import React, { useState, useEffect } from 'react'
import { IconLink } from '../../config/configImages'

import { Content,
   ContentPay, 
   ContentItems, 
   ContentTable,
    CardTableTitle, 
    ConteinerUser, 
    ContainerCobro,
    NotUserImage,
    NameContent,
    BoxLink,
    CardTransaction,
    ContentTickets,
    ContainerItemTicket,
    TitleTicket,
    ValueTicket,
    ContainerTableTickets,
    ContainerTicket,
    TableTickets,
    ContainerTicketsResponsive,
    TicketResponsive,
    ContentValueTicket
  }
 from './styles'

import TablaDashboard from '../../components/TableDashboard'
import { Link, useHistory } from 'react-router-dom'
import { getListTransactionSite } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers/index'
import LoadingBar from '../../components/LoadingBar'
import Avatar from '../../components/Avatar'
import { BsChevronDown } from 'react-icons/bs';
import { getTickets, resetListTransaction } from '../../redux/actions/captchaActions';

const dataTitle = [
  'Ref.Payco',
  'Ref.Client',
  'Descripción',
  'Medio de pago',
  'Valor',
  'Moneda',
  'Estado',
]
const dataTitleTickets=[
  "Id Ticket","Fecha","Etapa","Área de atención", "Estado","Ver todos los tickets"
]

const index = ({setBreadcrumb}:any) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const viewState: RootState = useSelector((state: RootState) => state)
  const {companyName, logo} = viewState.captcha.userData.data

  const dataList = viewState.getListTransaction.listTransactionData.transactions
  const dataStatus = viewState.getListTransaction.listTransactionData.aggregations?.transactionStatus
  
  const [dataListTable, setDataListTable] = useState([])

  useEffect(() => {
    setBreadcrumb([])
    return ()=>{
      dispatch(resetListTransaction())
    }
  },[])

  useEffect(() => {
    const aux = dataList.map((item: any) => {
      const {
        referencePayco,
        referenceClient,
        description,
        paymentMethod,
        amount,
        currency,
        status,
      } = item
      return {
        referencePayco,
        referenceClient,
        description,
        paymentMethod,
        amount,
        currency,
        status,
      }
    })
    setDataListTable(aux)
  },[dataList])


  const redirectRoute = (path: string) => {
    history.push(path)
  }

  useEffect(() => {
    dispatch(getListTransactionSite('?limit=3'))
    getTicketsOpen()
  }, [])


  const [open, setOpen]= useState(false)
  const [ticketsOpen, setTicketsOpen] = useState([])
  const [lastTicketOpen, setLastTicketOpen] = useState<any>(false)


  const getTicketsOpen = async () => {
    const data = {
      estado: 1,
    }
    const tickets = await getTickets(data)
    if (typeof tickets != 'boolean') {
      setTicketsOpen(tickets)
      setLastTicketOpen(tickets[0])
    }
  }

  return (
    <Content>
      <div>
        <ContentTickets data-open={open}>
          <ContainerItemTicket>
              <TitleTicket>Último ticket:</TitleTicket>
              <ValueTicket>{lastTicketOpen?`#${lastTicketOpen.id} - ${lastTicketOpen.fechaActualizacion}`:"-"}</ValueTicket>
          </ContainerItemTicket>
          <ContainerItemTicket>
              <TitleTicket>Tickets en proceso:</TitleTicket>
              <ValueTicket>-</ValueTicket>
          </ContainerItemTicket>
          <ContainerItemTicket>
              <TitleTicket>Ticket abiertos:</TitleTicket>
              <ValueTicket>{ticketsOpen.length>0? ticketsOpen.length : "-"}</ValueTicket>
          </ContainerItemTicket>
          <ContainerItemTicket>
          <ValueTicket onClick={()=> setOpen(!open)}>Ver detalle <BsChevronDown/></ValueTicket>
          </ContainerItemTicket>
        </ContentTickets>
        <ContainerTableTickets data-open={open}>
          <TableTickets>
            <thead>
              <tr>
                {
                  dataTitleTickets.map((e,i)=>(
                      <th key={i}>{e}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                ticketsOpen.length>0 && ticketsOpen.map((e:any,i:number)=>(
                  <tr key={i}>
                    <td className="orangeValue">{e.id}</td>
                    <td>{e.fechaActualizacion}</td>
                    <td>{e.etapa}</td>
                    <td>{e.departamento}</td>
                    <td>{e.estado}</td>
                    <Link className="orangeValue" to={`/soporte/detalle/${e.id}` }>Ver ticket</Link>
                  </tr>
                ))
              }
            </tbody>
          </TableTickets>
        </ContainerTableTickets>
        <ContainerTicketsResponsive data-open={open}>
        {
              ticketsOpen.length>0 && ticketsOpen.map((e:any,i:number)=>(
                <TicketResponsive>
                  <ContentValueTicket>
                    <h6 >Id Ticket</h6>
                    <Link  to={`/soporte/detalle/${e.id}` }>{e.id}</Link>
                  </ContentValueTicket>
                  <ContentValueTicket>
                    <h6 >Fecha</h6>
                    <h6 >{e.fechaActualizacion}</h6>
                  </ContentValueTicket>
                  <ContentValueTicket>
                    <h6 >Etapa</h6>
                    <h6>{e.etapa}</h6>
                  </ContentValueTicket>
                  <ContentValueTicket>
                    <h6 >Área de atención</h6>
                    <h6 >{e.departamento}</h6>
                  </ContentValueTicket>
                  <ContentValueTicket>
                    <h6 >Estado</h6>
                    <h6 >{e.estado}</h6>
                  </ContentValueTicket>
                </TicketResponsive>

              ))
          }
        </ContainerTicketsResponsive>
      </div>
      
      <ContentPay>
        <ConteinerUser >
          {logo?
          <div className="notImage">
            <Avatar srcImage={logo} size={"75px"} />
          </div>
            :
            <NotUserImage></NotUserImage>
          }
          <NameContent>
            <h1>¡ Hola {companyName} !</h1>
            <div className="typePerson">
              <p><b>Ya puedes empezar a cobrar.</b></p>
              <label>Tipo de cuenta: <b>Persona</b> </label>
            </div>
          </NameContent>
        </ConteinerUser>
        <ContainerCobro>
          <h1>Herramienta de cobro</h1>
          <BoxLink onClick={() => redirectRoute('/cobra')}>
            <img src={IconLink.url} />
            <p>Crear y compartir un link de cobra</p>
          </BoxLink>
        </ContainerCobro>
      </ContentPay>

      <ContentItems>
        <CardTransaction>
          <h4>Transacciones aprobadas</h4>
          <h2>{dataStatus? dataStatus.Aceptada.doc_count:"0"}</h2>
          <span onClick={()=> {
            history.push({
              pathname: '/transacciones',
              state:{statusId:1}
            })
            }}>Ver detalle</span>
        </CardTransaction>

        <CardTransaction>
          <h4>Transacciones pendientes</h4>
          <h2>{dataStatus? dataStatus.Pendiente.doc_count:"0"}</h2>
          <span onClick={()=> {
            history.push({
              pathname: '/transacciones',
              state:{statusId:3}
            })
            }}>Ver detalle</span>
        </CardTransaction>
      </ContentItems>
      
      <ContentTable>
        <CardTableTitle>Últimas Transacciones</CardTableTitle>
        {
          dataListTable.length > 0 
            ?
              <TablaDashboard data={dataListTable} titleData={dataTitle} />
            : 
              <LoadingBar text={'Cargando...'}/>
          }
        
      </ContentTable>
    </Content>
  )
}

export default index
