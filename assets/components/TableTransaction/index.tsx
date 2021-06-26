import React from 'react'
import styled from 'styled-components'
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

const TableTransaction: React.FC<Props> = ({ data, titleData }) => {
  const titles = Object.keys(titleData)
  const titless = Object.keys(data[0])

  console.log(data)
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
                      <TableTextLink href={'https://epayco.link/' + item[title]}>
                        {item[title]}
                      </TableTextLink>
                    </body>
                  ) : index == 3 ? (
                    <body>
                      <TableTextMoneda>{item[title]}</TableTextMoneda>
                    </body>
                  ) : index == 2 ? (
                    <body>
                      <MedioPago type={item[title]}></MedioPago>
                    </body>
                  ) : index == 4 ? (
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

export default TableTransaction
