import React, { useState } from 'react'
import { Select } from './styles'

type Props = {
  name: string
  placeholder: string
  width: string
  onClick: any
  onChange: any
  value: any
  dataSelect: {
    value: string
    label: string
  }[]
}

const InputSelect: React.FC<Props> = ({
  name,
  placeholder,
  width,
  dataSelect,
  onClick,
  onChange,
  value,
}) => {
  const [selectWidth, setselectWidth] = useState({ width: width })
  return (
    <Select style={selectWidth} onClick={onClick} onChange={onChange} value={value}>
      <option value="" hidden>
        {placeholder}
      </option>
      {dataSelect.map((item, index) => (
        <option value={item.value}>{item.label}</option>
      ))}
    </Select>
  )
}

export default InputSelect
