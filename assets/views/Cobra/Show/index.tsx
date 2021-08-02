import React, { useEffect, useState } from 'react'
import Title from '../../../components/Title'
import TableLogTransactions from '../../../components/TableLogTransactions'
import { useHistory } from 'react-router-dom'
import { getShowCollect, getDeleteCollect, getDuplicateCollect } from '../../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../redux/reducers/index'
import LoadingBar from '../../../components/LoadingBar'
import { useParams } from 'react-router'
import Swal from 'sweetalert2'
import { useModal } from '../../../components/hooks/useModal'
import { ModalComp } from '../../../components/modalComp'
import ShareLink from '../../../components/ShareLink'
import {
  Content,
  ContentTable,
  CardTableTitle,
  CardTableSubTitle,
  ContentItems,
  CardInfoCollect,
  CardTitleConten,
  CardAction,
  ContentInput,
  ContentInputCard,
  LabelKey,
  TitleKey,
  ButtonsActions,
  CardContentButtonAction,
  ContentPagination,
  CarTitle,
  ButtonsEdit,
  ContainerPrincipal,
  CardContentInfo,
} from './styles'
import { TableTextLink } from '../../../components/TableCobra/styles'
import NumberFormat from 'react-number-format'
import * as AiIcons from 'react-icons/ai'

