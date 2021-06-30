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
  flex-direction: row;
  width: 79vw;
`

export const CardGroup = styled.div``

export const Card = styled.div`
  width: 55.7vw;
  //height: 7.5vw;
  height: auto;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  top: 1vw;
  margin-top: 1vw;
`

export const Card2 = styled.div`
  width: 21.7vw;
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
  left: 53vw;
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
  height: 4vw;
  margin: 0vw;
  display: flex;
  border-bottom: 1px solid #d3d3d3;
  justify-content: center;
  align-items: center;
`

export const CardTitle = styled.h2`
  width: 30vw;
  font-size: 1.2vw;
  line-height: 2vw;
  margin: 0.4vw 0 0 0.8vw;
  color: #23272b;
`

export const CardSubTitle = styled.h3`
  width: 40vw;
  font-size: 0.8vw;
  line-height: 0.3vw;
  margin: 0 0 0 0.8vw;
  color: #bdbdbd;
`

export const ContentItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.7vw;
`

export const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 12vw;
`

export const ItemGroup2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 24vw;
`

export const ItemTitle = styled.h2`
  font-size: 0.8vw;
`

export const ItemValue = styled.h3`
  font-size: 1vw;
`

export const ButtonExportar = styled.button`
  font-size: 1vw;
  background: white;
  border: 1px solid #58d3f7;
  box-sizing: border-box;
  border-radius: 4px;
  width: 19.4vw;
  height: 2.1vw;
  top: 5vw;
  color: #bdbdbd;
  justify-content: center;
  align-items: center;
  display: flex;

  :hover,
  :focus {
    background: hsl(200, 90%, 45%);
    color: white;
  }
`

export const ButtonTransacciones = styled.button`
  font-size: 1vw;
  background: white;
  border: 0px solid;
  box-sizing: border-box;
  border-radius: 4px;
  width: 19.4vw;
  height: 2.1vw;
  top: 5vw;
  color: #58d3f7;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;

  :hover,
  :focus {
    color: #bdbdbd;
  }
`

export const ButtonImg = styled.img``

export const CardContentButton = styled.div`
  height: 2vw;
  margin: 1vw;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: row;
`

export const ContentLog = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`

export const LogGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
export const Log = styled.div`
  overflow: scroll;
  width: 28vw;
  height: 20vw;
`
export const LogItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
export const LogStatus = styled.h1`
  font-size: 1vw;
  color: green;
`
export const LogMetodo = styled.h2`
  font-size: 0.8vw;
  width: 15.8vw;
`
export const LogHora = styled.h2`
  font-size: 1vw;
`
