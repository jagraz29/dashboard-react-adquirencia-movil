import styled from 'styled-components'
import { INTERMEDIATE, MOBILE, TABLET } from '../../styles/breakpoints'

export const ContainerIntegracion = styled.div`
  display: grid;
  grid-template-rows: 3rem auto;
  overflow: hidden;
`

export const Content = styled.div`
  margin: 1rem;
  overflow: hidden;
  overflow-x: auto;
  margin-top: 0;
  display: grid;
  grid-template-columns: 70%;
  @media (max-width: ${TABLET}) {
    grid-template-columns: 100%;
    margin: 0 2rem;
  }

`

export const ContentCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`

export const Card = styled.div`
  height: auto;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 1rem;
  width: 100%;
`

export const CardHeader = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CardHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;
`
export const CardIcon = styled.div`
  margin: 1rem;

`
export const CardTitleSubtitle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
`

export const CardContent1 = styled.div`
  display: ${(props) => props.theme.display};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid #d3d3d3;
  margin: 1rem;
  margin-top: 0;
`

export const CardContent2 = styled.div`
  display: ${(props) => props.theme.display};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid #d3d3d3;
  margin: 1rem;
  margin-top: 0;
`

export const CardContent3 = styled.div`
  display: ${(props) => props.theme.display};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid #d3d3d3;
  margin: 1rem;
  margin-top: 0;
`

export const CardContent4 = styled.div`
  display: ${(props) => props.theme.display};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid #d3d3d3;
  margin: 1rem;
  margin-top: 0;
  overflow: hidden;
`

export const CardTitle = styled.h3`
  margin: 0;
  color: #23272b;
  font-weight: 500;
`

export const CardSubTitle = styled.h5`
  color: #a9a9a9;
  margin: 0;
  margin-top: 0.5rem;
  font-weight: 400;
`

export const ContentInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0.5rem;
  @media (max-width: ${MOBILE}) {
    grid-template-columns: 100%;
  }
`
export const ContentInputTelefono = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0.5rem;
  @media (max-width: ${INTERMEDIATE}) {
    grid-template-columns: 100%;
  }
`
export const ContentInputTotal = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-bottom: 0.5rem;
`

export const CardContentButton = styled.div`
  padding-top: 1rem;
  display: ${(props) => props.theme.display};
  @media (max-width: ${MOBILE}) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
export const CardContentButtonSeguridad = styled.div`
  padding: 1rem;
  border-top: 1px solid #d3d3d3;
  display: ${(props) => props.theme.display};
`



export const ButtonCancel = styled.button`
  background: #ffffff;
  border: 1px solid #40a8e6;
  border-radius: 4px;
  color: #40a8e6;
  height: 2rem;
  padding: 0 1rem;
  width: 9rem;
  margin-left: 0.5rem;
  cursor: pointer;
  @media (max-width: ${MOBILE}) {
    width: 100%;
    margin-left: 0;
    margin-top: 0.5rem;
  }
`

export const ContentInputCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  input[type=number] {
    -moz-appearance:textfield;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 94%;
  justify-content: space-between;
`

export const ContentKeys = styled.div`
  background: #bdbdbd;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`
export const LabelKey = styled.h5`
  margin: 0.5rem 0;
  padding-left: 0.5rem;
  width: 100%;
  white-space: initial;
  word-break: break-all;
`
export const TitleKey = styled.h4`
  margin: 0.5rem 0;
`
export const ContentKeysItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const FileImage = styled.img`
  background: transparent;
  border: 7px solid #e4e4e4;
  overflow: hidden;
  border-radius: 5px;
  width: 5rem;
  height: 5rem;
`
export const ContentItemCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
`

export const ButtonImageLoad = styled.button`
  cursor: pointer;
  border: dashed 2px #d3d3d3;
  border-radius: 8px;
  background-color: white;
`

export const LoadImage = styled.div`
  width: 18.5vw;
  height: 6.5vw;
  background: transparent;
  border: 7px solid #e4e4e4;
  padding: 1vw;
  overflow: hidden;
  border-radius: 5px;
  margin-right: 0.5em;
  position: relative;
  margin: 1vw;
  @extend %tr;
`

export const ImageShow = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  display: block;
`

export const ClosePhoto = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 1;
  }
  @extend %tr;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  z-index: 2;
`