import React from 'react'
import { Button, LoadingSpinner, ButtonText } from './styles'
import { ButtonType } from '../../types/ButtonType'

const ButtonSpinner: React.FC<ButtonType> = ({ onClick, loading, text, disabled, style }) => {
  const handlerOnChange = (valor: any) => {
    onClick(valor.target.value)
  }
  return (
    <Button
      disabled={disabled}
      style={style}
      onClick={(e) => {
        handlerOnChange(e)
      }}
    >
      {loading == true ? <LoadingSpinner /> : <ButtonText>{text}</ButtonText>}
    </Button>
  )
}

export default ButtonSpinner
