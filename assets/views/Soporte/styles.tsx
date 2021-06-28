import styled from 'styled-components'

export const StyleContainer = styled.div`
  /*position: absolute;*/
  max-width: 1024px;
  box-sizing: content-box;
  display: block;

  .option-support {
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 40px;
    margin-bottom: -230px;
    width: 75vw;
    display: flex;
    justify-content: space-between;
    padding: 2vw;
    align-items: center;
  }
  .card-soport-table {
    margin-bottom: 40px;
    .card-soport-body {
      padding-top: 5px;
    }
  }
  @media (max-width: 1024px) {
    padding-left: 0px;
  }
`

export const ContentTable = styled.div`
  position: relative;
  width: 79vw;
  height: auto;
  margin-top: 5vw;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  top: 14.1vw;
  left: 0vw;
  overflow: scroll;
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
