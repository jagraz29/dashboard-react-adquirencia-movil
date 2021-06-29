import React, { useEffect, useState, useCallback } from 'react'
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
  ContentSearchTitle,
  SearchTable,
} from './styles'
import { useHistory } from 'react-router-dom'
import { getListCollect } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers/index'
import InputSearch from '../../components/InputSearch/'
import Paginations from '../../components/Pagination'
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
  'Referencia',
  'Moneda',
  'Valor',
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

  const [dataTable, setDataTable] = useState(dataList)
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(getListCollect(search))
  }, [count])

  useEffect(() => {
    setDataTable(dataList)
  }, [dataList])

  const redirectRoute = (path: string) => {
    history.push(path)
  }

  const searchChange = useCallback((event) => {
    setSearch(event.target.value)
  }, [])

  const searchTable = useCallback((event) => {
    searchData(event)
  }, [])

  const searchData = (value: string) => {
    dispatch(getListCollect(`/${value}`))
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
          <ContentSearchTitle>
            <CardTableTitle>Cobros</CardTableTitle>
            <InputSearch
              type={'text'}
              placeholder={'Buscar'}
              name={'search'}
              value={search}
              onChange={(e: any) => {
                searchChange(e)
              }}
              returnComplete={true}
              width={'15vw'}
              eventSearch={(e: any) => {
                searchTable(e)
              }}
            />
          </ContentSearchTitle>

          {dataTable && dataTable.length > 0 ? (
            <TablaCobra data={dataTable} titleData={dataTitle} />
          ) : (
            console.log('loading')
          )}
        </ContentTable>
      </Content>
    </div>
  )
}

export default Cobra
