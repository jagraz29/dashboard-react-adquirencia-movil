import styled from 'styled-components'
import { TABLET, MOBILE } from '../../styles/breakpoints'

export const Content = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-rows:3.5fr 2.5fr auto;
  overflow: hidden;

  @media (max-width: ${MOBILE}) {
    display: flex;
    flex-direction: column;

}
`
export const ContainerCobro = styled.div`
   display: grid;
   grid-template-rows: 20% 70%;
   align-content: center;
   justify-items: center;
   border-left: 1px dotted #d9d9d9;
   align-items: center;
   text-align: center;
    h1 {
      font-size: 1rem;
      margin: 0;
    }
    @media (max-width: ${MOBILE}) {
      grid-template-rows: auto;
      padding: 1rem 0;
      border-top: 1px dotted #d9d9d9;
      border-left: none;
  }
    
`

export const BoxLink = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  align-items: center;
  text-align: -webkit-center;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  cursor: pointer;
  img {
    padding: 0.5rem 0;
  }
  p {
    margin: 0;
    margin: 0;
    font-size: 14px;
  }
  @media (max-width: ${TABLET}) {
    width: 85%;

}
` 

export const ConteinerUser = styled.div`
   display: flex;
    flex-direction: row;
    align-self: center;
    .notImage{
      margin: 1rem;
      align-self: center;
      img {
        width: 75px;
        height: 75px;
        border-radius: 50%;
      }
    }
    @media (max-width: ${MOBILE}) {
      flex-direction: column;
      width: 100%;
  }
    
` 

export const ContentPay = styled.div`
  height: 100%;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  display: grid;
  grid-template-columns: auto 15rem;

  @media (max-width: ${TABLET}) {
    grid-template-columns: 2fr 1fr;
  }
  @media (max-width: ${MOBILE}) {
    display: flex;
    flex-direction: column;
  }
  
`

export const ContentTable = styled.div`
  overflow: hidden;
  overflow-x: auto;
  background-color: white;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  /* margin: 1rem 0; */
  @media (max-width: ${MOBILE}) {
    overflow-x: hidden;
    margin: 0;
  }
`

export const CardTableTitle = styled.h3`
    margin: 1rem;
`

export const NotUserImage = styled.div`
  width:75px;
  height:75px;
  margin: 1rem;
`
export const NameContent = styled.div`
  margin: 0;
  h1 {
    text-transform: capitalize;
    font-size: 1.5rem;
    padding: 0.5rem 0;
    margin: 0;
  }
  .typePerson {
    margin: 0;
    p {
      margin: 0;
    }
  }
  @media (max-width: ${MOBILE}) {
    padding: 1rem;
    padding-top: 0;
  }
`
export const CardTransaction= styled.div`
  background: white;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  height: 7rem;
  h4,h2{
    margin: 0.5rem 0;
  }
  a{
    color: #40A8E6;
    text-decoration: none;
    font-size: 15px;
  }

`

export const ContentItems = styled.div`
  /* width: 100%; */
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  margin: 1rem 0;
  @media (max-width: ${MOBILE}){
    grid-template-columns: 100%;
    ${CardTransaction}{
      margin: 0.5rem 0;
    }
  }
`
