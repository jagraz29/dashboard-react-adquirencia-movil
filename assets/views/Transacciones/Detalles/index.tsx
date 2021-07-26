import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs/'
import Title from '../../../components/Title'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../redux/reducers/index'
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from 'react-icons/ai'
import { getTransactionDetail } from '../../../redux/actions/'
import NumberFormat from 'react-number-format'
import MedioPago from '../../../components/MedioPago'

import {
  Content,
  ContentCard,
  Card,
  CardHeader,
  CardContent1,
  CardTitle,
  CardSubTitle,
  CardIcon,
  CardContent2,
  ContentItem,
  ItemTitle,
  ItemValue,
  ItemGroup,
  ItemGroup2,
  CardGroup,
  Card2,
  CardContent3,
  ButtonExportar,
  ButtonImg,
  CardContentButton,
  ButtonTransacciones,
  ContentLog,
  LogGroup,
  Log,
  LogItem,
  LogStatusSuccess,
  LogStatusFailed,
  LogMetodo,
  LogHora,
  LogGroupDivider,
  LoadingContent,
  CardLast,
} from './styles'
import LoadingBar from '../../../components/LoadingBar'

const breadcrumb = [
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
  {
    title: 'Detalle de transacción',
    path: '/transacciones',
    active: false,
  },
]

const defaultLogResponse = {
  response_default: true,
  x_transaction_id: '-',
  x_fecha_transaccion: '-',
  url: '-',
}

