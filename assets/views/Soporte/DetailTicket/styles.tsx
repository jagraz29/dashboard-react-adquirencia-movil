import styled from 'styled-components'

export const StyleDetail = styled.div`
  /*position: absolute;*/
  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
  }
  .sub-title,
  .title .sub-title {
    display: block;
    padding-bottom: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;

    color: #000000;
  }

  .info-title,
  .title .info-title {
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;

    /* grey */
    color: #848484;
  }
  .ant-avatar > img {
    object-fit: contain;
    background-color: #f1f1f1;
  }

  &.container-message {
    .range-date {
      padding: 5px 12px 6px;
      border-radius: 8px;
      background-color: #f1f1f1;
      margin: 0 auto;
    }
    .messeger {
      max-width: 421px;
      padding: 10px 20px 10px 20px;

      border-radius: 5px;
      &.messeger-cliente {
        background-color: #dbf5c6;
      }
      &.messeger-soport {
        background-color: rgba(64, 168, 230, 0.2);
      }
    }
    .name {
      display: block;
    }
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

  .container-field > * {
    margin: auto 5px;
  }

  .container-field {
    width: 100%;
    //background-color: #00b8f5;
    padding: 10px 20px 30px 20px;
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
    .component-textarea {
      width: inherit;

      textarea {
        height: auto !important;
        min-height: 40px !important;
        border-radius: 21px !important;
        border: 0px !important;
        padding-left: 50px !important;
      }
    }
  }

  .container-file {
    height: 0;
    width: 100%;
    position: relative;
    //background-color: cornflowerblue;
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

export const Content = styled.div`
  position: absolute;
  margin: 7vw 60.1vw 40.2vw 19.4vw;
`

export const ContentTable = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 79vw;
  top: 2vw;
  margin-top: 400px;
`

export const CardTableTitle = styled.h2`
  font-size: 1.7vw;
  line-height: 2vw;

  top: 1vw;
  padding-bottom: 1vw;
  margin-bottom: 1vw;
  left: 1.2vw;
  border-bottom: 2px solid #d3d3d3;

  position: relative;
  color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const ContentSearchTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0vw 1vw 0vw 1vw;
`

export const CardTableSubTitle = styled.div`
  color: #adadad;
  position: absolute;
  font-size: 16px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: 1vw;
  padding-bottom: 1vw;
  margin-bottom: 1vw;
  left: 1.2vw;
`

export const ContentItems = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 79vw;
  top: 2vw;
  margin-top: 10px;
`

export const CardTrasactionOk = styled.div`
  position: absolute;
  width: 58%;
  height: 430px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  top: 5vw;
  left: 0vw;
  margin-top: -35px;
`

export const CardTransactionTitle = styled.h2`
  margin-left: 1vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 1vw;
`

export const CardTransactionCount = styled.span`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 1.6vw;
  line-height: 1.5vw;
  margin: 1vw;
  position: relative;
  color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const CardTransactionDetails = styled.span`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 1vw;
  line-height: 1vw;
  margin: 1vw;
  position: relative;
  color: #40a8e6;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const CardPending = styled.div`
  position: absolute;
  width: 40%;
  height: 430px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  top: 5vw;
  right: 0vw;
  margin-top: -35px;
`

export const ContentInput = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  display: flex;
`

export const ContentInputCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  margin-left: 2vw;
  margin-right: 2vw;
  width: 30%;
  max-width: 30%;
`

export const LabelKey = styled.strong`
  font-size: 1vw;
  display: block;
  padding-bottom: 10px;
  font-style: normal;
  font-weight: normal;
  line-height: 21px;
  color: rgb(0, 0, 0);
`
export const TitleKey = styled.span`
  font-size: 1vw;
  display: block;
  padding-bottom: 5px;
  font-weight: normal;
  line-height: 21px;
  color: rgb(132, 132, 132);
`

export const TitleLabel = styled.h3`
  font-size: 1vw;
  top: 0vw;
`
