import React, { useState } from 'react'
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
export default function ShareLink() {
  const [phonePrefixSelected, setPhonePrefixSelected] = useState('+57')

  const onPhonePrefixSelected = (value: string | undefined) => {
    if (value) setPhonePrefixSelected(value)
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
        <Input />
        <CopyButton>Copiar enlace</CopyButton>
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
                      'https://multimedia-epayco-test.s3.amazonaws.com' +
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
    </Wrapper>
  )
}
