import React from 'react'
import { ContentInput, InputLabel, Input } from './styles'

type Props = {
  name: string
  type: string
  placeholder: string
  width: string
  value: string
}

const InputCustumer: React.FC<Props> = ({ name, type, placeholder, width, value }) => {
  return (
    <Input type={type} placeholder={placeholder} name={name} width={width} value={value}></Input>
  )
}

export default InputCustumer
