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
} from './styles'
import InputCustumer from '../../components/InputCostumer'
import InputLabelTitle from '../../components/InputLabelTitle'
import ButtonSpinner from '../../components/Button'

import { useHistory } from 'react-router-dom'
import { getDataUser, getListTransactionSite, getListTransactionSite2 } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers/index'
import { array } from 'prop-types'
import TablaDashboard from '../../components/TableDashboard'

const breadcrumb = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Cobra',
    path: '/cobra',
    active: true,
  },
]

const dataTitle = [
  'Ref.Payco',
  'Ref.Client',
  'Descripción',
  'Medio de pago',
  'Valor',
  'Moneda',
  'Estado',
]

const Transacciones = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const viewState: RootState = useSelector((state: RootState) => state)

  const dataList = viewState.getListTransaction.listTransactionData.transactions
  const dataAgregation = viewState.getListTransaction.listTransactionData

  const dataListTable = dataList.map((item: any) => {
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

    setStatusId('&statusId=2')
    const status = '&statusId=2'
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
                  <ContentItemTitle>
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
                  <ContentItemTitle>
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
                  <ButtonFecha>Exportar Excel</ButtonFecha>
                  <ButtonFecha>Exportar csv</ButtonFecha>
                </ContentImputsItems3>
              </ContentFecha5>
            </CardContent1>
            <ContentButonCard>
              <ButtonFecha>Borrar filtros</ButtonFecha>
            </ContentButonCard>
          </Card1>

          <Card2>
            <CardHeader>
              <CardTitle>Transacciónes</CardTitle>
              <ButtonFecha>Busqueda avanzada</ButtonFecha>
            </CardHeader>
            <CardContent2>
              {dataTable && dataTable.length > 0 ? (
                <TablaDashboard data={dataTable} titleData={dataTitle} />
              ) : (
                console.log('loading')
              )}
              Resultados
            </CardContent2>
          </Card2>
        </ContentCard>
      </ContentTransaction>
    </div>
  )
}

export default Transacciones
