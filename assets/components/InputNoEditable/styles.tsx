import styled from 'styled-components'

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const InputLabel = styled.span`
`

export const Input = styled.input`
  padding: 5px;
  background: #fafafa;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  width: ${(props) => props.width};
`
