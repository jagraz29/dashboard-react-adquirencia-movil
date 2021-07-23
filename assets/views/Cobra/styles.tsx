import styled from 'styled-components'
import { INTERMEDIATE, MOBILE } from '../../styles/breakpoints'

export const ContainerPrincipal = styled.div`
  display: grid;
  grid-template-rows: 3rem auto;
  overflow: hidden;
`
export const ContentCobra = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  overflow: hidden;
  overflow-x: auto;
  @media (max-width: ${INTERMEDIATE}) {
    overflow: hidden;
  }
`
export const ContentTitle = styled.h3`
  margin: 0;
  font-weight: 400;
`

export const ButtonLink = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  margin: 1rem 0;
  @media (max-width: ${MOBILE}) {
    width: 99%;
  }
`
export const ContentButtonLink = styled.span`
  display: flex;
  margin: 0.5rem;
  align-items: center;
`
export const ButtonLinkTitle = styled.span`
  margin: 0.5rem;
  margin-bottom: 0;
`

export const ButtonLinkText = styled.small`
  padding-left: 0.5rem;
`

export const ContentTable = styled.div`
  height: auto;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: scroll;
  @media (max-width: ${INTERMEDIATE}) {
    overflow: hidden;
  }
`

export const CardTableTitle = styled.h2`
  color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: ${MOBILE}) {
    margin-top: 0;
  }

`
export const ContentSearchTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.5rem;
  @media (max-width: ${MOBILE}) {
    flex-direction: column;
    margin: 0;
    margin: 1rem;
    align-items: start;
  }
`

export const SearchContainer = styled.form`
  display: grid;
  grid-template-columns: 4fr 1fr;
  margin: 0 1rem;
  div {
    display: grid;
    grid-template-columns: 5fr 1fr;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input {
      border: 1px solid #b7b6b6;
      border-radius: 4px 0px 0px 4px;
      line-height: 35px;
      padding: 0px 0.5em 0px;
      border-color: #c5c5c8;
      min-height: 35px;
      height: 35px;
      border-right: none;
    }
    button {
      padding: 0px 0.5em 0px;
      background-color: white;
      border: 1px solid #c5c5c8;
      border-left: none;
      color: #bababa;
      font-weight: bold;
      :hover {
        color: #5e5e5e;
      }
    }
  }
  .buttonSeach {
    border: 1px solid #b7b6b6;
    border: none;
    color: #bababa;
    background: #0000000d;
    cursor: pointer;
  }
  @media (max-width: ${MOBILE}) {
    margin: 0;
    width: 100%;
  }
`