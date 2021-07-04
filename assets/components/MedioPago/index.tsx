import React, { useEffect, useState } from 'react'
import { CardsIcons} from '../../config/configImages'
import { ContentMedioPago, MedioPagoImg } from './styles'

type Props = {
  type: any
}
const MedioPago: React.FC<Props> = ({ type }) => {
  
  const [url, setUrl]= useState<any>(false)
  
  useEffect(() => {
    setUrl(CardsIcons[type])

  },[type])
  return (
    <ContentMedioPago>
      {
        url?
        <MedioPagoImg src={url} />
        :
        <MedioPagoImg src={CardsIcons.DEFAULT} />
      }
    </ContentMedioPago>
  )
}

export default MedioPago
