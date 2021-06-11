import React from 'react'
import { Content, ContentTitle } from './styles'

type Props = {
  title: string
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <Content>
      <ContentTitle>{title}</ContentTitle>
    </Content>
  )
}

export default Title
