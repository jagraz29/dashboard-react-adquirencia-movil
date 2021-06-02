import styled from 'styled-components'

export const Content = styled.div`
  position: absolute;
  margin: 5vw 60.1vw 40.2vw 19.4vw;
`

export const ContentPay = styled.div`
  position: relative;
  width: 79vw;
  height: ${(height) => (height ? '11.5vw' : '')};
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentAvatar = styled.div`
  margin: 1vw;
`

export const ContentLink = styled.div`
  margin: 2.1vw;
  mix-blend-mode: normal;
  border-left: 1px dashed #d3d3d3;
`

export const TextWolcome = styled.span`
  position: absolute;
  left: 9vw;
  right: 12vw;
  top: 2vw;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 2vw;
  line-height: 2vw;
  color: #000000;
`

export const TextItem1 = styled.span`
  position: absolute;
  left: 9vw;
  right: 12vw;
  top: 5vw;
  width: 13vw;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 1vw;
  line-height: 1.5vw;
  display: flex;
  align-items: center;
  letter-spacing: -0.035em;

  color: #000000;
`

export const ButtonLink = styled.button`
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  display: block;
  width: 13vw;
  height: 7.2vw;
  align-items: baseline;
  justify-content: flex-start;
  display: grid;
`

export const TitleLink = styled.span`
  position: absolute;
  right: 6.1vw;
  top: 1vw;
  width: 10vw;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1vw;
  line-height: 1vw;
  display: flex;
  align-items: center;
  letter-spacing: -0.035em;
  color: #000000;
`

export const ButtonImg = styled.img`
  width: 4.1vw;
  left: 3.3vw;
  top: 0.6vw;
  position: relative;
`

export const ButtonText = styled.span`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 1vw;
  line-height: 1vw;

  display: flex;
  align-items: center;
  text-align: center;

  color: #343a40;
`

export const ContentItems = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 79vw;
`

export const CardTrasactionOk = styled.div`
  position: absolute;
  width: 38.7vw;
  height: 7.5vw;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  top: 1vw;
  left: 0vw;
`

export const CardPending = styled.div`
  position: absolute;
  width: 38.7vw;
  height: 7.5vw;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  top: 1vw;
  right: 0vw;
`

export const CardTransactionTitle = styled.span`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 1vw;
  line-height: 1vw;
  margin: 1vw;
  position: relative;
  color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
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

export const ContentTable = styled.div`
  position: relative;
  width: 79vw;
  height: 19vw;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  top: 9.5vw;
  left: 0vw;
`

export const CardTableTitle = styled.span`
  font-family: Kanit;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7vw;
  line-height: 2vw;

  position: relative;
  color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1vw;
`

export const Ref = styled.span`

`;
