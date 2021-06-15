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
  flex-direction: column;
  border-bottom: 1px solid #d3d3d3;
  height: 3.5vw;
`

export const CardIcon = styled.div`
  position: relative;
  left: 47vw;
  top: -1.4vw;
  width: 1vw;
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

export const CardContent4 = styled.div`
  height: auto;
  display: ${(props) => props.theme.display};
  margin: 1vw;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const CardTitle = styled.span`
  width: 30vw;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2vw;
  line-height: 2vw;
  margin: 0.4vw 0 0 0.8vw;
  color: #23272b;
`

export const CardSubTitle = styled.div`
  width: 40vw;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8vw;
  line-height: 0.3vw;
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
  display: ${(props) => props.theme.display};
`

export const CardButton = styled.div`
  height: 3.4vw;
  margin: 1vw;
`

export const ButtonOk = styled.button`
  font-size: 0.8vw;
  background: #58d3f7;
  border: 1px solid #58d3f7;
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

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 23.3vw;
`

export const ContentKeys = styled.div`
  width: 47.6vw;
  height: 2.6vw;
  background: #bdbdbd;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  padding: 0.7vw;
`
export const LabelKey = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9vw;
  margin-left: 0.5vw;
`
export const TitleKey = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1vw;
  top: 1vw;
`
export const ContentKeysItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 5.7vw;
`

export const FileImage = styled.img`
  border: 8px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 10px;
  width: 18vw;
  padding: 1vw;
`
export const ContentItemCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
