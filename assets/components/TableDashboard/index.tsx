import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  width: 76.5vw;
  margin: 1vw;
  height: 10vw;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  /* tbody {
    vertical-align: top;
  }              */
  td,
  th {
    border: none;
    height: 3vw;

  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #F9F9F9;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #F1F1F1;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
  header{
    font-family: Segoe UI;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
  }
  body{
    background: none;
    text-align: center;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;

  }
`
type Props = {
  data: {
    ref_payco:  string,
    ref_cliente: string,
    descripcion: string,
    medio_pago: string,
    valor: string,
    moneda: string,
    estado: string
  }[]
}

const TableDashboard: React.FC<Props> = ({ data }) => {
  const titles = Object.keys(data[0])

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
            {titles.map((title:string, index:number) => (
              <th key={index}><header>{title}</header></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item:any, index:number) => (
            <tr key={index}>
              {titles.map((title:any, index:number) => (
                <td key={index}><body>{item[title]}</body></td>
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
