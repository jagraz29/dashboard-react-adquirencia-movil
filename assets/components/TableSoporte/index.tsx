import React, { useState } from 'react'
import { StyledTable, TableTextMoneda, TableTextLink } from './styles'
import TableCollectAction from '../TableCollectAction'
import { closeTicket, reOpenTicket } from '../../redux/actions'
import { toast } from 'react-toastify'

type Props = {
  data: {}[]
  titleData: {}[]
  bodyTitle: {}[]
  ticketsOpen: boolean
}

const TableSoporte: React.FC<Props> = ({ data, titleData, bodyTitle, ticketsOpen }) => {
  const datos = Object.keys(data[0])
  const [alert, setAlert] = useState(false)
  const [buttonLoadModal, setButtonLoadModal] = useState(false)

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
                      <TableTextLink href={'soporte/detalle/' + item[title]}>
                        {item[title]}
                      </TableTextLink>
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
                  actions={
                    ticketsOpen
                      ? [
                          {
                            name: 'Detalle',
                            funcion: '',
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
                            funcion: '',
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
    </div>
  )
}

export default TableSoporte
