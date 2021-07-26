import styled from 'styled-components'
import { INTERMEDIATE, MOBILE } from '../../styles/breakpoints'

export const ContainerSoporte = styled.div`
    display: grid;
  grid-template-rows: 3rem auto;
  overflow: hidden;
`

export const ContentSoporte = styled.div`
  display: flex;
  margin: 1rem;
  overflow: hidden;
  overflow-x: auto;
  flex-direction: column;
  @media (max-width: ${INTERMEDIATE}) {
    flex-direction: column;
    overflow: hidden;
  }
`
export const TitleSoporte = styled.div`
  margin-bottom: 2rem;
  p{
    color: #5C5B5C;
   }

`
export const OptionsSoporte = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  @media (max-width: ${INTERMEDIATE}) {
    flex-direction: column;
  }
`
export const ContainerCardOption = styled.div`
  

`
export const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  @media (max-width: ${MOBILE}) {
    padding: 1rem;
  }
`

export const ContentTable = styled.div`
  height: auto;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: scroll;
  @media (max-width: ${MOBILE}) {
    overflow-x: hidden;
  }
`

export const CardTableTitle = styled.h3`
  margin: 1rem;
`

