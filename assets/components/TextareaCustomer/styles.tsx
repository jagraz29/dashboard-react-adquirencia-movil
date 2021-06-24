import styled from 'styled-components'

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Textarea = styled.textarea`
  font-size: 1vw;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 5px;
  background: #fafafa;
  border: 1px solid #bdbdbd;
  width: 40vw;
  height: 3.5vw;
  resize: none;
  border-radius: 3px;
  ::placeholder {
    color: #bdbdbd;
  }
`
