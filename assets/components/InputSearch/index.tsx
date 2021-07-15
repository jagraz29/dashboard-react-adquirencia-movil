import React, { useState } from 'react'
import { ContentInput, InputLabel, Input, ButtonSearch } from './styles'
import * as RiIcons from 'react-icons/hi'

type Props = {
  name: string
  type: string
  placeholder: string
  width: string
  value: string
  onChange: any
  returnComplete?: boolean
  eventSearch: any
}

const InputSearch: React.FC<Props> = ({
  name,
  type,
  placeholder,
  width,
  value,
  onChange,
  returnComplete = false,
  eventSearch,
}) => {
  const [valor, setValor] = useState('')

  const handlerOnChange = (valor: any) => {
    if (returnComplete) {
      onChange(valor)
    } else {
      onChange(valor.target.value)
    }
  }

  const handlerOnChick = (valor: string) => {
    eventSearch(value)
  }

  return (
    <ContentInput>
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
      <ButtonSearch
        onClick={(e) => {
          handlerOnChick(e)
        }}
      >
        <RiIcons.HiOutlineSearch />
      </ButtonSearch>
    </ContentInput>
  )
}

export default InputSearch
