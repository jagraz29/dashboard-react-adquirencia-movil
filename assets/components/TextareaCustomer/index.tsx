import React, { useState } from 'react'
import { Textarea } from './styles'

type Props = {
  name: string
  type: string
  placeholder: string
  width: string
  value: string
  style?: any
  onChange: any
}

const TextareaCustomer: React.FC<Props> = ({ name, placeholder, value, onChange, style }) => {
  const [valor, setValor] = useState('')

  const handlerOnChange = (valor: any) => {
    onChange(valor)
  }

  return (
    <Textarea
      placeholder={placeholder}
      name={name}
      style={style}
      value={value}
      onChange={(e) => {
        handlerOnChange(e)
      }}
    ></Textarea>
  )
}

export default TextareaCustomer
