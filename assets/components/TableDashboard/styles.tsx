import styled from 'styled-components'

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

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
      background-color: #f9f9f9;
    }
    :hover {
      background-color: #ceecf5;
    }
  }
  thead > tr {
    background-color: #f1f1f1;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
  header {
    font-family: Segoe UI;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
  }
  body {
    background: none;
    text-align: center;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
  }
`

export const TableTextMoneda = styled.h2`
  font-weight: bold;
  font-size: 1vw;
`

export const TableTextLink = styled.a`
  font-weight: normal;
  font-size: 1vw;
  color: #40a8e6;
  text-decoration: none;
`
export const TableTextStatusOK = styled.h1`
  color: green;
  font-size: 1vw;
`

export const TableTextStatusPending = styled.h1`
  color: orange;
  font-size: 1vw;
`

export const TableTextStatusCancel = styled.h1`
  color: red;
  font-size: 1vw;
`
