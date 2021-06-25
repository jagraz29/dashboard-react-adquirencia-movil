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
