import React from 'react'
import { NameContent, NameText } from './styles'

type Props = {
  name: string
}

const NameSidebar: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <NameContent>
        <NameText>{name}</NameText>
      </NameContent>
    </div>
  )
}

export default NameSidebar
