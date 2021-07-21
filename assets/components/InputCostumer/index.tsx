import React, { useState } from 'react'
import { ContentInput, InputLabel, Input } from './styles'
import { InputCostumerType } from '../../types'

const InputCustumer: React.FC<InputCostumerType> = ({
  name,
  type,
  placeholder,
  width,
  value,
  onChange,
  returnComplete = false,
}) => {
  const [valor, setValor] = useState('')

  const handlerOnChange = (valor: any) => {
    if (returnComplete) {
      onChange(valor)
    } else {
      onChange(valor.target.value)
    }
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
