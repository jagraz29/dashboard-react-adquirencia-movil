import React, { useState, useEffect } from 'react'
import AvatarDashboard from '../../components/AvatarDashboard/'
import { IconLink } from '../../config/configImages'
import { StorageData } from '../../services/storegeData'

import {
  Content,
  ContentPay,
  ContentAvatar,
  ContentLink,
  TextWolcome,
  TextItem1,
  ButtonLink,
  TitleLink,
  ButtonImg,
  ButtonText,
  ContentItems,
  CardTrasactionOk,
  CardPending,
  CardTransactionTitle,
  CardTransactionCount,
  CardTransactionDetails,
  ContentTable,
  CardTableTitle,
  SpanTitle,
} from './styles'

import TablaDashboard from '../../components/TableDashboard'
import { datos } from './data'
import { useHistory } from 'react-router-dom'
import { getListTransactionSite } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers/index'

const dataTitle = [
  'Ref.Payco',
  'Ref.Client',
  'Descripción',
  'Medio de pago',
  'Valor',
  'Moneda',
  'Estado',
]

const index = () => {
  const [dataUser, setDataUser] = useState(new StorageData().getData())
  const dispatch = useDispatch()
  const history = useHistory()

  const viewState: RootState = useSelector((state: RootState) => state)

  const dataList = viewState.getListTransaction.listTransactionData.transactions

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

  const [dataTable, setDataTable] = useState(dataList)
  const [count, setCount] = useState(0)

  const redirectRoute = (path: string) => {
    history.push(path)
  }

  useEffect(() => {
    dispatch(getListTransactionSite('?limit=3'))
  }, [count])

  useEffect(() => {
    setDataTable(dataList)
  }, [dataList])

  useEffect(() => {
    setDataUser(new StorageData().getData())
  }, [])

  return (
    <div>
      <Content>
        <ContentPay>
          <ContentAvatar>
            <AvatarDashboard srcImage={dataUser.logo}></AvatarDashboard>
            <TextWolcome>¡ Hola {dataUser.companyName} !</TextWolcome>
            <TextItem1>Ya puedes empezar a cobrar. Tipo de cuenta: Personal</TextItem1>
          </ContentAvatar>
          <ContentLink>
            <TitleLink>Herramienta de cobro</TitleLink>
            <ButtonLink onClick={() => redirectRoute('/cobra')}>
              <ButtonImg src={IconLink.url} />
              <ButtonText>Crear y compartir un link de cobro</ButtonText>
            </ButtonLink>
          </ContentLink>
        </ContentPay>
        <ContentItems>
          <CardTrasactionOk>
            <CardTransactionTitle>Transacciones aprobadas</CardTransactionTitle>
            <CardTransactionCount>0</CardTransactionCount>
            <CardTransactionDetails>Ver detalles</CardTransactionDetails>
          </CardTrasactionOk>
          <CardPending>
            <CardTransactionTitle>Transacciones pendientes</CardTransactionTitle>
            <CardTransactionCount>0</CardTransactionCount>
            <CardTransactionDetails>Ver detalles</CardTransactionDetails>
          </CardPending>
        </ContentItems>
        <ContentTable>
          <CardTableTitle>Últimas Transacciones</CardTableTitle>
          {dataListTable && dataListTable.length > 0 ? (
            <TablaDashboard data={dataListTable} titleData={dataTitle} />
          ) : (
            ''
          )}
        </ContentTable>
      </Content>
    </div>
  )
}

export default index
