import React from 'react'
import {
  StyledTable,
  TableTextMoneda,
  TableTextLink,
  TableTextStatusOK,
  TableTextStatusPending,
  TableTextStatusCancel,
} from './styles'
import MedioPago from '../../components/MedioPago/'

type Props = {
  data: {}[]

  titleData: {}[]
}

const TableDashboard: React.FC<Props> = ({ data, titleData }) => {
  const titles = Object.keys(titleData)
  const titless = Object.keys(data[0])

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
              {titless.map((title: any, index: number) => (
                <td key={index}>
                  {index == 0 ? (
                    <body>
                      <TableTextLink href={'/transacciones/detalles/' + item[title]}>
                        {item[title]}
                      </TableTextLink>
                    </body>
                  ) : index == 5 ? (
                    <body>
                      <TableTextMoneda>{item[title]}</TableTextMoneda>
                    </body>
                  ) : index == 3 ? (
                    <body>
                      <MedioPago type={item[title]}></MedioPago>
                    </body>
                  ) : index == 6 ? (
                    <body>
                      {item[title] == 'Aceptada' ? (
                        <TableTextStatusOK>{item[title]}</TableTextStatusOK>
                      ) : item[title] == 'Pendiente' ? (
                        <TableTextStatusPending>{item[title]}</TableTextStatusPending>
                      ) : item[title] == 'Fallida' ? (
                        <TableTextStatusCancel>{item[title]}</TableTextStatusCancel>
                      ) : item[title] == 'Cancelada' ? (
                        <TableTextStatusCancel>{item[title]}</TableTextStatusCancel>
                      ) : (
                        <body>{item[title]}</body>
                      )}
                    </body>
                  ) : (
                    <body>{item[title]}</body>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  )
}

export default TableDashboard
