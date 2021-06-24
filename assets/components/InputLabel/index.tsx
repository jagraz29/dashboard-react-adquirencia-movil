import React from 'react'
import { Label } from './styles'

type Props = {
  label: string
  required?: boolean
}

const InputLabel: React.FC<Props> = ({ label, required }) => {
  return (
    <Label>
      {label} <span style={{ color: 'red' }}>{required && '*'}</span>
    </Label>
  )
}

export default InputLabel
