import styled, { createGlobalStyle } from 'styled-components'
import { MOBILE, TABLET } from './breakpoints'

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
export const ContainerRoute = styled.div`
  background-color: #3980be;
  overflow-y: auto;
  /* height: calc(100vh - 4rem);*/
  @media (max-width: ${MOBILE}) {
    background-color: orange;
    overflow-y: inherit;
  }
`
export const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 3rem auto 3rem;
  @media (max-width: ${MOBILE}) {
    grid-template-rows: 3rem auto 4rem;
  }
`
