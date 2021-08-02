import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import DatePick from '../../components/DateRange'
import { toast, ToastContainer } from 'react-toastify'

import {
  ContentTransaction,
  Card1,
  Card2,
  CardHeader,
  CardTitle,
  CardContent1,
  CardContent2,
  ButtonFecha,
  ContentImputs,
  ContentItem,
  ItemTitle,
  ItemValue,
  ContentInputsItems,
  ContentButonCard,
  ContentPagination,
  ItemResultTotal,
  InputLabelTitle,
  SearchContainer,
  LoadingContent,
  ContainerTransaction,
  ContainerButtonFecha,
  ContentFiltro
} from './styles'

import { useLocation } from 'react-router-dom'
import { getListTransactionSite, resetListTransaction } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import TablaTransaction from '../../components/TableTransaction'
import Paginations from '../../components/Pagination'
import LoadingBar from '../../components/LoadingBar'
import { FaSearch } from 'react-icons/fa'

const breadcrumbTitle = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Transacciones',
    path: '/transacciones',
    active: false,
  },
]

const dataTitle = ['Ref.Payco', 'Fecha Trx', 'Medio de pago', 'Valor', 'Estado', 'Acciones']
const statusIds: any = {
  Todos: 0,
  Aceptada: 1,
  Rechazada: 2,
  Pendiente: 3,
  Fallida: 4,
  ['pre-procesada']: 5,
  Reversada: 6,
  Retenida: 7,
  Iniciada: 8,
  Expirada: 9,
  Abandonada: 10,
  Cancelada: 11,
  Antifraude: 12,
}
const environments: any = {
  Todos: 0,
  pruebas: 1,
  produccion: 2,
}

export function getPaymentCode(key: any) {
  let payurl = ''
  switch (key) {
    case 'American Express':
      payurl = 'AM'
      break
    case 'Baloto':
      payurl = 'BA'
      break
    case 'Big Pass':
      payurl = 'BP'
      break
    case 'Credibanco Botón':
      payurl = 'CB'
      break
    case 'Codensa':
      payurl = 'COD'
      break
    case 'Crédito Credencial':
      payurl = 'CR'
      break
    case 'Débito Automático Interbancario':
      payurl = 'DBA'
      break
    case 'Diners Club':
      payurl = 'DC'
      break
    case 'Debito Mastercard':
      payurl = 'DM'
      break
    case 'Daviplata':
      payurl = 'DP'
      break
    case 'Daviplata App':
      payurl = 'DPA'
      break
    case 'Debito Visa':
      payurl = 'DV'
      break
    case 'Davivienda App':
      payurl = 'DVA'
      break
    case 'Efecty':
      payurl = 'EF'
      break
    case 'Epm':
      payurl = 'EPM'
      break
    case 'Gana':
      payurl = 'GA'
      break
    case 'Crédito Mastercard':
      payurl = 'MC'
      break
    case 'Puntos y Crédito Davivienda':
      payurl = 'MPD'
      break
    case 'PayPal':
      payurl = 'PP'
      break
    case 'Punto Red':
      payurl = 'PR'
      break
    case 'PSE':
      payurl = 'PSE'
      break
    case 'Código Qr':
      payurl = 'QR'
      break
    case 'QR Davivienda':
      payurl = 'QRDV'
      break
    case 'Recarga CivicaPay':
      payurl = 'RCP'
      break
    case 'Recarga Daviplata':
      payurl = 'RDP'
      break
    case 'Red Servi':
      payurl = 'RS'
      break
    case 'SafetyPay':
      payurl = 'SP'
      break
    case 'Split Payment':
      payurl = 'SPF'
      break
    case 'Sured':
      payurl = 'SR'
      break
    case 'Split Receiver Fee':
      payurl = 'SRF'
      break
    case 'Transferencia Credito ePayco':
      payurl = 'TCEP'
      break
    case 'Tuya':
      payurl = 'TY'
      break
    case 'Crédito Visa':
      payurl = 'VS'
      break
    case 'Visa Venta Presente':
      payurl = 'VSVP'
      break
  }

  return payurl
}

