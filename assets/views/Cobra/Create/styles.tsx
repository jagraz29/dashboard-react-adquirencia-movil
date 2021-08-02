import styled from 'styled-components'
import {  MOBILE, TABLET } from '../../../styles/breakpoints'

export const ContainerPrincipal = styled.div`
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
    margin: 0 3rem;
  }
  @media (max-width: ${MOBILE}) {
    margin: 0 1rem;
  }
`
export const ContentCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`
export const ContainerTitleCustom = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${MOBILE}) {
    flex-direction: column;
    align-items: start;
    margin-bottom: 0.5rem;

  }
`

export const Card = styled.div`
  height: auto;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  margin-top: 1rem;
`

export const CardHeaderLink = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0.5rem;
`
export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
`
export const CardIcon = styled.div`
  margin: 1rem;
  @media (max-width: ${MOBILE}) {
    flex-direction: column;
  }
`

export const CardTitleSubtitle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
` 
export const CardContent1 = styled.div`
  display: ${(props) => props.theme.display};
  flex-direction: column;
  padding: 0.5rem 1rem;
  border-top: 1px solid #d3d3d3;
`
export const CardContent2 = styled.div`
  height: auto;
  display: ${(props) => props.theme.display};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const CardContent3 = styled.div`
  height: auto;
  display: ${(props) => props.theme.display};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`
export const ContainerPhotoLoaded = styled.div`
  display: flex;
  @media (max-width: ${MOBILE}) {
    flex-direction: column;
  }
`
export const CardTitle = styled.h3`
  font-weight: normal;
  color: #23272b;
  margin: 0;
`

export const CardSubTitle = styled.h4`
  font-weight: normal;
  color: #bdbdbd;
  margin: 0;
`

export const ContentInput = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  display: flex;
`
export const ContentCustomCollection = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  display: flex;
  padding: 0 1rem;
`
export const CardContentButton = styled.div`
  display: flex;
  margin: 1rem 0;
  @media (max-width: ${MOBILE}) {
    flex-direction: column;
    width: 100%;
  }
`

export const CardButton = styled.div`

`

export const ButtonOk = styled.button`
  background: #58d3f7;
  border: 1px solid #58d3f7;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 4px;
  color: #ffffff;
  height: 2rem;
  width: 10rem;
  text-align: -webkit-center;
  @media (max-width: ${MOBILE}) {
    width: 100%;
  }
`

export const ButtonCancel = styled.button`
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  color: #58d3f7;
  height: 2rem;
  width: 8rem;
  margin-left: 1rem;
  @media (max-width: ${MOBILE}) {
    margin: 0;
    margin-top: 0.5rem;
    width: 100%;
  }
`

export const ContentInputCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`

export const ContentInputImageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Input = styled.input`
  padding: 5px;
  background: #fafafa;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  ::placeholder {
    color: #bdbdbd;
  }
  width: ${(props) => props.width};
`

export const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #6d6d6d;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
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

export const DropLoaded = styled.div`
  line-height: 35px;
  border-radius: 4px;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #e4e4e4;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1 1 auto;
    margin-bottom: 0;
    padding-left: 0.75rem;
  }

  .close {
    flex: 0 0 30px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
  }
`

export const LoadImage = styled.div`
  width: 5rem;
  height: 5rem;
  background: transparent;
  border: 1px solid #e4e4e4;
  padding: 0.2rem;
  overflow: hidden;
  border-radius: 5px;
  margin-right: 0.5rem;
  position: relative;
  margin: 0.5rem;
  @extend %tr;
`

export const PhotoDropLoaded = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${MOBILE}) {
    flex-direction: column;
  }

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

export const ButtonImageLoad = styled.button`
  cursor: pointer;
  border: dashed 5px #d3d3d3;
  border-radius: 10px;
  width: 5rem;
  height: 5rem;
  background-color: white;
  margin: 1rem 0;
  @media (max-width: ${MOBILE}) {
    margin: 1rem;
  }
`

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  @media (max-width: ${MOBILE}) {
    grid-template-columns:  1fr 1fr;
    width: 100%;
    grid-column-gap: 0;
  }
`
export const InputGroupTax = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  @media (max-width: ${MOBILE}) {
    grid-template-columns:  100%;
    width: 100%;
    grid-column-gap: 0;
  }
`
export const DropDocArea = styled.div`
  border-radius: 5px;
  width: 17rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: 1px solid #e4e4e4;
  display: flex;
  color: #40a8e6;
  @extend %tr;
  transform: scale(1);

  p {
    font-weight: bolder;
    margin: 0.5rem;
    font-size: 14px;
  }
`
export const   Labeltax= styled.small`
  
`
export const  SubtitleDropLoaded= styled.small`
   font-size:12px;
   margin-left: 0.5rem;
   color: #d3d3d3;
   @media (max-width: ${MOBILE}) {
    margin: 0;
  }
`