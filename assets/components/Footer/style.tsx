import styled from 'styled-components'
import { MOBILE } from '../../styles/breakpoints'

export const ContainerIconsText = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  h6{
    margin: 0 0 0 0.8rem;
  }
`
  
export const ContainerLogoEpayco = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem 0 0;
`

export const Wrapper = styled.footer`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  color: #343a40;
  text-align: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  border-top: 1px solid #e0e0e0;
  @media (max-width: ${MOBILE}) {
    width: auto;
    flex-direction: column;
    align-items: center;
    ${ContainerIconsText}{
      flex-direction: column;
      height: 100%;
      margin-top: 0.2rem;
      }
      ${ContainerLogoEpayco}{
        height: 100%;
      }
    }

`
