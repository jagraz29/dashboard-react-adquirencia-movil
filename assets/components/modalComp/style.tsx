import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { TABLET } from '../../styles/breakpoints'

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 100%;
  outline: 0;
`

const breatheAnimation = keyframes`
    0% {
        transform: perspective(400px) rotateY(90deg);
        opacity: 0;
    }
    40% {
        transform: perspective(400px) rotateY(-10deg);
    }
    70% {
        transform: perspective(400px) rotateY(10deg);
    }
    100% {
        transform: perspective(400px) rotateY(0deg);
        opacity: 1;
    }
`

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;

  border-radius: 4px;
  max-width: 600px;
  margin: auto;
  max-height: calc(100vh - 30px);
  overflow: hidden;

  animation-duration: 1s;
  animation-fill-mode: both;
  backface-visibility: visible !important;
  animation-name: ${breatheAnimation};
  @media (max-width: ${TABLET}) {
    overflow-y: auto;
  }
` 
export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`
export const HeaderText = styled.div`
  border-bottom: 1px solid #e4e4e4;
  padding: 0.5em 40px 0.5em 1em;
  position: relative;
  width: 100%;
  flex: 0 0 auto;
  font-weight: bold;
`
export const CloseButton = styled.button`
  cursor: pointer;
  padding: 0.3em;
  position: absolute;
  right: 2px;
  top: 2px;
  width: 40px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  border: none;
  background: white;
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.1);
  }
`
export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`
