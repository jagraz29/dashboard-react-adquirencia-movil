import styled, { createGlobalStyle } from 'styled-components'
import { TABLET } from './breakpoints'

export const GlobalStyle = createGlobalStyle`
    h1{
        font-family: Segoe UI;
        font-style: normal;
        font-weight: bold;
    }

    h2{
        font-family: Segoe UI;
        font-style: normal;
        font-weight: normal;
        margin: 0;
    }

    h3{
        font-family: Segoe UI;
        font-style: normal;
        margin: 0;
    }
`
export const Layout = styled.div`
  background-color: #3980be;
  margin-left: 20vw;
  height: calc(100vh - 4rem);
  padding: 1rem;
  @media (max-width: ${TABLET}) {
    margin-left: 0;
  }
`
