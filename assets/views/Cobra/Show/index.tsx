import React, { useEffect, useState } from 'react'
import Title from '../../../components/Title'
import Breadcrumbs from '../../../components/Breadcrumbs/'
import TableLogTransactions from '../../../components/TableLogTransactions'
import { useHistory } from 'react-router-dom'
import {getShowCollect} from '../../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../redux/reducers/index'
import LoadingBar from '../../../components/LoadingBar'
import { useParams } from 'react-router'
import {
  Content,
  ContentTable,
  CardTableTitle,
  CardTableSubTitle,
  ContentItems,
  CardTrasactionOk,
  CardTransactionTitle,
  CardTransactionCount,
  CardTransactionDetails,
  CardPending,
  ContentInput,
  ContentInputCard,
  LabelKey,
  TitleKey,

} from './styles'
import {TableTextLink} from "../../../components/TableCobra/styles";
import {string} from "prop-types";
import NumberFormat from "react-number-format";

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
  {
    title: 'Detalle',
    path: '/',
    active: false,
  },
]

const dataTitle = ['Referencia. ePayco', 'Estado', 'Fecha de pago']

const CollectShow = () => {
  let { id }: any = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const viewState: RootState = useSelector((state: RootState) => state)
  const dataList = viewState.getShowCollect.showCollectData.data

  const [dataTable, setDataTable] = useState(dataList.log_transactions)
  const [count, setCount] = useState(0)

  const idCollect = viewState.getShowCollect.showCollectData.data.id
  const title = viewState.getShowCollect.showCollectData.data.title
  const reference = viewState.getShowCollect.showCollectData.data.reference
  const amount = viewState.getShowCollect.showCollectData.data.amount
  const currency = viewState.getShowCollect.showCollectData.data.currency
  const link = typeof viewState.getShowCollect.showCollectData.data.link !== 'undefined' ? 'https://payco.link/' + viewState.getShowCollect.showCollectData.data.link : ''

  useEffect(() => {
    dispatch(getShowCollect(id))
  }, [count])

  useEffect(() => {
    setDataTable(dataList.log_transactions)
  }, [dataList])

  const stateString = (value: any) => {
    if (value == 1) {
        return 'Pendiente'
    } else if (value == 2) {
      return 'Pagado'
    }
  }

  const typeString = (value: any) => {
      let response = ''
      switch (value) {
        case 1:
          response = 'Email';
          break
        case 2:
          response = 'Link'
          break
        case 3:
          response = 'SMS'
          break
        case 4:
          response = 'Redes Sociales'
          break
        case 5:
          response = 'Botón'
          break
        case 6:
          response = 'Datáfono virtual'
          break
        default:
          response = 'No disponible';
      }
      return response;
  }

  const date = typeof viewState.getShowCollect.showCollectData.data.date !== 'undefined' ? viewState.getShowCollect.showCollectData.data.date : ''

  const typeSell = typeof viewState.getShowCollect.showCollectData.data.typeSell !== 'undefined' ? typeString(viewState.getShowCollect.showCollectData.data.typeSell): ''

  const state = typeof viewState.getShowCollect.showCollectData.data.state !== 'undefined' ? stateString(viewState.getShowCollect.showCollectData.data.state) : ''

  const redirectRoute = (path: string) => {
    history.push(path)
  }

  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={'Detalle Cobro'}></Title>
      <Content>
        <ContentItems>
          <CardTrasactionOk>
            <CardTransactionTitle>Id cobro: {idCollect}</CardTransactionTitle>
            <ContentInput>
              <ContentInputCard>
                <TitleKey>Titulo del cobro</TitleKey>
                <LabelKey>{title}</LabelKey>
              </ContentInputCard>
              <ContentInputCard>
                <TitleKey>Referencia</TitleKey>
                <LabelKey>{reference}</LabelKey>
              </ContentInputCard>
              <ContentInputCard>
                <TitleKey>Tipo</TitleKey>
                <LabelKey>{typeSell}</LabelKey>
              </ContentInputCard>
            </ContentInput>
            <ContentInput>
              <ContentInputCard>
                <TitleKey>Estado</TitleKey>
                <LabelKey>{state}</LabelKey>
              </ContentInputCard>
              <ContentInputCard>
                <TitleKey>Valor</TitleKey>
                <LabelKey>
                  <NumberFormat
                      thousandSeparator={true}
                      prefix={'$'}
                      value={amount}
                      displayType={'text'}
                  />
                </LabelKey>
              </ContentInputCard>
              <ContentInputCard>
                <TitleKey>Moneda</TitleKey>
                <LabelKey>{currency}</LabelKey>
              </ContentInputCard>
            </ContentInput>
            <ContentInput>
              <ContentInputCard>
                <TitleKey>Fecha de creacion</TitleKey>
                <LabelKey>{date}</LabelKey>
              </ContentInputCard>
              <ContentInputCard>
                <TitleKey>Link del cobro</TitleKey>
                <LabelKey>
                  <TableTextLink href={link}>
                    {link}
                  </TableTextLink>
                </LabelKey>

              </ContentInputCard>
              <ContentInputCard>
              </ContentInputCard>
            </ContentInput>
          </CardTrasactionOk>
          <CardPending>
            <CardTransactionTitle>Transacciones pendientes</CardTransactionTitle>
            <CardTransactionCount>0</CardTransactionCount>
            <CardTransactionDetails>Ver detalles</CardTransactionDetails>
          </CardPending>
        </ContentItems>

        <ContentTable>
          <CardTableTitle>Historial de pagos</CardTableTitle>
          <CardTableSubTitle>Lista de los pagos realizados con el link de cobro</CardTableSubTitle>

          {dataTable && dataTable.length > 0 ? (
            <TableLogTransactions data={dataTable} titleData={dataTitle} />
          ) : (
              <LoadingBar text={'Cargando...'} />
          )}
        </ContentTable>
      </Content>
    </div>
  )
}

export default CollectShow
