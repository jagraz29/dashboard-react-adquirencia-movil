import styled from 'styled-components'
import { INTERMEDIATE, MOBILE } from '../../styles/breakpoints'

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
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

export const TableTextMoneda = styled.h2`
  font-weight: bold;
  font-size: 1vw;
`

export const TableTextLink = styled.a`
  font-weight: normal;
  font-size: 1vw;
  color: #40a8e6;
`
export const ResponsiveTableLogCobra = styled.div`
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
      align-items: center;
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