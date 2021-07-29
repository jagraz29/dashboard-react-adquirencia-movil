import styled from 'styled-components'
import { INTERMEDIATE } from '../../styles/breakpoints'

export const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  margin: 0.5rem;
  caption-side: bottom;
  width: 100%;
  td,
  th {
    border: none;
    height: 2.5rem;
  }
  td {
    text-align: center;
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

export const TableTextLink = styled.a`
  font-weight: normal;;
  color: #40a8e6;
  text-decoration: none;
  font-weight: 500;
`

export const ResponsiveTableCobra = styled.div`
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
export const ContentAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`