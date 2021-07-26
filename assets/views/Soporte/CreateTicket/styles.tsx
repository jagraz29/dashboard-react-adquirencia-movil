import styled from 'styled-components'
import { INTERMEDIATE, MOBILE, TABLET } from '../../../styles/breakpoints'

export const ContainerCreateTicket = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardIcon = styled.div`
  margin: 1rem;
`

export const CardContent1 = styled.div`
  height: auto;
  display: ${(props) => props.theme.display};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const CardTitle = styled.h3`
    margin: 1rem;
`
export const SubtitleHeader = styled.div`
  padding: 1rem;
  border-top: 1px solid;
  color: #ADADAD;

`
export const CardSubTitle = styled.div`
  color: #a9a9a9;
  margin: 0;
  margin-top: 0.5rem;
  font-weight: 400;
`

export const ContentInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 1rem;
  @media (max-width: ${INTERMEDIATE}) {
    grid-template-columns: 100%;
  }
`

export const CardContentButton = styled.div`
  padding-top: 1rem;
  display: flex;
  @media (max-width: ${MOBILE}) {
    flex-direction: column;
    width: 100%;
  }
`

export const ButtonOk = styled.button`
  background: #40a8e6;
  border: 1px solid#40a8e6;
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
  justify-content: center;
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
  width: 7rem;
  height: 7rem;
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
  border-radius: 8px;
  width: 7rem;
  height: 7rem;
  background-color: white;
  margin: 1rem 0;
  @media (max-width: ${MOBILE}) {
    margin: 1rem;
  }
`

export const TitleDescription = styled.h4`
    margin: 0.5rem 0;
    font-weight: 500;
    i{
      color: #ADADAD;
      font-Weight:initial;
      font-size: 13px;
    }
`
export const ContainerPhotoLoaded = styled.div`
  display: flex;
  @media (max-width: ${MOBILE}) {
    flex-direction: column;
  }
`