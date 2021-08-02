import styled from 'styled-components'

export const Facebook = styled.a`
  display: flex;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  line-height: 35px;
  background-color: #3b5998;
  border: none;
  text-decoration: none;
  margin: 4px 5px;
  cursor: pointer;
  width: 120px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  svg{
    padding-right: 5px;
  }
`

export const Twitter = styled.a`
  display: flex;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  line-height: 35px;
  font-weight: 700;
  background-color: #55acee;
  border: none;
  text-decoration: none;
  margin: 4px 5px;
  cursor: pointer;
  width: 120px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 0 1rem;
`

export const Whatsapp = styled.a`
  display: flex;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  line-height: 35px;
  font-weight: 700;
  background-color: #4dc247;
  border: none;
  text-decoration: none;
  margin: 4px 5px;
  cursor: pointer;
  width: 120px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`
export const Linkedin = styled.a`
  display: flex;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  line-height: 35px;
  font-weight: 700;
  background-color: #007bb5;
  border: none;
  text-decoration: none;
  margin: 4px 5px;
  cursor: pointer;
  width: 120px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`

export const Wrapper = styled.div`
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e4e4e4;
`

export const Input = styled.input`
  border-radius: 4px 0 0 4px !important;
  width: auto;
  line-height: 35px;
  padding: 0 0.5em;
  border-color: #c5c5c8;
  min-height: 34px;
  height: 34px;
  margin-right: -1px;
  flex: 1 1 auto;
  border: 1px solid #c5c5c8;
  ::-webkit-input-placeholder { color: #D1D1D1; } 
`

export const CopyButton = styled.button`
  border-radius: 0 4px 4px 0 !important;
  flex: 0 1 auto;
  color: #40A8E6;
  cursor: pointer;
  border: 1px solid #c5c5c8;
  height: 36px;
  background: #fff;
  display: block;

`
export const CancelButton = styled.button`
  border-radius: 0 4px 4px 0 !important;
  flex: 0 1 auto;
  color: #40A8E6;
  cursor: pointer;
  border: 1px solid #c5c5c8;
  height: 36px;
  background: #fff;
  display: block;
  width: 9rem;
  :hover {
    color: white;
    background: #40A8E6;
  }
`

export const FlagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0;
  width: 100px;
`

export const Flag = styled.img`
  max-width: 35px;
  margin: 0rem 0.2rem 0rem -0.3rem;
`
export const FlagLabel = styled.span`
  font-size: 10px;
  width: 60%;
`
export const PhonePrefixContainer = styled.div`
  max-width: 100%;
  width: 120px;
  margin-right: 20px;
`
export const Text = styled.div`
  width: 100%;
  font-size: 14px !important;
`
