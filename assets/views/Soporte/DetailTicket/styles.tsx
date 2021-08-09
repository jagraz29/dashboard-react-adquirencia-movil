import styled from 'styled-components'
import { INTERMEDIATE, MOBILE } from '../../../styles/breakpoints'

export const StyleDetail = styled.div`
  
`

export const DateContainer= styled.div`
  label{
    padding: 5px 12px 6px;
    border-radius: 8px;
    background-color: rgb(241, 241, 241);
    width: max-content;
    margin: 0 auto;
    font-size: 12px;
  }
`

export const MessageContainer = styled.div`
  display: flex;
  padding: .5rem;
  flex-direction: ${(props:any)=> props["data-typeUser"]?"row":"row-reverse"};

`
export const IconMessageContainer=styled.div`
    background: #989898;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    padding: 0.2rem;
    border-radius: 50%;
    color: white;
    font-size: 2rem;
    justify-content: center;
`
export const TextMessageContainer=styled.div`
  width: 100%;
  text-align: ${(props:any)=> props["data-typeUser"]?"end":"start"};
  padding: .5rem;
  p{
    background: #dbf5c6;
    margin: 0;
    padding: 0;
    width: fit-content;
    max-width: 70%;
    margin-left: ${(props:any)=> props["data-typeUser"]?"auto":0};
    padding: .5rem;
    border-radius: ${(props:any)=> props["data-typeUser"]?"1rem 0 1rem 1rem":"0 1rem 1rem 1rem"};
    @media (max-width: ${MOBILE}) {
      max-width: 100%;
    }
  }
  i{
    color: #989898;
  }
`
export const StyleContainerFild = styled.div`
  background-color: #f1f1f1;
  width: 100%;
  position: relative;
  border-top: 1px #cccccc solid;

  .button-field {
    width: 40px;
  }

  .ant-btn {
    width: 140px;
    height: 48px;
    border-radius: 0 4px 4px 0;

    &:hover {
      box-shadow: none !important;
    }
  }

  .drop-photo {
    width: 200px;
    height: 150px;

    border: 2px dashed #d3d3d3;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    &.disabled {
      cursor: not-allowed;
      background: #ececec;
      box-shadow: none;
      border: 2px dashed #9e9d9d;
    }
  }
  .drop-photo-icon {
    width: 66%;
    height: 126px;
    font-size: 12px;
    border: 0px;
    text-align: center;
    span i {
      color: #0e90d2;
    }
  }

  .drop-photo-loaded {
    .container-photo {
      color: #0e90d2;
      margin-left: 26px;
      .photo {
        width: 113px;
        height: 113px;
        padding: 0;
      }
      .close-photo {
        padding: 10px 5px;
        cursor: pointer;
        i.fa {
          margin-right: 7px;
          font-size: 0.9em;
        }
      }
    }
  }

  .ticket-block {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    color: #ffffff;
    background-color: rgba(90, 90, 90, 0.8);
  }
`

export const ContainerDetailTicket = styled.div`
  display: grid;
  grid-template-rows: 3rem auto;
  overflow: hidden;
`

export const Content = styled.div`
  margin: 1rem 2rem;

`

export const CardTableTitle = styled.h2`
  border-bottom: 2px solid #d3d3d3;
  color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const ContentSearchTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardTableSubTitle = styled.div`
  color: #adadad;
  font-size: 16px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ContentItems = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: ${INTERMEDIATE}) {
    grid-template-columns: 100%;
  }
`

export const CardTrasactionOk = styled.div`
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
`

export const CardTransactionTitle = styled.h3`
  margin: 0;
  margin-bottom: 1rem;
`

export const CardTransactionTitleAction = styled.h3`
  margin: 0;
  border-top: 1px solid rgb(211, 211, 211);
  padding-top: 1rem;
`
export const CardTransactionCount = styled.span`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
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

export const CardPending = styled.div`
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1rem;
`

export const ContentInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

export const TitleLabel = styled.h3`

`
export const TitleSoporte = styled.div`
  margin-bottom: 1rem;
`
export const TitleDescription = styled.h3`
    margin: 1rem;
    margin-bottom: 1rem;
    i{
      color: #ADADAD;
      font-Weight:initial;
      font-size: 13px;
    }
`

export const ContainerResponseChat = styled.div`
  padding: 0px;
  height: 350px;
  overflow-y:auto;
  border-top: 1px solid #ADADAD;
  padding-top: 1rem;
`
export const FormChat = styled.form`
  width: 100%;
`
export const ContainerField = styled.form`
  display: flex;
  justify-content:start;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  padding: 20px 30px;
  background-color: #d8d8d8;
  .btn-icon-fil {
    font-size: 1.5em;
    color: #40a8e6;
    margin-right: -40px;
    z-index: 1;
    &[disabled] {
      color: rgba(0, 0, 0, 0.25);
    }
  }
  button{
    width: 8rem !important;
    height: 2.5rem;
    padding: .5rem 1.5rem;
    background-color: #40a8e6;
    color: #fff;
    cursor: pointer;
    border: 0;
    min-height: 35px;
    line-height: 1rem; 
    border-radius: 8px !important;
    font-size: 15px;
    i{
      margin-right: 0.5rem;
    }
  }

`
export const ContainerTextarea = styled.div`
    width: 100%;
    display: flex;
    padding: 0;
    textarea {
      height: auto;
      min-height: 40px;
      border-radius: 21px;
      border: 0px ;
      padding-left: 50px;
      width: 85%;
      margin-right: 0.5rem;
    }
`
export const ContainerFile = styled.div`
  height: 0;
  width: 100%;
  position: relative;
  overflow-y: hidden;
  transition: 0.5s all;
  opacity: 0;
  padding: 0;

  &.open {
    display: block;
    height: 270px;
    opacity: 1;
    padding: 20px 0;
  }
`