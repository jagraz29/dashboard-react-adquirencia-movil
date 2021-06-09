import React from 'react'
import { ContentInput, InputLabel, Input } from './styles'

type Props = {
  name: string
  type: string
  placeholder: string
  width: string
}

const InputCustumer: React.FC<Props> = ({ name, type, placeholder, width }) => {
  return <Input type={type} placeholder={placeholder} name={name} width={width}></Input>
}

export default InputCustumer
