import styled from 'styled-components'
import { INTERMEDIATE, MOBILE } from '../../../styles/breakpoints'

export const ContainerTransactionDetail = styled.div`
  display: grid;
  grid-template-rows: 3rem auto;
  overflow: hidden;
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 70% auto;
  margin: 0 1rem;
  overflow: hidden;
  @media (max-width: ${INTERMEDIATE}) {
    grid-template-columns: 100%;

  }
`
export const ContentCardDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentCardActions = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
  @media (max-width: ${INTERMEDIATE}) {
    margin-left: 0;
  }
`


export const Card = styled.div`
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 1rem;
  

`
export const CardLast = styled.div`
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 1rem 0;

`


export const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardHeaderAcciones = styled.div`
  flex-direction: column;
  display: flex;

`

export const CardIcon = styled.div`
  margin: 1rem;
`

export const CardContent1 = styled.div`
  display: ${(props) => props.theme.display}; 
  padding: 1rem;
  border-top: 1px solid #d3d3d3;
  
  /* max-height:${(props:any) => props["data-nuevo"]?"300px": "0"};
  -webkit-transition: max-height 1s; 
  -moz-transition: max-height 1s; 
  -ms-transition: max-height 1s; 
  -o-transition: max-height 1s; 
  transition: max-height 1s; 
 */
  /* transform: ${(props:any) => props["data-nuevo"]?"scaleY(0)": "scaleY(1)"};    
  transform-origin: top;
  transition: transform 0.26s ease; */


  @media (max-width: ${INTERMEDIATE}) {
    overflow: hidden;
    overflow-x: auto;
  }
`

export const CardContent2 = styled.div`
  height: auto;
  display: ${(props) => props.theme.display};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-height: 35rem;
  border-top: 1px solid #d3d3d3;
  @media (max-width: ${MOBILE}) {
    max-height: none;
  }
`

export const CardContent3 = styled.div`
  display: flex;
  border-bottom: 1px solid #d3d3d3;
  justify-content: center;
  align-items: center;
  margin: 1rem;  
  margin-bottom: 0;
`


export const CardTitle = styled.h4`
  color: #23272b;
  margin: 1rem;
`

export const CardSubTitle = styled.p`
  margin: 0 1rem;
  color: #bdbdbd;
`

export const ContentItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  border-bottom: 1px dotted #d6d6d6;
  padding: 0.5rem 0;
  @media (max-width: ${MOBILE}) {
    grid-template-columns: 100%;
  }
`

export const ContentItemUrl = styled.div`
  display: flex;
  border-bottom: 1px dotted #d6d6d6;
  padding: 0.5rem 0;

`

export const ContentItemDescription = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  border-bottom: 1px dotted #d6d6d6;
  padding: 0.5rem 0;
  @media (max-width: ${MOBILE}) {
    grid-template-columns: 100%;
  }
`

export const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  span{
    font-weight: bold;
    font-size: 0.8rem;
  }
`

export const ItemGroup2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`
export const ItemValueUrl = styled.h5`
  margin: 0;
  overflow-wrap: break-word;
  width: 100%;
  white-space: initial;
`
export const ItemTitle = styled.h5`
  font-weight: 600;
  margin: 0;
`

export const ItemValue = styled.h5`
  margin: 0;
`

export const ButtonExportar = styled.button`
  background: white;
  border: 1px solid #58d3f7;
  box-sizing: border-box;
  border-radius: 4px;
  color: #bdbdbd;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
  :hover,
  :focus {
    background: hsl(200, 90%, 45%);
    color: white;
  }
`

export const ButtonTransacciones = styled.button`
  background: white;
  border: 0px solid;
  box-sizing: border-box;
  border-radius: 4px;
  color: #58d3f7;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  padding: 0.5rem;
  width: 100%;
  font-size: 16px;
  margin: 0.5rem 0;
  :hover,
  :focus {
    color: #bdbdbd;
  }
`

export const CardContentButton = styled.div`
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
  @media (max-width: ${MOBILE}) {
    grid-template-columns: 100%;
  }
`

export const LogGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-self: self-start;
  max-height: 27rem;
  width: 100%;
  height: 100%;
  padding-top: 0.5rem;
  overflow: hidden ;
  overflow-y: auto;
  align-items: start;
`

export const LogGroupDivider = styled.div`
  display: flex;
  flex-flow: column;
  border-left: 1px solid #bfbfbf;
  padding: 0 0.5rem;

  @media (max-width: ${MOBILE}) {
    border-left: none;
    border-top: 1px solid #bfbfbf;
  }
  
`
export const InfoConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-all;
  padding: 0.2rem 0;
  table {
    width: 100%;
    tr {
      display: grid;
      grid-template-columns: 1fr 1fr;
      font-size: 15px;
      th {
        text-align: left;
      }
      td {
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

`
export const InfoSent = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #bfbfbf;
  margin-bottom: 0.5rem;
  h3 {
    margin: 1rem 0;
    font-size: 15px;
  }

`
export const InfoSentComplete = styled.div`
  overflow: scroll;
  max-height: 6rem;
  label{
    margin-bottom: 1rem;
    font-size: 14px;
  }

  .boxInfo {
    display: grid;
    grid-template-columns: 1rem auto;
    div {
      .number {
        color: #80808070;
        margin: 0 0 0 1rem;
      }
      p {
        margin: 0 0 0 1.5rem;
      }
    }
  }
  @media (max-width: ${MOBILE}) {
    max-height: 10rem;
  }
`

export const Log = styled.div`
  width: 100%;
  overflow-x: hidden;
  margin: 0 1rem;
  label{
    margin-bottom: 1rem;
    font-size: 14px;
  }
  @media (max-width: ${MOBILE}) {
    overflow-y: auto;
    max-height: 25rem;
  }
`
export const LogItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  margin: 0.5rem 0;
  :hover {
    background-color: #80808021;
  }
`
export const LogStatusSuccess = styled.h5`
  margin: 0;
  color: #67c940;
`
export const LogStatusFailed = styled.h5`
  margin: 0;
  color: red;
`
export const LogMetodo = styled.h5`
  padding: 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  font-weight: 400;
`
export const LogHora = styled.h5`
  margin: 0;
  font-weight: 400;
  min-width: 5rem;
`

