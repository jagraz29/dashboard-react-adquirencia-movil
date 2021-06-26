import React, { useEffect, useState, useCallback } from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/'
import Title from '../../components/Title'
import InputLabel from '../../components/InputLabel'
import {
  ContentTransaction,
  ContentCard,
  Card1,
  Card2,
  CardHeader,
  CardTitle,
  CardContent1,
  CardContent2,
  ContentFecha,
  ContentFecha2,
  ContentFecha3,
  ContentFecha4,
  ContentFecha5,
  ButtonFecha,
  ContentImputs,
  ContentItem,
  ContentItemTitle,
  ItemTitle,
  ItemValue,
  ContentImputsItems,
  ContentImputsItems2,
  ContentImputsItems3,
  ContentButonCard,
  CardContentTable,
  ContentPagination,
  ItemResultTotal,
} from './styles'
import InputCustumer from '../../components/InputCostumer'
import InputLabelTitle from '../../components/InputLabelTitle'
import ButtonSpinner from '../../components/Button'

import { useHistory } from 'react-router-dom'
import {
  getDataUser,
  getListTransactionSite,
  getListTransactionSite2,
  exportExcel,
} from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers/index'
import { array } from 'prop-types'
import TablaTransaction from '../../components/TableTransaction'
import Paginations from '../../components/Pagination'

const breadcrumb = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Transacciónes',
    path: '/transacciones',
    active: false,
  },
]

const dataTitle = ['Ref.Payco', 'Fecha Trx', 'Medio de pago', 'Valor', 'Estado']

