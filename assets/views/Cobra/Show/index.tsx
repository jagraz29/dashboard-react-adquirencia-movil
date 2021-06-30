import React, { useEffect, useState, useCallback } from 'react'
import Title from '../../../components/Title'
import { IconLink } from '../../../config/configImages'
import Breadcrumbs from '../../../components/Breadcrumbs/'
import TableLogTransactions from '../../../components/TableLogTransactions'
import { datos } from '../data'
import {
  Content,
  ContentTitle,
  ButtonLink,
  ButtonLinkTitle,
  ButtonLinkImg,
  ButtonLinkText,
  ContentTable,
  CardTableTitle,
} from './styles'
import { useHistory } from 'react-router-dom'
import { getListCollect, getShowCollect } from '../../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../redux/reducers/index'
import { useParams } from 'react-router'
import TableLogTransaction from '../../../components/TableLogTransactions'

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

const dataTitle = ['Referencia. ePayco', 'Estado', 'Fecha de pago']

const dataInit = [
  {
    reference: 0,
    state: '',
    date: '',
  },
]

const CobraShow = () => {
  let { id }: any = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const viewState: RootState = useSelector((state: RootState) => state)
  const dataList = viewState.getShowCollect.showCollectData.data

  const [dataTable, setDataTable] = useState(dataList.log_transactions)
  const [count, setCount] = useState(0)

  useEffect(() => {
    dispatch(getShowCollect(id))
  }, [count])

  useEffect(() => {
    setDataTable(dataList.log_transactions)
  }, [dataList])

  const redirectRoute = (path: string) => {
    history.push(path)
  }

  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={'Cobra'}></Title>
      <Content>
        <ContentTitle>Comience a cobrar/vender.</ContentTitle>
        <ButtonLink onClick={() => redirectRoute('/cobra/create')}>
          <ButtonLinkTitle>Link de cobro</ButtonLinkTitle>
          <ButtonLinkImg src={IconLink.url} />
          <ButtonLinkText>Crea vinculos de cobro, y compártalos por donde quiera.</ButtonLinkText>
        </ButtonLink>
        <ContentTable>
          <CardTableTitle>Historial de pagos</CardTableTitle>

          {dataTable && dataTable.length > 0 ? (
            <TableLogTransaction data={dataTable} titleData={dataTitle} />
          ) : (
            console.log('loading')
          )}
        </ContentTable>
      </Content>
    </div>
  )
}

export default CobraShow
