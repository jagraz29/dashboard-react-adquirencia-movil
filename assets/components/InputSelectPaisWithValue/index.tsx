import React, { useState } from 'react'
import { Select } from './styles'
import { InputSelectType } from '../../types/InputSelectType'

const InputSelectPaisWithValue: React.FC<InputSelectType> = ({
  name,
  value,
  placeholder,
  width,
  dataSelect,
  onClick,
  onChange,
}) => {
  const [selectWidth, setselectWidth] = useState({ width: width })
  const [valor, setValor] = useState('')

  const handlerOnChange = (valor: any) => {
    onChange(valor.target.value)
  }
  return (
    <Select
      style={selectWidth}
      value={value}
      onClick={onClick}
      onChange={(e) => {
        handlerOnChange(e)
      }}
    >
      <option value="" hidden>
        {placeholder}
      </option>
      {dataSelect.map((item, index) => (
        <option value={item.id}>{item.displayText}</option>
      ))}
    </Select>
  )
}

export default InputSelectPaisWithValue
