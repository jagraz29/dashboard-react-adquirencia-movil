import React, { useState, useEffect } from 'react'
import AvatarDashboard from '../../components/AvatarDashboard/'
import { IconLink } from '../../config/configImages'
import { StorageData } from '../../services/storegeData'

import { Content, ContentPay, ContentItems, ContentTable, CardTableTitle } from './styles'

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

  console.log('MY array', dataListTable)

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

  console.log(dataList)

  return (
    <Content>
      <ContentPay>
        <div className="userContent">
          <div>
            <img src={dataUser.logo}></img>
          </div>
          <div>
            <h1>¡ Hola {dataUser.companyName} !</h1>
            <div>
              <p>Ya puedes empezar a cobrar.</p>
              <label>Tipo de cuenta:</label>
              <p>Personal</p>
            </div>
          </div>
        </div>
        <div className="cobroContent">
          <h1>Herramienta de cobro</h1>
          <div onClick={() => redirectRoute('/cobra')}>
            <img src={IconLink.url} />
            <p>Crear y compartir un link de cobra</p>
          </div>
        </div>
      </ContentPay>
      <ContentItems>
        <div>
          <h1>Transacciones aprobadas</h1>
          <label>0</label>
          <a>Ver detalles</a>
        </div>
        <div>
          <h1>Transacciones pendientes</h1>
          <label>0</label>
          <a>Ver detalles</a>
        </div>
      </ContentItems>
      <ContentTable>
        <CardTableTitle>Últimas Transacciones</CardTableTitle>
        {dataListTable && dataListTable.length > 0 ? (
          <TablaDashboard data={dataListTable} titleData={dataTitle} />
        ) : (
          console.log('loading')
        )}
      </ContentTable>
    </Content>
  )
}

export default index
