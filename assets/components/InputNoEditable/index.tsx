import React, { useState } from 'react'
import { ContentInput, InputLabel, Input } from './styles'

type Props = {
  name: string
  type: string
  width: string
  value: string
}

const InputNoEditable: React.FC<Props> = ({ name, type, width, value }) => {
  return <Input type={type} name={name} width={width} value={value} readOnly={true}></Input>
}

export default InputNoEditable
