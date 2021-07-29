import React, { useEffect, useState, useCallback } from 'react'
import Title from '../../components/Title'
import { IconLink } from '../../config/configImages'
import TablaCobra from '../../components/TableCobra'
import {
  ContentCobra,
  ContentTitle,
  ButtonLink,
  ButtonLinkTitle,
  ButtonLinkText,
  ContentTable,
  CardTableTitle,
  ContentSearchTitle,
  ContainerPrincipal,
  ContentButtonLink,
  SearchContainer
} from './styles'
import { useHistory } from 'react-router-dom'
import { getListCollect } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers/index'
import { FaSearch } from 'react-icons/fa'
import LoadingBar from '../../components/LoadingBar'
const breadcrumbTitle = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Cobra',
    path: '/cobra',
    active: false,
  },
]

const dataTitle = [
  'Id',
  'Fecha',
  'Título',
  'Referencia',
  'Moneda',
  'Valor',
  'Estado',
  'Link',
  'Acciones',
]

const Cobra = ({setBreadcrumb}:any) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const viewState: RootState = useSelector((state: RootState) => state)

  const dataList = viewState.getListCollect.listCollectData.data

  const [dataTable, setDataTable] = useState(dataList)
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setBreadcrumb(breadcrumbTitle)
  },[])

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

  const searchTable = (event: any) => {
    event.preventDefault()
    searchData(search)
  }

  const searchData = (value: string) => {
    dispatch(getListCollect(`/${value}`))
  }
  const handleReset = () => {
    dispatch(getListCollect(''))
    setSearch('')
  }

  return (
    <ContainerPrincipal>
      <Title title={'Cobra'}></Title>
      <ContentCobra>
        
        <ContentTitle>Comience a cobrar/vender.</ContentTitle>
        <ButtonLink onClick={() => redirectRoute('/cobra/create')}>
          <ButtonLinkTitle>Link de cobro</ButtonLinkTitle>
          <ContentButtonLink>
            <img src={IconLink.url} />
            <ButtonLinkText>Cree vínculos de cobro, y compártalos por donde quiera.</ButtonLinkText>
          </ContentButtonLink>
        </ButtonLink>

        <ContentTable >
          <ContentSearchTitle>
            <CardTableTitle>Cobros</CardTableTitle>
            <SearchContainer className="searchContainer" onSubmit={(e) => searchTable(e)}>
              <div>
                <input
                  placeholder="Buscar"
                  type="number"
                  name="search"
                  value={search}
                  onChange={(e) => searchChange(e)}
                />
                <button type="button" onClick={handleReset}>
                  x
                </button>
              </div>
              <button className="buttonSeach" type="submit">
                <FaSearch />
              </button>
            </SearchContainer>
          </ContentSearchTitle>

          {dataTable && dataTable.length > 0 
          ?
            <TablaCobra data={dataTable} titleData={dataTitle} />
            :
              <LoadingBar text={'Obteniendo informacion...'} />
          }
        </ContentTable>

      </ContentCobra>
    </ContainerPrincipal>
  )
}

export default Cobra