const Transacciones = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const viewState: RootState = useSelector((state: RootState) => state)

  const dataList = viewState.getListTransaction.listTransactionData.transactions
  const dataAgregation = viewState.getListTransaction.listTransactionData

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

  console.log('MY array', dataAgregation)

  const [dataTable, setDataTable] = useState(dataListTable)
  const [count, setCount] = useState(0)
  const [statusTransaction, setStatusTransaction] = useState([])
  const [statusPay, setstatusPay] = useState<string | any>([])
  const [entorno, setEntorno] = useState<string | any>([])
  const [totalCount, setTotalCount] = useState(0)
  const [boder1, setBoder1] = useState({ borderLeft: false })
  const [filterSearch, setFilterSearch] = useState('')
  const [urlBase, setUrlBase] = useState('/?paymentMethod=')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [statusId, setStatusId] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, seTtoDate] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [showLoadingProperty, setShowLoadingProperty] = useState(false)

  const redirectRoute = (path: string) => {
    history.push(path)
  }

  useEffect(() => {
    dispatch(getListTransactionSite(filterSearch))
    getDataStatus()
  }, [count])

  const getDataStatus = async () => {
    const res: any = await dispatch(getListTransactionSite2(''))

    setStatusTransaction(res.aggregations.status)

    const dataPay = Object.keys(res.aggregations.transactionFranchises).map((key) => {
      return {
        key: key,
        doc_count: res.aggregations.transactionFranchises[key].doc_count,
      }
    })

    setstatusPay(dataPay)

    const dataEntorno = Object.keys(res.aggregations.transactionType).map((key) => {
      return {
        key: `En ${key}`,
        doc_count: res.aggregations.transactionType[key].doc_count,
      }
    })
    setEntorno(dataEntorno)

    setTotalCount(res.pagination.totalCount)
  }
  useEffect(() => {
    setDataTable(dataListTable)
  }, [dataList])

  const eventTransaccion = async (value: any) => {
    console.log('Evento Transaccion ', value)
    setBoder1({ borderLeft: true })

    let status = ''
    switch (value.key) {
      case 'Aceptada':
        status = '&statusId=1'
        break
      case 'Rechazada':
        status = '&statusId=2'
        break
      case 'Pendiente':
        status = '&statusId=3'
        break
      case 'Fallida':
        status = '&statusId=4'
        break
      case 'Reversada':
        status = '&statusId=6'
        break
      case 'Retenida':
        status = '&statusId=7'
        break
      case 'Iniciada':
        status = '&statusId=8'
        break
      case 'Expirada':
        status = '&statusId=9'
        break
      case 'Abandonada':
        status = '&statusId=10'
        break
      case 'Cancelada':
        status = '&statusId=11'
        break
      case 'Antifraude':
        status = '&statusId=12'
        break
    }

    setStatusId(status)
    dispatch(getListTransactionSite(urlBase + paymentMethod + status + fromDate + toDate))
  }

  const eventEntorno = (value: any) => {
    console.log('Evento Entorno ', value)
  }

  const eventPagos = async (value: any) => {
    console.log('Evento Medio de pagos ', value)
    let payurl = ''
    switch (value.key) {
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

    setPaymentMethod(payurl)

    dispatch(getListTransactionSite(urlBase + payurl + statusId + fromDate + toDate))
  }

  const eventTransaccionTodo = () => {
    const status = ''
    setStatusId(status)
    dispatch(getListTransactionSite(urlBase + paymentMethod + status + fromDate + toDate))
  }

  const eventPagosTodos = () => {
    const payurl = ''
    setPaymentMethod(payurl)

    dispatch(getListTransactionSite(urlBase + payurl + statusId + fromDate + toDate))
  }

  const borrarFiltros = () => {
    setStatusId('')
    setPaymentMethod('')
    dispatch(getListTransactionSite('?paymentMethod=VS'))
  }

  const exportExcel = () => {
    dispatch(exportExcel())
  }

  const onPageChanged = useCallback(
    (event, page) => {
      console.log('PAGE', page, ' evetn', event)
      event.preventDefault()
      setCurrentPage(page)
      dispatch(getListTransactionSite(`?page=${page}`))
    },
    [setCurrentPage]
  )

  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={'Transacciones'}></Title>
      <ContentTransaction>
        <ContentCard>
          <Card1>
            <CardHeader>
              <CardTitle>Filtros</CardTitle>
            </CardHeader>
            <CardContent1>
              <ContentFecha>
                <InputLabelTitle label={'Rango de fecha'} />
                <ContentImputs>
                  <InputCustumer
                    name={'Desde:'}
                    type={'text'}
                    placeholder={'Desde'}
                    width={'15.3vw'}
                    value={''}
                    onChange={(e: any) => {}}
                  />

                  <InputCustumer
                    name={'Desde:'}
                    type={'text'}
                    placeholder={'Desde'}
                    width={'15.3vw'}
                    value={''}
                    onChange={(e: any) => {}}
                  />
                </ContentImputs>
                <ButtonFecha>Seleccionar fecha</ButtonFecha>
              </ContentFecha>
              <ContentFecha2>
                <InputLabelTitle label={'Estado de las transacciones'} />
                <ContentImputsItems>
                  <ContentItemTitle
                    onClick={() => {
                      eventTransaccionTodo()
                    }}
                  >
                    <ItemTitle>Todos</ItemTitle>
                    <ItemValue>{totalCount}</ItemValue>
                  </ContentItemTitle>
                  {statusTransaction.map((item: any) => (
                    <ContentItem
                      onClick={() => {
                        eventTransaccion(item)
                      }}
                      disabled={item.doc_count > 0 ? false : true}
                      theme={boder1}
                    >
                      <ItemTitle>{item.key}</ItemTitle>
                      <ItemValue>{item.doc_count}</ItemValue>
                    </ContentItem>
                  ))}
                </ContentImputsItems>
              </ContentFecha2>
              <ContentFecha4>
                <InputLabelTitle label={'Entorno'} />
                <ContentImputsItems>
                  <ContentItemTitle>
                    <ItemTitle>Todos</ItemTitle>
                    <ItemValue></ItemValue>
                  </ContentItemTitle>
                  {entorno.map((item: any) => (
                    <ContentItem
                      onClick={() => {
                        eventEntorno(item)
                      }}
                      disabled={item.doc_count > 0 ? false : true}
                    >
                      <ItemTitle>{item.key}</ItemTitle>
                      <ItemValue>{item.doc_count}</ItemValue>
                    </ContentItem>
                  ))}
                </ContentImputsItems>
              </ContentFecha4>
              <ContentFecha3>
                <InputLabelTitle label={'Medios de pago'} />
                <ContentImputsItems2>
                  <ContentItemTitle
                    onClick={() => {
                      eventPagosTodos()
                    }}
                  >
                    <ItemTitle>Todos</ItemTitle>
                    <ItemValue>{totalCount}</ItemValue>
                  </ContentItemTitle>
                  {statusPay.map((item: any) => (
                    <ContentItem
                      onClick={() => {
                        eventPagos(item)
                      }}
                      disabled={item.doc_count > 0 ? false : true}
                    >
                      <ItemTitle>{item.key}</ItemTitle>
                      <ItemValue>{item.doc_count}</ItemValue>
                    </ContentItem>
                  ))}
                </ContentImputsItems2>
              </ContentFecha3>
              <ContentFecha5>
                <InputLabelTitle label={'Acciones'} />
                <ContentImputsItems3>
                  <ButtonFecha
                    onClick={() => {
                      exportExcel()
                    }}
                  >
                    Exportar Excel
                  </ButtonFecha>
                  <ButtonFecha>Exportar csv</ButtonFecha>
                </ContentImputsItems3>
              </ContentFecha5>
            </CardContent1>
            <ContentButonCard>
              <ButtonFecha
                onClick={() => {
                  borrarFiltros()
                }}
              >
                Borrar filtros
              </ButtonFecha>
            </ContentButonCard>
          </Card1>

          <Card2>
            <CardHeader>
              <CardTitle>Transacciónes</CardTitle>
              <ButtonFecha>Busqueda avanzada</ButtonFecha>
            </CardHeader>
            <CardContent2>
              {dataTable && dataTable.length > 0 ? (
                <TablaTransaction data={dataTable} titleData={dataTitle} />
              ) : (
                console.log('loading')
              )}
              <ContentPagination>
                <ItemResultTotal>Total: {totalCount}</ItemResultTotal>
                {totalCount && totalCount > 0 ? (
                  <Paginations
                    totalRecords={totalCount}
                    pageLimit={15}
                    pageNeighbours={2}
                    onPageChanged={onPageChanged}
                    currentPage={currentPage}
                  />
                ) : (
                  ''
                )}
              </ContentPagination>
            </CardContent2>
          </Card2>
        </ContentCard>
      </ContentTransaction>
    </div>
  )
}

export default Transacciones
