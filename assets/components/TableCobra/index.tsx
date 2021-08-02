import React, { useState } from 'react'
import { 
  StyledTable, 
  TableTextMoneda, 
  TableTextLink, 
  ResponsiveTableCobra,
  ContentItem,
  ClaveField,
  ContentAction,
  ValueItem,
  ContainerBox
} from './styles'
import TableCollectAction from '../TableCollectAction'
import { useModal } from '../../components/hooks/useModal'
import { ModalComp } from '../../components/modalComp'
import ShareLink from '../../components/ShareLink'
import { getDeleteCollect } from '../../redux/actions'
import Swal from 'sweetalert2'
import { getListCollect } from '../../redux/actions'
import { useDispatch } from 'react-redux'

import NumberFormat from 'react-number-format'
import { Link, useHistory } from 'react-router-dom'
import { config } from '../../config/enviroment'

type Props = {
  data: {}[]
  titleData: {}[]
}

const fields:any={
  id:"Id",
  date: "Fecha",
  title:"Title",
  reference:"Referencia",
  amount:"Valor",
  currency:"Moneda",
  state:"Estado",
  link:"Link",
  acciones:"Acciones"
}


const TableDashboard: React.FC<Props> = ({ data, titleData }) => {
  const titles = Object.keys(titleData)
  const datos = [
    'id',
    'date',
    'title',
    'reference',
    'currency',
    'amount',
    'typeSell',
    'state',
    'link',
  ]
  const [idCobra, setIdCobra] = useState(null)
  const history = useHistory()
  const { isShown, toggle } = useModal()

  const redirectRoute = (path: string) => {
    history.push(path)
  }

  const content = (
    <React.Fragment>
      <ShareLink idCobra={idCobra} toggle={toggle} />
    </React.Fragment>
  )

  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(getListCollect(''))
  }

  const deleteCollectModal = (id: any) => {
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
        deleteCollect(id)
      }
    })
  }

  const deleteCollect = async (id: any) => {
    const response = await getDeleteCollect(id)
    if (response.status) {
      dispatch(getListCollect(''))
      redirectRoute('/cobra')
      Swal.fire({
        title: 'Cobro',
        text: 'Eliminado correctamente.',
        timer: 3000,
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false,
        showCloseButton: false,
      })
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

  return (
    <div>
      <StyledTable>
        <colgroup>
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            {titleData.map((item: any, index: number) => (
              <th key={index}>
                <header>{item}</header>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <tr key={index}>
              {datos.map((title: string, index: number) => {
                if (title != 'typeSell') {
                  return (
                    <td key={index}>
                      {title == 'id' ? (
                        <body>{item[title]}</body>
                      ) : title == 'amount' ? (
                        <body>
                          <NumberFormat
                            thousandSeparator={true}
                            prefix={'$'}
                            value={item[title]}
                            displayType={'text'}
                          />
                        </body>
                      ) : title == 'currency' ? (
                        <body>
                          <TableTextMoneda>{item[title]}</TableTextMoneda>
                        </body>
                      ) : title == 'link' ? (
                        <body>
                          <TableTextLink href={config.cobraUrl + item[title]}>
                            {config.cobraUrl}
                            {item[title]}
                          </TableTextLink>
                        </body>
                      ) : title == 'state' ? (
                        <body>
                          {item[title] == 1
                            ? 'Pendiente por pago'
                            : item[title] == 2
                            ? 'Pagado'
                            : 'Eliminado'}
                        </body>
                      ) : (
                        <body>{item[title]}</body>
                      )}
                    </td>
                  )
                }
              })}
              <td>
                <TableCollectAction
                  actions={[
                    {
                      name: 'Detalle de cobro',
                      funcion: () => {
                        redirectRoute(`/collect/show/${item['id']}`)
                      },
                      validarEstado: true,
                    },
                    {
                      name: 'Compartir cobro',
                      funcion: () => {
                        setIdCobra(item['id'])
                        toggle()
                      },
                      validarEstado: true,
                    },
                    {
                      name: 'Eliminar cobro',
                      funcion: () => {
                        deleteCollectModal(item['id'])
                      },
                      validarEstado: true,
                    },
                  ]}
                ></TableCollectAction>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <ResponsiveTableCobra>
          {
            data.map((item:any)=>{
              const cajas= Object.keys(fields).map((clave:any)=>(
                  <ContentItem>
                    <ClaveField>{fields[clave]}</ClaveField>
                    {
                      fields[clave] === "Ref.Payco"?
                      <Link to={`/transacciones/detalles/${item[clave]}`}>{item[clave]}</Link>
                      :
                      fields[clave] === "Valor"?
                      <NumberFormat
                          thousandSeparator={true}
                          prefix={'$'}
                          value={item[clave]}
                          displayType={'text'}
                        />
                      :
                      fields[clave] === "Link"?
                        <TableTextLink href={config.cobraUrl + item[clave]}>
                           {config.cobraUrl}
                           {item[clave]}
                        </TableTextLink>
                      :
                      fields[clave] === "Acciones"?
                      <ContentAction>
                          <TableCollectAction
                            actions={[
                              {
                                name: 'Detalle de cobro',
                                funcion: () => {
                                  redirectRoute(`/collect/show/${item['id']}`)
                                },
                                validarEstado: true,
                              },
                              {
                                name: 'Compartir cobro',
                                funcion: () => {
                                  setIdCobra(item['id'])
                                  toggle()
                                },
                                validarEstado: true,
                              },
                              {
                                name: 'Eliminar cobro',
                                funcion: () => {
                                  deleteCollectModal(item['id'])
                                },
                                validarEstado: true,
                              },
                            ]}
                          ></TableCollectAction>
                      </ContentAction>
                     :
                      <ValueItem>{item[clave]}</ValueItem>
                    }
                  </ContentItem>
              ))
                return <ContainerBox>
                  {cajas}
                </ContainerBox>
            })
          }
    </ResponsiveTableCobra>
      <ModalComp
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText={'Compartir link de Cobro'}
      />

    </div>
  )
}

export default TableDashboard
