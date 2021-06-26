import React from 'react'
import { Label } from './styles'

type Props = {
  label: string
}

const InputLabelTitle: React.FC<Props> = ({ label }) => {
  return (
    <Label>
      <strong>{label}</strong>
    </Label>
  )
}

export default InputLabelTitle
