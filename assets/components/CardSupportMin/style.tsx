import styled from 'styled-components'

export const StyleCard = styled.div`
  /*position: absolute;*/
  width: 150px;
  height: 150px;

  background: #fefefe;
  padding: 10px;
  margin-bottom: 10px;

  border: 1px solid #dadada;
  box-sizing: border-box;
  box-shadow: 0px 0px 7px rgba(125, 125, 125, 0.2);
  border-radius: 4px;
  text-align: center;

  & p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    margin-top: 10px;
    /* grey */
    color: #5c5b5c;
  }
  .icon {
    width: 82px;
    height: 82px;
    display: block;
    position: relative;
    margin: 0 auto;

    /*Provando */
    background: center center transparent;
    background-repeat: no-repeat;
  }
  transition: all 0.4s;
  &.shadow-hover:hover {
    box-shadow: 0px 6px 10px 1px rgba(100, 100, 100, 0.15);
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
    margin-bottom: 10px;
  }
`