const TransaccionesDetalles = ({ history }: any) => {
  let iconStyles = { color: '#d3d3d3' }
  let iconStylesExport = { size: '100px', color: '#d3d3d3' }
  const dispatch = useDispatch()
  let { id }: any = useParams()
  const [openCard, setOpenCard] = useState(false)
  const [openCardContent, setOpenCardContent] = useState({ display: 'none' })
  const [openCard1, setOpenCard1] = useState(false)
  const [openCardContent1, setOpenCardContent1] = useState({ display: 'none' })
  const [openCard2, setOpenCard2] = useState(false)
  const [openCardContent2, setOpenCardContent2] = useState({ display: 'none' })

  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<any>({})
  const [logss, setLogss] = useState<any>([])
  const [log, setLog] = useState<any>(defaultLogResponse)
  useEffect(() => {
    getTransactionDetail(id)
      .then((resp) => {
        setData(resp)
        setLogss(resp.allLogs)
        setLog(resp.allLogs.length === 0 ? defaultLogResponse : resp.allLogs[0])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const openClose = () => {
    if (!openCard) {
      setOpenCard(true)
      setOpenCardContent({
        display: 'block',
      })

      //dispatch(getPropertySite())
    } else {
      setOpenCard(false)
      setOpenCardContent({
        display: 'none',
      })
    }
  }

  const openClose1 = () => {
    if (!openCard1) {
      setOpenCard1(true)
      setOpenCardContent1({
        display: 'block',
      })

      //dispatch(getPropertySite())
    } else {
      setOpenCard1(false)
      setOpenCardContent1({
        display: 'none',
      })
    }
  }

  const openClose2 = () => {
    if (!openCard2) {
      setOpenCard2(true)
      setOpenCardContent2({
        display: 'block',
      })

      //dispatch(getPropertySite())
    } else {
      setOpenCard2(false)
      setOpenCardContent2({
        display: 'none',
      })
    }
  }
  const [logsKey, setLogsKey] = useState<any>([])
  useEffect(() => {
    setLogsKey(Object.keys(log))
  }, [log])
  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={`Detalle de transacción: #${id}`}></Title>
      {loading ? (
        <LoadingContent>
          <LoadingBar text={'Cargando...'} />
        </LoadingContent>
      ) : (
        <Content>
          <ContentCard>
            <CardGroup>
              <Card>
                <CardHeader>
                  <CardTitle>Detalle de transacción</CardTitle>
                  <CardIcon onClick={() => openClose()}>
                    {openCard == false ? (
                      <BsIcons.BsFillCaretDownFill style={iconStyles} />
                    ) : (
                      <BsIcons.BsFillCaretUpFill style={iconStyles} />
                    )}
                  </CardIcon>
                </CardHeader>
                <CardContent1 theme={openCardContent}>
                  <ContentItem>
                    <ItemGroup>
                      <ItemTitle>Ref.Payco</ItemTitle>
                      <ItemValue>{data.referencePayco ? data.referencePayco : '-'}</ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Valor Total</ItemTitle>
                      <NumberFormat
                        thousandSeparator={true}
                        prefix={'$'}
                        suffix={' ' + data.currency}
                        value={data.amountNet}
                        displayType={'text'}
                      />
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Estado</ItemTitle>
                      <ItemValue>{data.status ? data.status : '-'}</ItemValue>
                    </ItemGroup>
                  </ContentItem>
                  <ContentItem>
                    <ItemGroup>
                      <ItemTitle>Factura</ItemTitle>
                      <ItemValue>{data.bill ? data.bill : '-'}</ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>IVA</ItemTitle>
                      <NumberFormat
                        thousandSeparator={true}
                        prefix={'$'}
                        suffix={' ' + data.currency}
                        value={data.tax}
                        displayType={'text'}
                      />
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle></ItemTitle>
                      <ItemValue></ItemValue>
                    </ItemGroup>
                  </ContentItem>
                  <ContentItem>
                    <ItemGroup>
                      <ItemTitle>Fecha Transacción</ItemTitle>
                      <ItemValue>{data.transactionDate ? data.transactionDate : '-'}</ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Base Devolucion IVA</ItemTitle>
                      <NumberFormat
                        thousandSeparator={true}
                        prefix={'$'}
                        suffix={' ' + data.currency}
                        value={data.taxBaseClient}
                        displayType={'text'}
                      />
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Respuesta</ItemTitle>
                      <ItemValue>{data.response ? data.response : '-'}</ItemValue>
                    </ItemGroup>
                  </ContentItem>
                  <ContentItem>
                    <ItemGroup2>
                      <ItemTitle>Descripción Compra</ItemTitle>
                      <ItemValue>{data.description ? data.description : '-'}</ItemValue>
                    </ItemGroup2>

                    <ItemGroup>
                      <ItemTitle>Autorización</ItemTitle>
                      <ItemValue>{data.authorization ? data.authorization : '-'}</ItemValue>
                    </ItemGroup>
                  </ContentItem>
                  <ContentItem>
                    <ItemGroup>
                      <ItemTitle>Ganancia Cliente</ItemTitle>
                      <NumberFormat
                        thousandSeparator={true}
                        prefix={'$'}
                        suffix={' ' + data.currency}
                        value={data.amountNet}
                        displayType={'text'}
                      />
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Recibo</ItemTitle>
                      <ItemValue>{data.receipt ? data.receipt : '-'}</ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>IP Transacción</ItemTitle>
                      <ItemValue>{data.ip ? data.ip : '-'}</ItemValue>
                    </ItemGroup>
                  </ContentItem>

                  <ContentItem>
                    <ItemGroup>
                      <ItemTitle>Franquicia / Medio de Pago</ItemTitle>
                      <MedioPago type={data.paymentMethod}></MedioPago>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Banco</ItemTitle>
                      <ItemValue>{data.bank ? data.bank : '-'}</ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Número Tarjeta</ItemTitle>
                      <ItemValue>{data.numberCard ? data.numberCard : '-'}</ItemValue>
                    </ItemGroup>
                  </ContentItem>

                  <ContentItem>
                    <ItemGroup>
                      <ItemTitle>Extra 1</ItemTitle>
                      <ItemValue>
                        {data.extras ? (data.extras.extra1 !== '' ? data.extras.extra1 : '-') : '-'}
                      </ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Extra 2</ItemTitle>
                      <ItemValue>
                        {data.extras ? (data.extras.extra2 !== '' ? data.extras.extra2 : '-') : '-'}
                      </ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Extra 3</ItemTitle>
                      <ItemValue>
                        {data.extras ? (data.extras.extra3 !== '' ? data.extras.extra3 : '-') : '-'}
                      </ItemValue>
                    </ItemGroup>
                  </ContentItem>
                  <ContentItem>
                    <ItemGroup>
                      <ItemTitle>Url Confirmación:</ItemTitle>
                      <ItemValue>{data.urlConfirmation ? data.urlConfirmation : '-'}</ItemValue>
                    </ItemGroup>
                  </ContentItem>
                  <ContentItem>
                    <ItemGroup2>
                      <ItemTitle>Url Respuesta:</ItemTitle>
                      <ItemValue>{data.urlResponse ? data.urlResponse : '-'}</ItemValue>
                    </ItemGroup2>
                  </ContentItem>
                </CardContent1>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Detalle del comprador</CardTitle>
                  <CardIcon onClick={() => openClose1()}>
                    {openCard1 == false ? (
                      <BsIcons.BsFillCaretDownFill style={iconStyles} />
                    ) : (
                      <BsIcons.BsFillCaretUpFill style={iconStyles} />
                    )}
                  </CardIcon>
                </CardHeader>
                <CardContent1 theme={openCardContent1}>
                  <ContentItem>
                    <ItemGroup>
                      <ItemTitle>Cédula de Ciudadanía</ItemTitle>
                      <ItemValue>{data.document ? data.document : '-'}</ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Dirección</ItemTitle>
                      <ItemValue>{data.address ? data.address : '-'}</ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>País</ItemTitle>
                      <ItemValue>{data.country ? data.country : '-'}</ItemValue>
                    </ItemGroup>
                  </ContentItem>
                  <ContentItem>
                    <ItemGroup>
                      <ItemTitle>Nombres</ItemTitle>
                      <ItemValue>{data.firstName ? data.firstName : '-'}</ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Teléfono</ItemTitle>
                      <ItemValue>{data.telephone ? data.telephone : '-'}</ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Estado / Provincia</ItemTitle>
                      <ItemValue>{data.department ? data.department : '-'}</ItemValue>
                    </ItemGroup>
                  </ContentItem>
                  <ContentItem>
                    <ItemGroup>
                      <ItemTitle>Apellidos</ItemTitle>
                      <ItemValue>{data.lastName ? data.lastName : '-'}</ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Celular</ItemTitle>
                      <ItemValue>{data.mobilePhone ? data.mobilePhone : '-'}</ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Ciudad</ItemTitle>
                      <ItemValue>{data.city ? data.city : '-'}</ItemValue>
                    </ItemGroup>
                  </ContentItem>
                  <ContentItem>
                    <ItemGroup>
                      <ItemTitle>Compañía</ItemTitle>
                      <ItemValue>{data.company ? data.company : '-'}</ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Email</ItemTitle>
                      <ItemValue>{data.email ? data.email : '-'}</ItemValue>
                    </ItemGroup>

                    <ItemGroup>
                      <ItemTitle>Código Área</ItemTitle>
                      <ItemValue>-</ItemValue>
                    </ItemGroup>
                  </ContentItem>
                </CardContent1>
              </Card>

              <CardLast>
                <CardHeader>
                  <CardTitle>Información enviada en la confirmación</CardTitle>
                  <CardIcon onClick={() => openClose2()}>
                    {openCard2 == false ? (
                      <BsIcons.BsFillCaretDownFill style={iconStyles} />
                    ) : (
                      <BsIcons.BsFillCaretUpFill style={iconStyles} />
                    )}
                  </CardIcon>
                </CardHeader>
                <CardContent2 theme={openCardContent2}>
                  <ContentLog>
                    <LogGroup>
                      <Log>
                        {logss.length === 0 || logss === []
                          ? ''
                          : logss.length > 0 &&
                            logss.map((e: any, i: number) => (
                              <LogItem key={i} onClick={() => setLog(e)}>
                                {e.status === '200' ? (
                                  <LogStatusSuccess>{e.status ? e.status : '-'}</LogStatusSuccess>
                                ) : (
                                  <LogStatusFailed>{e.status ? e.status : '-'}</LogStatusFailed>
                                )}
                                <LogMetodo>{e.url ? e.url : ''}</LogMetodo>
                                <LogHora>
                                  {e.x_fecha_transaccion ? e.x_fecha_transaccion.slice(0, 10) : '-'}
                                </LogHora>
                              </LogItem>
                            ))}
                      </Log>
                    </LogGroup>

                    <LogGroupDivider>
                      <div className="info">
                        <table>
                          <tr>
                            <th>Estado</th>
                            {log.response_default ? (
                              <td>-</td>
                            ) : log.status === '200' ? (
                              <td className="estadoSuccess">{log.status ? log.status : '-'}</td>
                            ) : (
                              <td className="estadoFailed">{log.status ? log.status : '-'}</td>
                            )}
                          </tr>
                          <tr>
                            <th>ID</th>
                            <td>{log.x_transaction_id}</td>
                          </tr>
                          <tr>
                            <th>Fecha</th>
                            <td>{log.x_fecha_transaccion}</td>
                          </tr>
                          <tr>
                            <th>Tipo de confirmación</th>
                            <td>-</td>
                          </tr>
                          <tr>
                            <th>URL Confirmacion</th>
                            <td>{log.url}</td>
                          </tr>
                        </table>
                      </div>
                      <div className="infoToSend">
                        <h3>Información enviada</h3>
                        <div className="infoComplete">
                          {logss.length === 0 || logss === []
                            ? 'Sin información'
                            : logsKey.map((e: any, i: number) => (
                                <div className="boxInfo">
                                  <div>
                                    <p className="number">{i + 1}</p>
                                  </div>
                                  <div key={i}>
                                    <p>{`${e}: ${log[e]},`}</p>
                                  </div>
                                </div>
                              ))}
                        </div>
                      </div>
                    </LogGroupDivider>
                  </ContentLog>
                </CardContent2>
              </CardLast>
            </CardGroup>
            <CardGroup>
              <Card2>
                <CardHeader>
                  <CardTitle>Acciones</CardTitle>
                  <CardSubTitle>Las siguientes acciones pueden no ser reversibles.</CardSubTitle>
                </CardHeader>
                <CardContent3>
                  <ButtonExportar onClick={() => window.open(`/api/transaction/receipt/${id}`)}>
                    <AiIcons.AiFillFilePdf style={iconStylesExport} />
                    Descargar comprobante
                  </ButtonExportar>
                </CardContent3>
                <CardContentButton>
                  <ButtonTransacciones onClick={() => history.push('/transacciones')}>
                    &laquo; Volver a transacciones
                  </ButtonTransacciones>
                </CardContentButton>
              </Card2>
            </CardGroup>
          </ContentCard>
        </Content>
      )}
    </div>
  )
}

export default TransaccionesDetalles