import React, { useState } from 'react'
import { ContentInput, InputLabel, Input } from './styles'

type Props = {
  name: string
  type: string
  placeholder: string
  width: string
  value: string
  onChange: any
}

const InputCustumer: React.FC<Props> = ({ name, type, placeholder, width, value, onChange }) => {
  const [valor, setValor] = useState('')

  const handlerOnChange = (valor: any) => {
    console.log('pasa por aqui', valor.target.value)
    onChange(valor.target.value)
  }

  return (
    <Input
      type={type}
      placeholder={placeholder}
      name={name}
      width={width}
      value={value}
      onChange={(e) => {
        handlerOnChange(e)
      }}
    ></Input>
  )
}

export default InputCustumer
