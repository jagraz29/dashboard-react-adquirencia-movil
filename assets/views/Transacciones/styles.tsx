import styled from 'styled-components'

export const ContentTransaction = styled.div`
  background: red;
  position: absolute;
  margin: 7vw 60.1vw 40.2vw 19.4vw;
`

export const ContentCard = styled.div`
  top: 1vw;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  flex-direction: row;
  width: 79vw;
`

export const Card1 = styled.div`
  width: 18.7vw;
  /* height: 131.3vw; */
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  top: 1vw;
  margin-bottom: 8vw;
`

export const Card2 = styled.div`
  width: 59.7vw;
  //height: 7.5vw;
  height: auto;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  top: 1vw;
  margin-top: 0vw;
`

export const CardHeader = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    height: 4rem;
    border-bottom: 1px solid #d3d3d3;
    align-items: center;
      h4{
        margin: 0 1rem;
        font-size: 20px;
        font-weight: 500;
      }
    
`
export const SearchContainer = styled.form`
  display: grid;
  grid-template-columns: 4fr 1fr;
  margin: 0 1rem;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
    input{
      border: 1px solid #b7b6b6;
      border-radius: 4px 0px 0px 4px;
      line-height: 35px;
      padding: 0px 0.5em 0px ;
      border-color: #c5c5c8;
      min-height: 35px;
      height: 35px;
    }
    button{
      border: none;
      color: #bababa;
      background: #0000000d;
      cursor:pointer;
    }
`

export const CardTitle = styled.h1`
  width: 30vw;
  font-size: 1.2vw;
  line-height: 2vw;
  margin: 0.4vw 0 0 0.8vw;
  color: #23272b;
`

export const CardContent1 = styled.div`
  height: auto;
  display: ${(props) => props.theme.display};
  margin: 0.5vw;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const CardContent2 = styled.div`
  height: auto;
  display: ${(props) => props.theme.display};
  margin: 0vw;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  overflow: scroll;
`
export const ContentFecha = styled.div`
  background: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 9vw; */
  margin-bottom: 0.7vw;
  padding-top: 1rem;
`

export const ContentFecha2 = styled.div`
  background: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 19vw; */
  margin-bottom: 0.7vw;
`
export const ContentFecha3 = styled.div`
  background: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 78vw; */
  margin-bottom: 0.7vw;
`

export const ContentFecha4 = styled.div`
  background: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 8.3vw; */
  margin-bottom: 0.7vw;
`

export const ContentFecha5 = styled.div`
  background: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 6.3vw;
  margin-bottom: 0.7vw;
`

export const ButtonFecha = styled.button`
  font-size: 0.8vw;
  background: white;
  border: 1px solid #58d3f7;
  box-sizing: border-box;
  border-radius: 4px;
  width: 16vw;
  height: 1.9vw;
  top: 5vw;
  color: #58d3f7;
  justify-content: center;
  align-items: center;
cursor: pointer;
  :hover,
  :focus {
    background: hsl(200, 90%, 45%);
    color: white;
  }
`

export const ButtonAvanzada = styled.button`
  font-size: 0.8vw;
  background: white;
  border: 1px solid #58d3f7;
  box-sizing: border-box;
  border-radius: 4px;
  width: 16vw;
  height: 1.9vw;
  top: 5vw;
  color: #58d3f7;
  justify-content: center;
  align-items: center;
  margin-left: 1vw;

  :hover,
  :focus {
    background: hsl(200, 90%, 45%);
    color: white;
  }
`

export const ContentImputs = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.6vw;
  height: 4vw;
`

export const ContentItem = styled.button`
  font-size: 0.8vw;
  background: white;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  border-radius: 4px;
  width: 16vw;
  height: 2.1vw;
  color: #23272b;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
  margin: 0vw;
  cursor: pointer;
  border-left: ${(props) => (props.theme.borderLef == true ? '4px solid #FF4000' : '')};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.active {
    border-left: 4px solid #ff4000;
  }
`

export const ContentItemTitle = styled.div`
  font-size: 0.8vw;
  background: white;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  border-radius: 4px;
  width: 16vw;
  height: 2.1vw;
  color: #23272b;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
  margin: 0vw;
  border-left: 4px solid #ff4000;
  cursor: pointer;
`

export const ItemTitle = styled.h2`
  left: 0.4vw;
  position: relative;
  font-size: 1vw;
  width: 10.6vw;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: capitalize;
`
export const ItemValue = styled.h2`
  right: 1vw;
  position: relative;
  font-size: 1vw;
`
export const ContentImputsItems = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.6vw;
  /* height: 28vw; */
`

export const ContentImputsItems2 = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.6vw;
  /* height: 82vw; */
`

export const ContentImputsItems3 = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.6vw;
  height: 70vw;
`

export const ContentButonCard = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`

export const CardContentTable = styled.div`
  position: relative;
  width: 79vw;
  height: 19vw;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 4px;
  top: 9.5vw;
  left: 0vw;
  overflow: scroll;
  background: red;
`

export const ContentPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

export const ItemResultTotal = styled.h2`
  font-size: 0.9rem;
  padding-left: 2vw;
  width: 5rem;
`

export const InputLabelTitle = styled.h3`
  width: 16vw;
  font-size: 1vw;
`

export const LoadingContent = styled.div`
display: flex;
width: 100vw;
position: absolute;
top: 10rem;
left: 7rem;
`
