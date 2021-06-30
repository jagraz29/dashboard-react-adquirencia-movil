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
