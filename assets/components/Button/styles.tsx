import styled from 'styled-components'
import { MOBILE } from '../../styles/breakpoints'

export const Button = styled.button`
  background: #40a8e6;
  border: 1px solid #40a8e6;
  border-radius: 4px;
  color: #ffffff;
  height: 2rem;
  padding: 0 1rem;
  width: 10rem;
  cursor: pointer;
  :hover {
    background: #2e98d6;
  }
  @media (max-width: ${MOBILE}) {
      width: 100%;
  }
`

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border-left-color: white;
  margin: auto;

  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

export const ButtonText = styled.span`
  color: #ffffff;
`
