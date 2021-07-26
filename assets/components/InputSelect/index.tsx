import React, { useState } from 'react'
import { Select } from './styles'
import { InputSelectType } from '../../types/InputSelectType'

const InputSelect: React.FC<InputSelectType> = ({
  name,
  placeholder,
  width,
  dataSelect,
  value,
  onClick,
  onChange,
  returnComplete = false,
}) => {
  const [selectWidth, setselectWidth] = useState({ width: width })
  const [valor, setValor] = useState('')

  const handlerOnChange = (valor: any) => {
    if (returnComplete) {
      onChange(valor)
    } else {
      onChange(valor.target.value)
    }
  }
  return (
    <Select
      style={selectWidth}
      name={name}
      onClick={onClick}
      value={value}
      onChange={(e) => {
        handlerOnChange(e)
      }}
    >
      <option value="" hidden>
        {placeholder}
      </option>
      {dataSelect.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </Select>
  )
}

export default InputSelect
