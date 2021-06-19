import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import { IconLink } from '../../config/configImages'
import Breadcrumbs from '../../components/Breadcrumbs/'
import TablaCobra from '../../components/TableCobra'
import { datos } from './data'
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
import { getListCollect } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers/index'

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
  'Id',
  'Fecha',
  'Titulo',
  'typeSell',
  'Referencia',
  'Moneda',
  'Valora',
  'Estado',
  'Link',
  'Acciones',
]

const dataInit = [
  {
    id: 0,
    date: '',
    title: '',
    typeSell: 0,
    reference: '',
    currency: '',
    amount: 0,
    state: 0,
    link: 0,
  },
]

const Cobra = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const viewState: RootState = useSelector((state: RootState) => state)

  const dataList = viewState.getListCollect.listCollectData.data

  const [dataTable, setDataTable] = useState(dataInit)
  const [count, setCount] = useState(0)

  console.log('DATA LIST', dataList)

  useEffect(() => {
    dispatch(getListCollect())
  }, [count])

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
          <CardTableTitle>Cobros</CardTableTitle>
          {dataList && dataList.length > 0 ? (
            <TablaCobra data={dataList} titleData={dataTitle} />
          ) : (
            console.log('loading')
          )}
        </ContentTable>
      </Content>
    </div>
  )
}

export default Cobra
