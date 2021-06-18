import styled from 'styled-components'

export const Content = styled.div`
  position: absolute;
  margin: 7vw 60.1vw 40.2vw 19.4vw;
`

export const ContentCard = styled.div`
  top: 1vw;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 79vw;
`

export const Card = styled.div`
  width: 49.7vw;
  //height: 7.5vw;
  height: auto;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  top: 1vw;
  margin-top: 1vw;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  flex-direction: column;
  border-bottom: 1px solid #d3d3d3;
  height: 5vw;
`

export const CardIcon = styled.div`
  position: relative;
  left: 47vw;
  top: -1.4vw;
`

export const CardContent1 = styled.div`
  height: auto;
  display: ${(props) => props.theme.display};
  margin: 1vw;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const CardContent2 = styled.div`
  height: auto;
  display: ${(props) => props.theme.display};
  margin: 1vw;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const CardContent3 = styled.div`
  height: auto;
  display: ${(props) => props.theme.display};
  margin: 1vw;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const CardTitle = styled.span`
  width: 30vw;
  font-weight: normal;
  font-size: 1.2vw;
  line-height: 2vw;
  margin: 0.4vw 0 0 0.8vw;
  color: #23272b;
`

export const CardSubTitle = styled.div`
  width: 40vw;
  font-weight: normal;
  font-size: 0.8vw;
  line-height: 1vw;
  margin: 0 0 0 0.8vw;
  color: #bdbdbd;
`

export const ContentInput = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  display: flex;
  margin-bottom: 1vw;
`

export const CardContentButton = styled.div`
  height: 2vw;
  margin: 1vw;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: row;
`

export const CardButton = styled.div`
  height: 3.4vw;
  margin: 1vw;
`

export const ButtonOk = styled.button`
  font-size: 0.8vw;
  background: #58d3f7;
  border: 1px solid #58d3f7;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 4px;
  width: 11vw;
  height: 1.9vw;
  top: 5vw;
  color: #ffffff;
`

export const ButtonCancel = styled.button`
  font-size: 0.8vw;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  width: 11vw;
  height: 1.9vw;
  top: 5vw;
  color: #58d3f7;
  margin-left: 1vw;
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
  font-size: 1vw;
  padding: 5px;
  background: #fafafa;
  border: 1px solid #bdbdbd;
  margin: 1vw 0;
  border-radius: 3px;
  ::placeholder {
    color: #bdbdbd;
  }
  width: ${(props) => props.width};
`

export const DropLoaded = styled.div`
  line-height: 35px;
  border-radius: 4px;
  width: 20vw;
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
    padding-left: 0.75em;
  }

  .close {
    flex: 0 0 30px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
  }
`

export const LoadImage = styled.div`
  width: 5.5vw;
  height: 5.5vw;
  background: transparent;
  border: 1px solid #e4e4e4;
  padding: 0.2em;
  overflow: hidden;
  border-radius: 5px;
  margin-right: 0.5em;
  position: relative;

  margin: 1vw;
  @extend %tr;
`

export const PhotoDropLoaded = styled.div`
  display: flex;
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
  border: dashed 0.3vw #d3d3d3;
  border-radius: 1vw;
  width: 6vw;
  height: 6vw;
  background-color: white;
  margin: 1vw 0;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 26.3vw;
`

export const DropDocArea = styled.div`
  border-radius: 5px;
  width: 22.3vw;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: 1px solid #e4e4e4;
  display: flex;
  color: #40a8e6;
  @extend %tr;
  transform: scale(1);

  p {
    font-size: 0.7vw;
    font-weight: bolder;
    margin-left: 1vw;
  }
`
