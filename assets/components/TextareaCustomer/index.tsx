import React, { useState } from 'react'
import { Textarea } from './styles'

type Props = {
  name: string
  type: string
  placeholder: string
  width: string
  value: string
  onChange: any
}

const TextareaCustomer: React.FC<Props> = ({ name, placeholder, value, onChange }) => {
  const [valor, setValor] = useState('')

  const handlerOnChange = (valor: any) => {
    onChange(valor.target.value)
  }

  return (
    <Textarea
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => {
        handlerOnChange(e)
      }}
    ></Textarea>
  )
}

export default TextareaCustomer
