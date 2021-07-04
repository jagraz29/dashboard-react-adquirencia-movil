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
export const CardLast = styled.div`
  width: 55.7vw;
  //height: 7.5vw;
  height: auto;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  top: 1vw;
  margin-top: 1vw;
  margin-bottom: 3rem;
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
  max-height: 30rem;
  margin-bottom: 3rem;
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
  display: grid;
  align-items: center;
  grid-template-columns: 50% 50%;
`

export const LogGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  align-self: self-start;
  max-height: 24rem;
  max-width: 21rem;
  width: 100%;
  padding-top: 0.5rem;
  overflow: hidden auto;
`
export const LogGroupDivider = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 22rem;
  border-left: 1px solid #bfbfbf;
  padding: 0 1rem;
  .info {
    display: flex;
    flex-direction: column;
    max-width: 20rem;
    word-break: break-all;
    padding: 0.4rem 0;
    table {
      width: 100%;
      tr {
        padding: 0.4rem 0;
        display: flex;
        th {
          text-align: left;
          width: 173px;
        }
        td {
          width: 173px;
        }
        .estadoSuccess {
          color: #67c940;
          font-weight: bold;
        }
        .estadoFailed {
          color: red;
          font-weight: bold;
        }
      }
    }
  }
  .infoToSend {
    display: flex;
    flex-direction: column;
    max-width: 20rem;
    border-top: 1px solid #bfbfbf;
    h3 {
      margin: 1rem 0;
      font-size: 16px;
    }

    .infoComplete {
      overflow: scroll;
      max-height: 10rem;

      .boxInfo {
        display: grid;
        grid-template-columns: 1rem auto;
        div {
          .number {
            color: #80808070;
            margin: 0 0 0 1rem;
          }
          p {
            margin: 0 0 0 1rem;
          }
        }
      }
    }
  }
`
export const Log = styled.div`
  width: 28vw;
  overflow-x: hidden;
`
export const LogItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  :hover {
    background-color: #80808021;
  }
`
export const LogStatusSuccess = styled.h1`
  font-size: 1vw;
  color: #67c940;
`
export const LogStatusFailed = styled.h1`
  font-size: 1vw;
  color: red;
`
export const LogMetodo = styled.h2`
  padding: 4px 0px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.8vw;
  width: 15.8vw;
`
export const LogHora = styled.h2`
  font-size: 11px;
  font-weight: 600;
`

export const LoadingContent = styled.div`
display: flex;
width: 100vw;
position: absolute;
top: 10rem;
left: 7rem;
`
