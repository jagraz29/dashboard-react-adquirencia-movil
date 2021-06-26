import React from 'react'
import { Button, LoadingSpinner, ButtonText } from './styles'

type Props = {
  onClick: any
  loading: boolean
  text: string
  disabled: boolean
}

const ButtonSpinner: React.FC<Props> = ({ onClick, loading, text, disabled }) => {
  const handlerOnChange = (valor: any) => {
    onClick(valor.target.value)
  }
  return (
    <Button
      disabled={disabled}
      onClick={(e) => {
        handlerOnChange(e)
      }}
    >
      {loading == true ? <LoadingSpinner /> : <ButtonText>{text}</ButtonText>}
    </Button>
  )
}

export default ButtonSpinner
