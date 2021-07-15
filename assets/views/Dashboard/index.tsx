import React, { useState, useEffect } from 'react'
import { IconLink } from '../../config/configImages'

import { Content,
   ContentPay, 
   ContentItems, 
   ContentTable,
    CardTableTitle, 
    ConteinerUser, 
    ContainerCobro,
    NotUserImage,
    NameContent,
    BoxLink,
    CardTransaction
  }
 from './styles'

import TablaDashboard from '../../components/TableDashboard'
import { Link, useHistory } from 'react-router-dom'
import { getListTransactionSite } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers/index'
import LoadingBar from '../../components/LoadingBar'
import Avatar from '../../components/Avatar'

const dataTitle = [
  'Ref.Payco',
  'Ref.Client',
  'Descripción',
  'Medio de pago',
  'Valor',
  'Moneda',
  'Estado',
]

const index = ({setBreadcrumb}:any) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const viewState: RootState = useSelector((state: RootState) => state)
  const {companyName, logo} = viewState.captcha.userData.data

  const dataList = viewState.getListTransaction.listTransactionData.transactions
  const dataStatus = viewState.getListTransaction.listTransactionData.aggregations?.transactionStatus
  
  const [dataListTable, setDataListTable] = useState([])

  useEffect(() => {
    setBreadcrumb([])
  },[])

  useEffect(() => {
    const aux = dataList.map((item: any) => {
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
    setDataListTable(aux)
  },[dataList])


  const redirectRoute = (path: string) => {
    history.push(path)
  }

  useEffect(() => {
    dispatch(getListTransactionSite('?limit=3'))
  }, [])
 
  return (
    <Content>
      <ContentPay>
        <ConteinerUser >
          {logo?
          <div className="notImage">
            <Avatar srcImage={logo} size={"75px"} />
          </div>
            :
            <NotUserImage></NotUserImage>
          }
          <NameContent>
            <h1>¡ Hola {companyName} !</h1>
            <div className="typePerson">
              <p><b>Ya puedes empezar a cobrar.</b></p>
              <label>Tipo de cuenta: <b>Persona</b> </label>
            </div>
          </NameContent>
        </ConteinerUser>
        <ContainerCobro>
          <h1>Herramienta de cobro</h1>
          <BoxLink onClick={() => redirectRoute('/cobra')}>
            <img src={IconLink.url} />
            <p>Crear y compartir un link de cobra</p>
          </BoxLink>
        </ContainerCobro>
      </ContentPay>

      <ContentItems>
        <CardTransaction>
          <h4>Transacciones aprobadas</h4>
          <h2>{dataStatus? dataStatus.Aceptada.doc_count:"0"}</h2>
          <Link to="#">Ver detalle</Link>
        </CardTransaction>

        <CardTransaction>
          <h4>Transacciones pendientes</h4>
          <h2>{dataStatus? dataStatus.Pendiente.doc_count:"0"}</h2>
          <Link to="#">Ver detalle</Link>
        </CardTransaction>
      </ContentItems>
      
      <ContentTable>
        <CardTableTitle>Últimas Transacciones</CardTableTitle>
        {
          dataListTable.length > 0 
            ?
              <TablaDashboard data={dataListTable} titleData={dataTitle} />
            : 
              <LoadingBar text={'Cargando...'}/>
          }
        
      </ContentTable>
    </Content>
  )
}

export default index
