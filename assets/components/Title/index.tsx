import React from 'react'
import { Content, ContentTitle } from './styles'
import { GlobalStyle } from '../../styles/globalStyle'

type Props = {
  title: string
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <Content>
      <GlobalStyle />
      <ContentTitle>{title}</ContentTitle>
    </Content>
  )
}

export default Title
