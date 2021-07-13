import React, { useState } from 'react'
import { StyledTable, TableTextMoneda, TableTextLink } from './styles'
import TableCollectAction from '../TableCollectAction'

import NumberFormat from 'react-number-format'

type Props = {
  data: {}[]
  titleData: {}[]
}

const TableDashboard: React.FC<Props> = ({ data, titleData }) => {
  const titles = Object.keys(titleData)
  const datos = Object.keys(data[0])

  const compartir = (item: number) => {
    console.log('asjdflajdfladlkfajskldfjaskfjalksfjdlkaj', item)
  }

  const addStatusClass = (state:any) => {
    let { classCss }: any = ''
    switch (state) {
      case "Aprobada":
        classCss = <h3
            style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1vw',
                color: '#28a745',
                textDecoration: 'none',
            }}
        >
            {state}
        </h3>
        break;
      case "Pendiente":
        classCss = <h3
            style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1vw',
                color: '#ffc107',
                textDecoration: 'none',
            }}
        >
            {state}
        </h3>
        break;
      case "Rechazada":
        classCss = <h3
            style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1vw',
                color: '#dc3545',
                textDecoration: 'none',
            }}
        >
            {state}
        </h3>
        break;
      case "Aceptada":
        classCss = <h3
            style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1vw',
                color: '#21678b',
                textDecoration: 'none',
            }}
        >
            {state}
        </h3>
        break;
      default:
        classCss = <h3
            style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1vw',
                color: '#565606',
                textDecoration: 'none',
            }}
        >
            {state}
        </h3>
        break;
    }
    return classCss;
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
                    <span>
                        {addStatusClass(item[title])}
                    </span>


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

export default TableDashboard
