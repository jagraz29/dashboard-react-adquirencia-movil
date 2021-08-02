import React, { useEffect, useState } from 'react'
import {
  Facebook,
  Linkedin,
  Twitter,
  Whatsapp,
  Wrapper,
  Container,
  Input,
  CopyButton,
  PhonePrefixContainer,
  FlagContainer,
  Flag,
  FlagLabel,
  Text,
} from './style'
import Selector from '../Selector'
import { countries } from '../../utils/countries'
import { config } from '../../config/enviroment'

export default function ShareLink(props:any) { 

  const [phonePrefixSelected, setPhonePrefixSelected] = useState('+57')
  const [copied, setCopied] = useState(false)

  const onPhonePrefixSelected = (value: string | undefined) => {
    if (value) setPhonePrefixSelected(value)
  }

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
  }

  return (
    <Wrapper>
      <Container>
        <Facebook>Facebook</Facebook>
        <Twitter>Twitter</Twitter>
        <Whatsapp>Whatsapp</Whatsapp>
        <Linkedin>Linkedin</Linkedin>
      </Container>
      <Container>
        <Text>
          También puede copiar y pegar este link en su red social favorita de forma directa
        </Text>
        <Input value={`${config.cobraUrl}${props.idCobra}`} disabled />
        <CopyButton
          disabled={copied}
          onClick={() => {
            copyText(`${config.cobraUrl}${props.idCobra}`)
          }}
        >
          {copied ? 'Copiado en el portapapeles' : 'Copiar enlace'}
        </CopyButton>
      </Container>
      <Container>
        <Text>Ingrese un número de celular y haga clic en el botón compartir.</Text>
        <PhonePrefixContainer>
          <Selector
            defaultValue={countries.find((country) => country.name === 'Colombia')}
            items={countries}
            renderOption={(item) => {
              return (
                <FlagContainer>
                  <Flag
                    src={
                      `${config.amazonUrl}` +
                      '/my-epayco/flags/' +
                      item.label.toLowerCase() +
                      '.svg'
                    }
                  />
                  <FlagLabel>{`${item.label}(${item.value})`}</FlagLabel>
                </FlagContainer>
              )
            }}
            onSelect={onPhonePrefixSelected}
          />
        </PhonePrefixContainer>
        <Input />
        <CopyButton>Compartir</CopyButton>
      </Container>
      <Container>
        <CopyButton onClick={()=>props.toggle()}>Cancelar</CopyButton>
      </Container>
    </Wrapper>
  )
}
