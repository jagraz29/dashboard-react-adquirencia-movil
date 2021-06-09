import styled from 'styled-components'

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  border-radius: 3px;
  ::placeholder {
    color: #bdbdbd;
  }
  width: ${(props) => props.width};
`
