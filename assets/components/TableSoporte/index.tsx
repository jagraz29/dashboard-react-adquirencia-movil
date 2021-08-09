import React, { useState } from 'react'
import { 
  StyledTable,
  TableTextMoneda, 
  TableTextLink,
  ResponsiveTableSoporte,
  ContentItem,
  ClaveField,
  ContentAction,
  ValueItem,
  ContainerBox
} from './styles'
import TableCollectAction from '../TableCollectAction'
import { closeTicket, reOpenTicket } from '../../redux/actions'
import { toast } from 'react-toastify'
import { Link, useHistory } from 'react-router-dom'

type Props = {
  data: {}[]
  titleData: {}[]
  bodyTitle: {}[]
  ticketsOpen: boolean
}

const fields:any={
  id:"ID Ticket",
  asunto: "Asunto",
  departamento:"Área de atención",
  estado:"Estado",
  etapa:"Etapa",
  fecha:"Fecha de creación",
  fechaActualizacion:"Última actualización",
  acciones:"Acciones"
}

const TableSoporte: React.FC<Props> = ({ data, titleData, bodyTitle, ticketsOpen }) => {

  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false)

  const history = useHistory()
  const ticketClose = async (id: number) => {
    const res = await closeTicket(id)
    if (typeof res != 'boolean') {
      toast.success('Ticket Cerrado Exitosamente')
      window.location.href = '/soporte'
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
  }

  const ticketReOpen = async (id: number) => {
    const res = await reOpenTicket(id)
    if (typeof res != 'boolean') {
      toast.success('Ticket Reabierto Exitosamente')
      window.location.href = '/soporte'
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
  }

  const navToDetail = async (id: number) => {
    history.push(`/soporte/detalle/${id}`)
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
              {bodyTitle.map((title: any, index: number) => (
                <td key={index}>
                  {index == 0 ? (
                    <body>
                      <Link to={'soporte/detalle/' + item[title]}>
                        {item[title]}
                      </Link>
                    </body>
                  ) : index == 3 ? (
                    <body>
                      <TableTextMoneda>{item[title]}</TableTextMoneda>
                    </body>
                  ) : (
                    <body>{item[title]}</body>
                  )}
                </td>    
              ))}
              <td>
                <TableCollectAction
                  visible={dropdownVisible===item['id']}
                  setDropdownVisible={()=> setDropdownVisible(item['id']) }
                  actions={
                    ticketsOpen
                      ? [ 
                          {
                            name: 'Detalle',
                            funcion: () => {
                              navToDetail(item.id)
                            },
                            validarEstado: true,
                          },
                          {
                            name: 'Cerrar',
                            funcion: () => {
                              ticketClose(item.id)
                            },
                            validarEstado: true,
                          },
                        ]
                      : [
                          {
                            name: 'Detalle',
                            funcion: () => {
                              navToDetail(item.id)
                            },
                            validarEstado: true,
                          },
                          {
                            name: 'Reabrir',
                            funcion: () => {
                              ticketReOpen(item.id)
                            },
                            validarEstado: true,
                          },
                        ]
                  }
                ></TableCollectAction>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <ResponsiveTableSoporte>
          {
            data.map((item:any)=>{
              const cajas= Object.keys(fields).map((clave:any)=>(
                  <ContentItem>
                    <ClaveField>{fields[clave]}</ClaveField>
                    {
                      fields[clave] === "ID Ticket"?
                      <Link to={'soporte/detalle/' + item[clave]}>{item[clave]}</Link>
                      :
                      fields[clave] === "Acciones"?
                      <ContentAction>
                          <TableCollectAction
                              visible={dropdownVisible===item.id}
                              setDropdownVisible={()=> setDropdownVisible(item.id) }
                              actions={
                                ticketsOpen
                                  ? [
                                      {
                                        name: 'Detalle',
                                        funcion: () => {
                                          navToDetail(item.id)
                                        },
                                        validarEstado: true,
                                      },
                                      {
                                        name: 'Cerrar',
                                        funcion: () => {
                                          ticketClose(item.id)
                                        },
                                        validarEstado: true,
                                      },
                                    ]
                                  : [
                                      {
                                        name: 'Detalle',
                                        funcion: () => {
                                          navToDetail(item.id)
                                        },
                                        validarEstado: true,
                                      },
                                      {
                                        name: 'Reabrir',
                                        funcion: () => {
                                          ticketReOpen(item.id)
                                        },
                                        validarEstado: true,
                                      },
                                    ]
                              }
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
    </ResponsiveTableSoporte>
    </div>
  )
}

export default TableSoporte
