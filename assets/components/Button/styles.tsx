import styled from 'styled-components'

export const Button = styled.button`
  font-size: 0.8vw;
  background: #58d3f7;
  border: 1px solid #58d3f7;
  box-sizing: border-box;
  border-radius: 4px;
  width: 11vw;
  height: 1.9vw;
  top: 5vw;
  color: #ffffff;
  justify-content: center;
  align-items: center;

  :hover,
  :focus {
    background: hsl(200, 90%, 45%);
  }
`

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 1vw;
  height: 1vw;
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
