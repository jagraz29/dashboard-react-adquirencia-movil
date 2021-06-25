import React, { useState } from 'react'
import { StyledTable, TableTextMoneda, TableTextLink } from './styles'
import TableCollectAction from '../TableCollectAction'

type Props = {
  data: {}[]
  titleData: {}[]
}

const TableSoporte: React.FC<Props> = ({ data, titleData }) => {
  const titles = Object.keys(titleData)
  const datos = Object.keys(data[0])
  const [alert, setAlert] = useState(false)
  const [buttonLoadModal, setButtonLoadModal] = useState(false)

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
              {datos.map((title: any, index: number) => (
                <td key={index}>
                  {index == 0 ? (
                    <body>
                      <TableTextLink href={'soporte/detalle/' + item[title]}>
                        item[title]
                      </TableTextLink>
                    </body>
                  ) : index == 4 ? (
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
                  actions={[
                    {
                      name: 'Detalle',
                      funcion: '',
                      validarEstado: true,
                    },
                    {
                      name: 'Cerrar',
                      funcion: '',
                      validarEstado: true,
                    },
                  ]}
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
