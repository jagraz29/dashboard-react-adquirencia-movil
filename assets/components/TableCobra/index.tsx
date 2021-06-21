import React, { useState } from 'react'
import { StyledTable, TableTextMoneda, TableTextLink } from './styles'
import TableCollectAction from '../TableCollectAction'

type Props = {
  data: {}[]
  titleData: {}[]
}

const TableDashboard: React.FC<Props> = ({ data, titleData }) => {
  console.log('paso a la tabla', data)
  const titles = Object.keys(titleData)
  const datos = Object.keys(data[0])
  const [alert, setAlert] = useState(false)
  const [buttonLoadModal, setButtonLoadModal] = useState(false)

  const compartir = (item: number) => {
    console.log('asjdflajdfladlkfajskldfjaskfjalksfjdlkaj', item)
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
              {datos.map((title: any, index: number) => (
                <td key={index}>
                  {index == 0 ? (
                    <body>{item[title]}</body>
                  ) : index == 5 ? (
                    <body>
                      <TableTextMoneda>{item[title]}</TableTextMoneda>
                    </body>
                  ) : index == 8 ? (
                    <body>
                      <TableTextLink href={'https://epayco.link/' + item[title]}>
                        https://epayco.link/{item[title]}
                      </TableTextLink>
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
                      name: 'Detalle de cobro',
                      funcion: '',
                      validarEstado: true,
                    },
                    {
                      name: 'Compartir cobro',
                      funcion: () => {
                        compartir(item.id)
                      },
                      validarEstado: true,
                    },
                    {
                      name: 'Eliminar cobro',
                      funcion: '',
                      validarEstado: true,
                    },
                  ]}
                ></TableCollectAction>
              </td>
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
            <tr>
              {titles.map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </tr>
          </tfoot> */}
      </StyledTable>
    </div>
  )
}

export default TableDashboard
