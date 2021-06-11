import React, { useState } from 'react'
import { Select } from './styles'

type Props = {
  name: string
  placeholder: string
  width: string
  onClick: any
  onChange: any
  dataSelect: {
    id: number
    name: string
    displayText: string
    locale: string
    flag: string
  }[]
}

const InputSelectPais: React.FC<Props> = ({
  name,
  placeholder,
  width,
  dataSelect,
  onClick,
  onChange,
}) => {
  const [selectWidth, setselectWidth] = useState({ width: width })
  const [valor, setValor] = useState('')

  const handlerOnChange = (valor: any) => {
    console.log('pasa por aqui', valor.target.value)
    onChange(valor.target.value)
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
        <option value={item.name}>{item.displayText}</option>
      ))}
    </Select>
  )
}

export default InputSelectPais
