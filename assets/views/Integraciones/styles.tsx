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