const Transacciones = ({setBreadcrumb}:any) => {

  const dispatch = useDispatch()

  const getListTransaction: any = useSelector(({ getListTransaction }: any) => getListTransaction)
  const dataList = getListTransaction.listTransactionData.transactions

  const dataListTable = dataList.map((item: any) => {
    const { referencePayco, transactionDateTime, paymentMethod, amount, status } = item
    return {
      referencePayco,
      transactionDateTime,
      paymentMethod,
      amount,
      status,
    }
  })

  const [dataTable, setDataTable] = useState([])
  const [statusTransaction, setStatusTransaction] = useState([])
  const [statusPay, setstatusPay] = useState<string | any>([])
  const [entorno, setEntorno] = useState<string | any>([])
  const [totalCount, setTotalCount] = useState(0)
  const [boder1, setBoder1] = useState({ borderLeft: false })

  const [loading, setLoading] = useState<boolean>(true)
  const [paginas, setPaginas] = useState({})

  useEffect(() => {
    setBreadcrumb(breadcrumbTitle)
    return ()=>{
      dispatch(resetListTransaction())
    }
  },[])


  useEffect(() => {
    
    const {
      listTransactionData: { aggregations, pagination },
    } = getListTransaction

    if (pagination) {
      setPaginas(pagination)
    }

    if (aggregations) {
      const dataStatus: any = Object.keys(aggregations.transactionStatus).map((key) => {
        return {
          key: key,
          doc_count: aggregations.transactionStatus[key].doc_count,
        }
      })
      setStatusTransaction(dataStatus)
      const dataPay = Object.keys(aggregations.transactionFranchises).map((key) => {
        const keyCode = getPaymentCode(key)
        return {
          key: key,
          keyCode,
          doc_count: aggregations.transactionFranchises[key].doc_count,
        }
      })
      setstatusPay(dataPay)
      let dataCount = 0
      const dataEntorno = Object.keys(aggregations.transactionType).map((key) => {
        dataCount += aggregations.transactionType[key].doc_count
        return {
          key: key,
          doc_count: aggregations.transactionType[key].doc_count,
        }
      })
      setTotalCount(dataCount)
      setEntorno(dataEntorno)
      setLoading(false)
  
    }
  }, [getListTransaction])

  useEffect(() => {
    setDataTable(dataListTable)
  }, [dataList])

  const exportFile = async (type: any) => {
    window.open(`/api/transaction/export.${type}${finalQuery}`)
  }

  const [input, setInput] = useState({
    search: '',
  })

  const handleInputChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    const page = 1
    e.preventDefault()
    setObjectQuery({ search: input.search })
    // dispatch(getListTransactionSite(`?search=${input.search}`))
    setActiveFilters({ ...activeFilters, page })
  }

  const location = useLocation()

  const [objectQuery, setObjectQuery] = useState<any>(()=>{
    const {state}:any= location 
    if(state && state.statusId){
      return {statusId:state.statusId}
    }else{
      return {}
    }
  })

  function handlePaymentMethod(paymentMethod: any) {
    const page = 1
    if (paymentMethod === 0) {
      let aux = { ...objectQuery, page }
      delete aux.paymentMethod
      setObjectQuery(aux)
    } else {
      setObjectQuery({ ...objectQuery, paymentMethod, page })
    }
    setActiveFilters({ ...activeFilters, paymentMethods: paymentMethod, page })
  }

  function handleStatus(statusId: any) {
    const page = 1
    if (statusId === 0) {
      let aux = { ...objectQuery, page }
      delete aux.statusId
      setObjectQuery(aux)
    } else {
      setObjectQuery({ ...objectQuery, statusId, page })
    }
    setActiveFilters({ ...activeFilters, statusIds: statusId, page })
  }

  function handleEnvironment(environment: any) {
    const page = 1
    if (environment === 0) {
      let aux = { ...objectQuery, page }
      delete aux.environment
      setObjectQuery(aux)
    } else {
      setObjectQuery({ ...objectQuery, environment, page })
    }
    setActiveFilters({ ...activeFilters, environments: environment, page })
  }

  function handleDates(fromDate: any, toDate: any) {
    const page = 1
    if (fromDate === 0) {
      let aux = { ...objectQuery, page }
      delete aux.fromDate
      delete aux.toDate
      setObjectQuery(aux)
      setDatesValues({ startDate: null, endDate: null })
    } else {
      setObjectQuery({ ...objectQuery, fromDate, toDate, page })
    }
    setActiveFilters({ ...activeFilters, page })
  }

  function handleReset() {
    setInput({ search: '' })
    setObjectQuery({})
    setDatesValues({ startDate: null, endDate: null })
    setActiveFilters({
      statusIds: 0,
      paymentMethods: 0,
      environments: 0,
      page: 1,
    })
  }

  function handlePage(page: any) {
    setObjectQuery({ ...objectQuery, page })
    setActiveFilters({ ...activeFilters, page })
  }

  const [datesValues, setDatesValues] = useState({ startDate: null, endDate: null })
  const [finalQuery, setFinalQuery] = useState('?')

  useEffect(() => {
    let final: string = '?'
    for (const filter in objectQuery) {
      final += `${filter}=${objectQuery[filter]}&`
    }
    setFinalQuery(final)
    dispatch(getListTransactionSite(final))

  }, [objectQuery])

  const [activeFilters, setActiveFilters] = useState({
    statusIds: 0,
    paymentMethods: 0,
    environments: 0,
    page: 1,
  })

  return (
    <ContainerTransaction>
      <Title title={'Transacciones'}></Title>
      {loading ? (
          <LoadingBar text={'Generando filtros...'} />
      ) : (
        <ContentTransaction>
            <ToastContainer />
            <Card1>
              <CardTitle>Filtros</CardTitle>
              <CardContent1>
                <ContentFiltro>
                  <InputLabelTitle>Rango de fecha</InputLabelTitle>
                  <ContentImputs>
                    <DatePick
                      datesValues={datesValues}
                      setDatesValues={setDatesValues}
                      handleDates={handleDates}
                    />
                  </ContentImputs>
                  <ContainerButtonFecha>
                    <ButtonFecha onClick={() => handleDates(0, 0)}>Restablecer Fechas</ButtonFecha>
                  </ContainerButtonFecha>
                </ContentFiltro>
                <ContentFiltro>
                  <InputLabelTitle>Estado de las transacciones</InputLabelTitle>
                  <ContentInputsItems>
                    <ContentItem
                      className={activeFilters.statusIds === 0 ? 'active' : ''}
                      onClick={() => {
                        handleStatus(statusIds.Todos)
                      }}
                    >
                      <ItemTitle>Todos</ItemTitle>
                      <ItemValue>{totalCount}</ItemValue>
                    </ContentItem>
                    {statusTransaction.map((item: any) => (
                      <ContentItem
                        className={activeFilters.statusIds === statusIds[item.key] ? 'active' : ''}
                        onClick={() => {
                          handleStatus(statusIds[item.key])
                        }}
                        disabled={item.doc_count > 0 ? false : true}
                        theme={boder1}
                      >
                        <ItemTitle>{item.key}</ItemTitle>
                        <ItemValue>{item.doc_count}</ItemValue>
                      </ContentItem>
                    ))}
                  </ContentInputsItems>
                </ContentFiltro>

                <ContentFiltro>
                  <InputLabelTitle>Entorno</InputLabelTitle>
                  <ContentInputsItems>
                    <ContentItem
                      className={activeFilters.environments === 0 ? 'active' : ''}
                      onClick={() => {
                        handleEnvironment(environments.Todos)
                      }}
                    >
                      <ItemTitle>Todos</ItemTitle>
                      <ItemValue>{totalCount}</ItemValue>
                    </ContentItem>
                    {entorno.map((item: any) => (
                      <ContentItem
                        className={
                          activeFilters.environments === environments[item.key] ? 'active' : ''
                        }
                        onClick={() => {
                          handleEnvironment(environments[item.key])
                        }}
                        disabled={item.doc_count > 0 ? false : true}
                      >
                        <ItemTitle>En {item.key}</ItemTitle>
                        <ItemValue>{item.doc_count}</ItemValue>
                      </ContentItem>
                    ))}
                  </ContentInputsItems>
                </ContentFiltro>
                <ContentFiltro>
                  <InputLabelTitle>Medios de pago</InputLabelTitle>
                  <ContentInputsItems>
                    <ContentItem
                      className={activeFilters.paymentMethods === 0 ? 'active' : ''}
                      onClick={() => {
                        handlePaymentMethod(0)
                      }}
                    >
                      <ItemTitle>Todos</ItemTitle>
                      <ItemValue>{totalCount}</ItemValue>
                    </ContentItem>
                    {statusPay.map((item: any) => (
                      <ContentItem
                        className={activeFilters.paymentMethods === item.keyCode ? 'active' : ''}
                        onClick={() => {
                          handlePaymentMethod(item.keyCode)
                        }}
                        disabled={item.doc_count > 0 ? false : true}
                      >
                        <ItemTitle>{item.key}</ItemTitle>
                        <ItemValue>{item.doc_count}</ItemValue>
                      </ContentItem>
                    ))}
                  </ContentInputsItems>
                </ContentFiltro>
                
                <ContentFiltro>
                  <InputLabelTitle>Acciones</InputLabelTitle>
                  <ContentInputsItems>
                    <ButtonFecha
                      onClick={() => {
                        exportFile('xlsx')
                      }}
                    >
                      Exportar Excel
                    </ButtonFecha>
                    <ButtonFecha
                      onClick={() => {
                        exportFile('csv')
                      }}
                    >
                      Exportar csv
                    </ButtonFecha>
                  </ContentInputsItems>
                </ContentFiltro>
                <ContentButonCard>
                 <ButtonFecha onClick={handleReset}>Borrar filtros</ButtonFecha>
                </ContentButonCard>
              </CardContent1>
            </Card1>

            <Card2>
              <CardHeader>
                <h4>Transacciones</h4>
                <SearchContainer className="searchContainer" onSubmit={(e) => handleSubmit(e)}>
                  <div>
                    <input
                      placeholder="Buscar por Ref.Payco"
                      type="number"
                      name="search"
                      value={input.search}
                      onChange={(e) => handleInputChange(e)}
                    />
                    <button onClick={handleReset} type="button">
                      x
                    </button>
                  </div>
                  <button className="buttonSeach" type="submit">
                    <FaSearch />
                  </button>
                </SearchContainer>
              </CardHeader>
              <CardContent2>
                {!getListTransaction.loading ? (
                  dataTable.length === 0 ? (
                    <h3
                      style={{
                        fontSize: '20px',
                        padding: '1rem',
                        margin: ' 1rem 0',
                        fontWeight: 400,
                      }}
                    >
                      No se encontraron registros.
                    </h3>
                  ) : (
                    <>
                      <TablaTransaction toast={toast} data={dataTable} titleData={dataTitle} />
                      <ContentPagination>
                        <ItemResultTotal>Total: {totalCount}</ItemResultTotal>
                        {totalCount && totalCount > 0 ? (
                          <Paginations
                            pagination={paginas}
                            handlePage={handlePage}
                            active={activeFilters.page}
                          />
                        ) : (
                          ''
                        )}
                      </ContentPagination>
                    </>
                  )
                ) : (
                  <LoadingBar text={'Cargando...'} />
                )}
              </CardContent2>
            </Card2>
        </ContentTransaction>
      )}
    </ContainerTransaction>
  )
}

export default Transacciones
