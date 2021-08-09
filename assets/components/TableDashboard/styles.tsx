import styled from 'styled-components'
import { TABLET, MOBILE, INTERMEDIATE } from '../../styles/breakpoints'

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  td,
  th {
    border: none;
    height: 3vw;
  }
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

  @media (max-width: ${INTERMEDIATE}) {
    display: none;
  }
`
export const ResponsiveTableDashboard = styled.div`
display: none;
@media (max-width: ${INTERMEDIATE}) {
    display: block;
  }
`
export const ContainerBox = styled.div`
display: none;

  @media (max-width: ${INTERMEDIATE}) {
      display: flex;
      flex-direction: column;
      border: 1px solid #cfcfcf;
      border-radius: 4px;
      margin: 1rem;
      padding: 0.5rem;
   }

`
export const ContentItem = styled.div`
display: none;
   @media (max-width: ${INTERMEDIATE}) {
      display: flex;
      flex-direction: row;
      justify-content:space-between;
      margin: 0.2rem 0;
      a{
        text-decoration: none;
        color: #40A8E6;
        font-weight: 500;
      }
  }

`
export const ClaveField = styled.label`

   @media (max-width: ${INTERMEDIATE}) {
    font-weight: 700;
    margin-right: 0.2rem;
  }

`
export const ValueItem = styled.label`

  @media (max-width: ${INTERMEDIATE}) {
    text-align: end;
    word-break: break-all;
  }
`
export const ValueStatus = styled.label`

  @media (max-width: ${INTERMEDIATE}) {
    text-transform: uppercase;
    text-align: end;
    color: ${(props: any) => 
      (props['data-estado'] === "Aceptada"? "#67C940": 
      props['data-estado'] === "Rechazada"? "#ff6660":
      props['data-estado'] === "Pendiente"? "orange":
      "black"
      )};
    font-weight:700;
  }
`

export const TableTextMoneda = styled.h2`
  font-weight: bold;
  font-size: 13px;
`

export const TableTextLink = styled.body`
  a{
    font-weight: normal;
    font-size: 13px;
    color: #40a8e6;
    text-decoration: none;
  }
`
export const TableTextStatusOK = styled.h1`
  text-transform: uppercase;
  color: green;
  font-size: 13px;
`

export const TableTextStatusPending = styled.h1`
  text-transform: uppercase;
  color: orange;
  font-size: 13px;
`

export const TableTextStatusCancel = styled.h1`
  text-transform: uppercase;
  color: red;
  font-size: 13px;
`
export const TableTextStatusOther = styled.h1`
  text-transform: uppercase;
  font-size: 13px;
`