import React, { useState } from 'react';
import Switch from "react-switch";


type Props = {
  disabled: boolean
  value: boolean
  onChange: any
}

const CustomSwitch: React.FC<Props> = ({ disabled, value, onChange}) => {
  const [valor, setValor] = useState('')

  const handlerOnChange = (valor: any) => {
    onChange(valor.target.value)
  }

  return (
    <Switch
      onChange={(event) => handlerOnChange(event)}
      checked={value}
      onColor="#fc5806"
      onHandleColor="#ffffff"
      disabled={disabled}
      handleDiameter={22}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
      height={26}
      width={45}
      className="react-switch"
      id="material-switch"
  />
  )
}

export default CustomSwitch
