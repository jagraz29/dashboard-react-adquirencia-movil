import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 1fr 3fr;
  row-gap: 1rem;
  column-gap: 1rem;
`

export const ContentPay = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  display: grid;
  grid-template-columns: auto 15rem;
  .userContent {
    display: flex;
    flex-direction: row;
    align-self: center;
    div {
      margin: 1rem;
      align-self: center;
      img {
        width: 75px;
        height: 75px;
        border-radius: 50%;
      }
    }
    div {
      margin: 1rem;
      h1 {
        font-size: 1.5rem;
        padding: 0.5rem 0;
        margin: 0;
      }
      div {
        margin: 0;
        p {
          margin: 0;
        }
        label {
        }
      }
    }
  }
  .cobroContent {
    border-left: 1px dotted #d9d9d9;
    h1 {
      font-size: 1rem;
      margin: 1rem;
    }
    div {
      text-align: -webkit-center;
      border: 1px solid #cfcfcf;
      border-radius: 4px;
      margin: 0 1rem 1rem;
      img {
        padding: 0.5rem 0;
      }
      p {
        margin: 0;
        margin: 0;
        padding-bottom: 1rem;
      }
    }
  }
`

export const ContentItems = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`

export const ContentTable = styled.div`
  width: 100%;
  height: 100%;
`

export const CardTableTitle = styled.h2`
  font-size: 1.7vw;
  line-height: 2vw;
  position: relative;
  color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1vw;
`

export const Ref = styled.span``
