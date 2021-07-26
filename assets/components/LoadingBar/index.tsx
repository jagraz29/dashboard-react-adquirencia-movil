import React from 'react'
import { Loading } from './styles'

type Props = {
  text: string
}

const LoadingBar: React.FC<Props> = ({ text }) => {
  return (
    <Loading>
      <span>{text ? text : 'Cargando...'}</span>
      <div className="barra">
        <div className="color"></div>
      </div>
    </Loading>
  )
}

export default LoadingBar
