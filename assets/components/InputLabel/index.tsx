import React from 'react'
import {Label} from './styles'

type Props = {
    label: string,
  }

const InputLabel: React.FC<Props> = ({label}) => {
    return (
        <Label>{label}</Label>
    )
}

export default InputLabel
