import styled from 'styled-components'

export const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #6d6d6d;
  border-radius: 50%;
  width: 1vw;
  height: 1vw;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
