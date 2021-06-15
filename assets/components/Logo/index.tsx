import React from 'react'
import { config } from '../../config/enviroment'
import { LogoDavivienda, LogoEpayCo } from '../../config/configImages'
import { Logo, ContentLogoText, TextLogo, Logo2 } from './styles'

function LogoSidebar() {
  return (
    <div>
      <Logo src={LogoDavivienda.url} />
      <ContentLogoText>
        <TextLogo>en apoyo con</TextLogo>
        <Logo2 src={LogoEpayCo.url} />
      </ContentLogoText>
    </div>
  )
}

export default LogoSidebar
