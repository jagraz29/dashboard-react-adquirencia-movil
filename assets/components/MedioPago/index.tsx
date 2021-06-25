import React from 'react'
import { IconVS, IconMS, IconPSE } from '../../config/configImages'
import { ContentMedioPago, MedioPagoImg } from './styles'

type Props = {
  type: string
}
const MedioPago: React.FC<Props> = ({ type }) => {
  return (
    <ContentMedioPago>
      {type == 'VS' ? (
        <MedioPagoImg src={IconVS.url} />
      ) : type == 'MS' ? (
        <MedioPagoImg src={IconMS.url} />
      ) : type == 'PSE' ? (
        <MedioPagoImg src={IconPSE.url} />
      ) : (
        ''
      )}
    </ContentMedioPago>
  )
}

export default MedioPago
