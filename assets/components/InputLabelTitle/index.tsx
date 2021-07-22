import React from 'react'
import { Label } from './styles'
import { InputLabelType } from '../../types'

const InputLabelTitle: React.FC<InputLabelType> = ({ label }) => {
  return (
    <Label>
      <strong>{label}</strong>
    </Label>
  )
}

export default InputLabelTitle
