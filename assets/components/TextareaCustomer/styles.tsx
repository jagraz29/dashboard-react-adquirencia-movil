import styled from 'styled-components'

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Textarea = styled.textarea`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 7px;
  background: #fafafa;
  border: 1px solid #bdbdbd;
  resize: none;
  border-radius: 3px;
  width: 96%;
  ::placeholder {
    color: #bdbdbd;
  }
`
