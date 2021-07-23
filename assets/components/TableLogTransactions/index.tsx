import React, { useEffect } from 'react'
import { StyledTable } from './styles'
type Props = {
  data: {}[]
  titleData: {}[]
}

const TableDashboard: React.FC<Props> = ({ data, titleData }) => {

  const titles = Object.keys(titleData)
  const datos = Object.keys(data[0])

  const addStatusClass = (state: any) => {
    let { classCss }: any = ''
    switch (state) {
      case 'Aprobada':
      case 'Aceptada':
        classCss = (
          <h1
            style={{
              textAlign: 'center',
              fontSize: '1vw',
              color: 'green',
              textDecoration: 'none',
            }}
          >
            {state}
          </h1>
        )
        break
      case 'Pendiente':
        classCss = (
          <h1
            style={{
              textAlign: 'center',
              fontSize: '1vw',
              color: 'orange',
              textDecoration: 'none',
            }}
          >
            {state}
          </h1>
        )
        break
      case 'Rechazada':
        classCss = (
          <h1
            style={{
              textAlign: 'center',
              fontSize: '1vw',
              color: 'red',
              textDecoration: 'none',
            }}
          >
            {state}
          </h1>
        )
        break
      default:
        classCss = (
          <h1
            style={{
              textAlign: 'center',
              fontSize: '1vw',
              textDecoration: 'none',
            }}
          >
            {state}
          </h1>
        )
        break
    }
    return classCss
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
                  {title == 'state' ? (
                    <span>{addStatusClass(item[title])}</span>
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
