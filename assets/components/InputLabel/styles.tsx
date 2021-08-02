import styled from 'styled-components'
import { MOBILE } from '../../styles/breakpoints'

export const Label = styled.h4`
  margin: 0.5rem 0;
  font-weight: 500;
  @media (max-width: ${MOBILE}) {
    margin: 0;
  }
`
