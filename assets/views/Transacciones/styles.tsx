import styled from 'styled-components'
import { INTERMEDIATE } from '../../styles/breakpoints'

export const ContainerTransaction = styled.div`
  display: grid;
  grid-template-rows: 3rem auto;
  overflow: hidden;
`

export const ContentTransaction = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  overflow: hidden;
  overflow-x: auto;
  @media (max-width: ${INTERMEDIATE}) {
    flex-direction: column;
    overflow: hidden;
  }
  
`

export const Card1 = styled.div`
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 0.5rem;
  min-width: 11rem;
  @media (max-width: ${INTERMEDIATE}) {
    margin-right: 0;
  }
`

export const Card2 = styled.div`
  height: max-content;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  overflow-x: auto;
  @media (max-width: ${INTERMEDIATE}) {
    margin-top: 1rem;
  }
`
export const CardHeaderFilter = styled.div`

`

export const CardTitle = styled.h4`
  color: #23272b;
  margin: 0.5rem;
`


export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  height: 4rem;
  border-bottom: 1px solid #d3d3d3;
  align-items: center;
  h4 {
    margin: 0 1rem;
    font-size: 20px;
    font-weight: 500;
  }
  @media (max-width: ${INTERMEDIATE}) {
    grid-template-columns: 100%;
    padding: 0.5rem;
  }

`
export const SearchContainer = styled.form`
  display: grid;
  grid-template-columns: 4fr 1fr;
  margin: 0 1rem;
  div{
    display: grid;
    grid-template-columns: 5fr 1fr;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input {
      border: 1px solid #b7b6b6;
      border-radius: 4px 0px 0px 4px;
      line-height: 35px;
      padding: 0px 0.5em 0px;
      border-color: #c5c5c8;
      min-height: 35px;
      height: 35px;
      border-right: none;
    }
    button{
      padding: 0px 0.5em 0px;
      background-color: white;
      border: 1px solid #c5c5c8;
      border-left: none;
      color:#bababa;
      font-weight: bold;
        :hover{
          color: #5e5e5e;
        }
    }
  }
  .buttonSeach {
    border: 1px solid #b7b6b6;
    border: none;
    color: #bababa;
    background: #0000000d;
    cursor: pointer;
  }
`


export const CardContent1 = styled.div`
  margin: 0.5rem;
`

export const CardContent2 = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContentFiltro = styled.div`
  display: flex;
  flex-direction: column;
  background: #e6e6e6;
  margin-bottom: 1rem;

`

export const ButtonFecha = styled.button`
  background: white;
  border: 1px solid #58d3f7;
  box-sizing: border-box;
  border-radius: 4px;
  color: #58d3f7;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 2rem;
  margin: 0.1rem 0;
  :hover{
    background: hsl(200, 90%, 45%);
    color: white;
  }
`

export const ContentImputs = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const ContentItem = styled.button`
  background: white;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  border-radius: 4px;
  color: #23272b;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
  cursor: pointer;
  border-left: ${(props) => (props.theme.borderLef == true ? '4px solid #FF4000' : '')};
  width: 100%;
  height: 2.3rem;
  text-align: left;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.active {
    border-left: 4px solid #ff4000;
  }
`

export const ItemTitle = styled.h4`
  text-transform: capitalize;
  margin: 0;
  font-weight: normal;
`
export const ItemValue = styled.h4`
  margin: 0;
  font-weight: normal;
`
export const ContentInputsItems = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  margin-top: 0;
`

export const ContentButonCard = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`

export const ContentPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

export const ItemResultTotal = styled.h2`
  font-size: 0.9rem;
  padding-left: 1.5rem;;
  width: 5rem;
`

export const InputLabelTitle = styled.h5`
  margin: 1rem 0.5rem;
`

export const LoadingContent = styled.div`
  display: flex;
  width: 100vw;
  position: absolute;
  top: 10rem;
  left: 7rem;
`
export const ContainerButtonFecha = styled.div`
  margin: 0.5rem;
`
