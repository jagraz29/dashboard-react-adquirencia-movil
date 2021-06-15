import React from 'react'
import { ContentWrapper, Wrapper, WrapperLogo, WrapperLogoEpeyco, WrapperText } from './style'
import { IconEpeycoFooter, IconVigilado } from '../../config/configImages'

const Footer = () => {
  return (
    <div>
      <Wrapper>
        <ContentWrapper>
          <WrapperLogo src={IconVigilado.url} />
          <WrapperText>Davivienda S.A. todos los Derechos reservados 2021</WrapperText>
          <WrapperLogoEpeyco src={IconEpeycoFooter.url} />
        </ContentWrapper>
      </Wrapper>
    </div>
  )
}

export default Footer