const breadcrumbTitle = [
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

const CollectShow = ({setBreadcrumb}:any) => {
  let { id }: any = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const { isShown, toggle } = useModal()

  const viewState: RootState = useSelector((state: RootState) => state)
  const dataList = viewState.getShowCollect.showCollectData.data

  const [dataTable, setDataTable] = useState(dataList.log_transactions)
  let [data, setData] = useState(viewState.getShowCollect.showCollectData.data.log_transactions)
  const [count, setCount] = useState(0)

  const idCollect = viewState.getShowCollect.showCollectData.data.id
  const title = viewState.getShowCollect.showCollectData.data.title
  const reference = viewState.getShowCollect.showCollectData.data.reference
  const amount = viewState.getShowCollect.showCollectData.data.amount
  const currency = viewState.getShowCollect.showCollectData.data.currency
  const link =
    typeof viewState.getShowCollect.showCollectData.data.link !== 'undefined'
      ? 'https://payco.link/' + viewState.getShowCollect.showCollectData.data.link
      : ''

  useEffect(() => {
    setBreadcrumb(breadcrumbTitle)
  },[])

  useEffect(() => {
    dispatch(getShowCollect(id))
  }, [count])

  useEffect(() => {
    setDataTable(dataList.log_transactions)
  }, [dataList])

  useEffect(() => {
    if (typeof dataList.log_transactions !== 'undefined') {
      if (dataList.log_transactions.length > 3) {
        setData(dataList.log_transactions.slice(0, 3))
      } else {
        setData(dataList.log_transactions)
      }
    }
  }, [dataList])

  const stateString = (value: number) => {
    if (value == 1) {
      return 'Pendiente'
    } else if (value == 2) {
      return 'Pagado'
    }
  }

  const typeString = (value: number) => {
    let response = ''
    switch (value) {
      case 1:
        response = 'Email'
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
        response = 'No disponible'
    }
    return response
  }

  const date =
    typeof viewState.getShowCollect.showCollectData.data.date !== 'undefined'
      ? viewState.getShowCollect.showCollectData.data.date
      : ''

  const typeSell =
    typeof viewState.getShowCollect.showCollectData.data.typeSell !== 'undefined'
      ? typeString(viewState.getShowCollect.showCollectData.data.typeSell)
      : ''

  const state =
    typeof viewState.getShowCollect.showCollectData.data.state !== 'undefined'
      ? stateString(viewState.getShowCollect.showCollectData.data.state)
      : ''

  const redirectRoute = (path: string) => {
    history.push(path)
  }

  const content = (
    <React.Fragment>
      <ShareLink idCobra={id} toggle={toggle}/>
    </React.Fragment>
  )

  const shareCollect = () => {
    toggle()
  }

  const duplicateCollectModal = () => {
    Swal.fire({
      customClass: {
        confirmButton: 'swalBtnColor',
      },
      title: '¿Seguro que desea duplicar el link de cobro?',
      icon: 'warning',
      showCancelButton: true,
      showCloseButton: true,
      allowOutsideClick: false,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Duplicar',
      cancelButtonColor: '#40A8E6',
      confirmButtonColor: '#FFFFFF',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        duplicateCollect()
      }
    })
  }

  const deleteCollectModal = () => {
    Swal.fire({
      customClass: {
        confirmButton: 'swalBtnColor',
      },
      title: '¿Seguro que desea eliminar el link de cobro?',
      text: 'Una vez lo elimine no podrá recuperar la URL, ni la información',
      icon: 'warning',
      showCancelButton: true,
      showCloseButton: true,
      allowOutsideClick: false,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar',
      cancelButtonColor: '#40A8E6',
      confirmButtonColor: '#FFFFFF',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCollect()
      }
    })
  }

  const showMore = () => {
    let collectLogTransactions =
      typeof viewState.getShowCollect.showCollectData.data.log_transactions.length !== 'undefined'
        ? viewState.getShowCollect.showCollectData.data.log_transactions.length
        : false
    let value = 0
    if (collectLogTransactions) {
      if (collectLogTransactions >= data.length * 2) {
        value = data.length * 2
      } else {
        value = data.length + (collectLogTransactions - data.length)
      }
      setData(viewState.getShowCollect.showCollectData.data.log_transactions.slice(0, value))
    }
  }

  const showLess = () => {
    let collectLogTransactions = typeof data.length !== 'undefined' ? data.length : false
    let value = 0
    if (collectLogTransactions) {
      if (
        collectLogTransactions > 3 &&
        collectLogTransactions / 2 >= 3 &&
        collectLogTransactions / 2 <= 5
      ) {
        value = collectLogTransactions - 3
      } else if (collectLogTransactions > 3) {
        value = collectLogTransactions - (collectLogTransactions - 3)
      }

      if (value < 3) {
        setData(viewState.getShowCollect.showCollectData.data.log_transactions.slice(0, 3))
      } else {
        setData(viewState.getShowCollect.showCollectData.data.log_transactions.slice(0, value))
      }
    }
  }

  const deleteCollect = async () => {
    const response = await getDeleteCollect(id)
    if (response.status) {
      Swal.fire({
        title: 'Cobro',
        text: 'Eliminado correctamente.',
        timer: 3000,
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false,
        showCloseButton: false,
      })
      redirectRoute('/cobra')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador!',
        timer: 3000,
        showCancelButton: false,
        showConfirmButton: false,
        showCloseButton: false,
      })
      redirectRoute('/cobra')
    }
  }

  const duplicateCollect = async () => {
    const response = await getDuplicateCollect(id)
    if (response.status) {
      Swal.fire({
        title: 'Cobro',
        text: 'Duplicado correctamente.',
        timer: 3000,
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false,
        showCloseButton: false,
      })
      redirectRoute('/cobra')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador!',
        timer: 3000,
        showCancelButton: false,
        showConfirmButton: false,
        showCloseButton: false,
      })
      redirectRoute('/cobra')
    }
  }

  const editCollect = () => {
    redirectRoute(`/cobra/edit/${id}`)
  }

  return (
    <ContainerPrincipal> 
      <Title title={'Detalle Cobro'}></Title>
      <Content>

        <ContentItems>

          <CardInfoCollect>
            <CarTitle>
              <CardTitleConten>Id cobro: {idCollect}</CardTitleConten>
              <ButtonsEdit onClick={() => editCollect()}>
                <AiIcons.AiOutlineEdit />
                Editar
              </ButtonsEdit>
            </CarTitle>
            <CardContentInfo>

           
            <ContentInput>
              <ContentInputCard>
                <TitleKey>Titulo del cobro</TitleKey>
                <LabelKey>{title? title:"-"}</LabelKey>
              </ContentInputCard>
              <ContentInputCard>
                <TitleKey>Referencia</TitleKey>
                <LabelKey>{reference? reference:"-"}</LabelKey>
              </ContentInputCard>
              <ContentInputCard>
                <TitleKey>Tipo</TitleKey>
                <LabelKey>{typeSell?typeSell:"-"}</LabelKey>
              </ContentInputCard>
            </ContentInput>
            <ContentInput>
              <ContentInputCard>
                <TitleKey>Estado</TitleKey>
                <LabelKey>{state?state:"-"}</LabelKey>
              </ContentInputCard>
              <ContentInputCard>
                <TitleKey>Valor</TitleKey>
                <LabelKey>
                  <NumberFormat
                    thousandSeparator={true}
                    prefix={'$'}
                    value={amount? amount:"0"}
                    displayType={'text'}
                  />
                </LabelKey>
              </ContentInputCard>
              <ContentInputCard>
                <TitleKey>Moneda</TitleKey>
                <LabelKey>{currency?currency:"-"}</LabelKey>
              </ContentInputCard>
            </ContentInput>
            <ContentInput>
              <ContentInputCard>
                <TitleKey>Fecha de creacion</TitleKey>
                <LabelKey>{date?date:"-"}</LabelKey>
              </ContentInputCard>
              <ContentInputCard>
                <TitleKey>Link del cobro</TitleKey>
                <LabelKey>
                  <TableTextLink href={link}>{link? link:"-"}</TableTextLink>
                </LabelKey>
              </ContentInputCard>
              <ContentInputCard></ContentInputCard>
            </ContentInput>
            </CardContentInfo>
          </CardInfoCollect>


          <CardAction>
            <CarTitle>
              <CardTitleConten>Acciones</CardTitleConten>
            </CarTitle>

              
            <CardContentButtonAction>
              <ButtonsActions onClick={() => shareCollect()}>
                <AiIcons.AiOutlineLink />
                Compartir cobro
              </ButtonsActions>
            </CardContentButtonAction>

            <CardContentButtonAction>
              <ButtonsActions onClick={() => duplicateCollectModal()}>
                <AiIcons.AiTwotoneCopy />
                Duplicar cobro
              </ButtonsActions>
            </CardContentButtonAction>

            <CardContentButtonAction>
              <ButtonsActions onClick={() => deleteCollectModal()}>
                <AiIcons.AiOutlineDelete />
                Eliminar cobro
              </ButtonsActions>
            </CardContentButtonAction>
          </CardAction>

        </ContentItems>

        <ContentTable>

          <CardTableTitle>Historial de pagos</CardTableTitle>
          <CardTableSubTitle>Lista de los pagos realizados con el link de cobro</CardTableSubTitle>
          {(dataTable && dataTable.length > 0) || (dataTable && dataTable.length == '') 
          ? 
          (dataTable && dataTable.length >0 
            ? 
            (
              <>
                <TableLogTransactions data={data} titleData={dataTitle} />
                <ContentPagination>
                  {dataList.log_transactions.length > data.length &&
                    (
                      <ContentInputCard>
                        <ButtonsActions onClick={() => showMore()}>
                          <AiIcons.AiOutlineZoomIn />
                          Ver más
                        </ButtonsActions>
                      </ContentInputCard>
                    ) 
                  }

                  {data.length > 3 && 
                    (
                      <ContentInputCard>
                        <ButtonsActions onClick={() => showLess()}>
                          <AiIcons.AiOutlineZoomOut />
                          Ver menos
                        </ButtonsActions>
                      </ContentInputCard>
                    ) 
                  }
                </ContentPagination>
              </>
            ) 
            : 
            (
              <h3
                style={{
                  fontSize: '20px',
                  padding: '1rem',
                  margin: ' 1rem 0',
                  fontWeight: 400,
                }}
              >
                No se encontraron registros.
              </h3>
            )
          ) 
          : 
          (
            <LoadingBar text={'Cargando...'} />
          )}

        </ContentTable>

      </Content>
      <ModalComp
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText={'Compartir link del catálogo'}
      />
    </ContainerPrincipal>
  )
}

export default CollectShow
