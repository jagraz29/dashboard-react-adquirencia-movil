import React from 'react'
import {  Wrapper, ContainerIconsText, ContainerLogoEpayco } from './style'
import { IconEpeycoFooter, IconVigilado } from '../../config/configImages'

const Footer = () => {
  return (
      <Wrapper>
          <ContainerIconsText>
            <img src={IconVigilado.url} />
            <h6>Davivienda S.A. todos los Derechos reservados 2021</h6>
          </ContainerIconsText>
          <ContainerLogoEpayco>
            <img src={IconEpeycoFooter.url} />
          </ContainerLogoEpayco>
      </Wrapper>
  )
}

export default Footer
