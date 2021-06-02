import React from 'react'
import {ContentWrapper, Wrapper, WrapperLogo, WrapperLogoEpeyco, WrapperText} from './style'
import { LogoDavivienda, LogoEpayCo, } from '../../config/configImages'

const Footer = () => {
    return (
        <div>
            <Wrapper>
                <ContentWrapper>
                    <WrapperLogo src={LogoDavivienda.url}/>
                    <WrapperText>
                        Davivienda S.A. todos los Derechos reservados 2021
                    </WrapperText>
                    <WrapperLogoEpeyco src={LogoDavivienda.url}/>
                </ContentWrapper>
            </Wrapper>
        </div>
    )
}

export default Footer
