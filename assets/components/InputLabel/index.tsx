import React from 'react'
import { Label } from './styles'
import { InputLabelType } from '../../types'

const InputLabel: React.FC<InputLabelType> = ({ label, required }) => {
  return (
    <Label>
      {label} <span style={{ color: 'red' }}>{required && '*'}</span>
    </Label>
  )
}

export default InputLabel
