import React, { useState } from 'react'
import { Select } from './styles'

type Props = {
  name: string
  placeholder: string
  width: string
  onClick: any
  onChange: any
  dataSelect: {
    value: string
    label: string
  }[]
  returnComplete?: boolean
}

const InputSelect: React.FC<Props> = ({
  name,
  placeholder,
  width,
  dataSelect,
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
      onClick={onClick}
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
