import styled from 'styled-components'

export const ContentInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const InputLabel = styled.span`
  font-size: 0.9vw;
`

export const Input = styled.input`
  font-size: 1vw;
  padding: 5px;
  background: #fafafa;
  border: 1px solid #bdbdbd;
  margin: 1vw 0;
  border-radius: 3px;
  ::placeholder {
    color: #bdbdbd;
  }
  width: ${(props) => props.width};
`

export const ButtonSearch = styled.button`
  background: #d3d3d3;
  border: none;
  border-left: none;
  border-bottom-right-radius: 4px;
  width: 2vw;
  height: 1.7vw;
  border-top-right-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`
