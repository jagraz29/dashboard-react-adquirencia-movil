import styled from 'styled-components'
import { INTERMEDIATE, MOBILE } from '../../../styles/breakpoints'

export const ContainerPrincipal = styled.div`
   display: grid;
  grid-template-rows: 3rem auto;
  overflow: hidden;
`
export const Content = styled.div`
  margin: 1rem;
`

export const ContentTable = styled.div`
  height: auto;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1rem;
`

export const CardTableTitle = styled.h4`
  border-bottom: 2px solid #d3d3d3;
  margin: 0;
  padding-bottom: 1rem;
`
export const ContentSearchTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardTableSubTitle = styled.h4`
  color: #adadad;
  margin: 1rem 0;
  font-weight: 400;
`

export const ContentItems = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: ${INTERMEDIATE}) {
    grid-template-columns: 100%;
  }
`

export const CardInfoCollect = styled.div`
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1rem;
  
`

export const CarTitle = styled.div`
  display: flex;
  border-bottom: 1px solid #d3d3d3;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 0.5rem;
`

export const CardContentInfo = styled.div`
  margin-top: 1rem;
`
export const CardTitleConten = styled.span`
  justify-content: center;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  line-height: 24px;
  color: #000000;
`

export const ButtonsEdit = styled.button`
  border: 1px solid #40A8E6;;
  border-radius: 4px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 8rem;
  height: 2rem;
  background: white;
  color: #40A8E6;
  :hover {
    background: #0b95da;
    color: white;
  }
`

export const CardTransactionCount = styled.span`
  font-family: Segoe UI;
  font-style: normal;
  color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const CardTransactionDetails = styled.span`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  color: #40a8e6;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const CardAction = styled.div`
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1rem;
  
`

export const ContentInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: ${MOBILE}) {
    grid-template-columns: 100%;
  }

`

export const ContentInputCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
`

export const LabelKey = styled.strong`
  display: block;
  padding-bottom: 10px;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  color: rgb(0, 0, 0);
`
export const TitleKey = styled.span`
  display: block;
  padding-bottom: 5px;
  font-weight: normal;
  line-height: 21px;
  color: rgb(132, 132, 132);
`

export const ContainerButtonsActions = styled.div`

`

export const ButtonsActions = styled.button`
  border: 1px solid #40A8E6;;
  border-radius: 4px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 2rem;
  background: white;
  color: #40A8E6;
  :hover {
    background: #0b95da;
    color: white;
  }
`

export const CardContentButtonAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`

export const ContentPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  display: -webkit-box;
  -webkit-box-pack: center;
`
