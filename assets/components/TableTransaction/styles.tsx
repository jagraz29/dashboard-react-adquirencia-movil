import styled from 'styled-components'
import { INTERMEDIATE, MOBILE } from '../../styles/breakpoints'

export const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  caption-side: bottom;
  margin: 0.5rem;
  td,
  th {
    border: none;
    height: 2.5rem;
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
    min-width: 5rem;
  }
  @media (max-width: ${INTERMEDIATE}) {
    display: none;
  }
`

export const TableTextMoneda = styled.h2`
  font-weight: bold;
  font-size: 14px;
`

export const TableTextStatusOK = styled.h1`
  text-transform: uppercase;
  color: green;
  font-size: 14px;
`

export const TableTextStatusPending = styled.h1`
  text-transform: uppercase;
  color: orange;
  font-size: 14px;
`

export const TableTextStatusCancel = styled.h1`
  text-transform: uppercase;
  font-size: 14px;
  color: #ff6660;
`

export const TableTextStatusOther = styled.h1`
 text-transform: uppercase;
 font-size: 14px;
`

export const ContentAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalInput = styled.div`
  margin: 1rem;
  p {
    margin: 0;
    font-size: 13px;
    font-weight: 600;
  }
  input {
    width: 96%;
    padding: 0.4rem;
    font-size: 1rem;
  }
`
export const ModalButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  padding: 0.5rem;
  .buttonSend {
    background-color: #1c0e49;
    color: white;
    padding: 0.5rem;
    border-radius: 4px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #312652;
    }
  }
  .buttonCancel {
    background-color: white;
    color: #1c0e49;
    padding: 0.5rem;
    border-radius: 4px;
    font-weight: bold;
    border: 1px solid #1c0e49;
    cursor: pointer;
    &:hover {
      background-color: #1c0e49;
      color: white;
    }
  }
  @media (max-width: ${MOBILE}) {
    grid-template-columns: 97%;
    justify-content: center;
    .buttonCancel{
      margin-top: 0.5rem;
    }
  }
`
export const ResponsiveTableDashboard = styled.div`
display: none;
@media (max-width: ${INTERMEDIATE}) {
    display: block;
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
    
  }

`
export const ValueItem = styled.label`

  @media (max-width: ${INTERMEDIATE}) {
    text-align: end;
  }
`
export const ValueStatus = styled.label`

  @media (max-width: ${INTERMEDIATE}) {
    text-align: end;
    text-transform: uppercase;
    color: ${(props: any) => 
      (props['data-estado'] === "Aceptada"? "#67C940": 
      props['data-estado'] === "Rechazada"? "#ff6660":
      props['data-estado'] === "Pendiente"? "orange":
      "black"
      )};
    font-weight:700;
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