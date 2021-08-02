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
  CancelButton
} from './style'
import Selector from '../Selector'
import { countries } from '../../utils/countries'
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

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


const socialMediaMessage="Link de pago. Paga ahora con ePayco"
  return (
    <Wrapper>
      <Container style={{paddingTop: 0}}>
        <Facebook
        href={`https://www.facebook.com/sharer.php?u=${process.env.REACT_APP_URL_COBRA}${props.idCobra}`}
        target="_blank"
        > 
          <AiFillFacebook/> Facebook
        </Facebook>
        <Twitter
        href={`https://twitter.com/share?text=${socialMediaMessage}:&amp;url=${process.env.REACT_APP_URL_COBRA}${props.idCobra}`}
        target="_blank"
         >
           <AiOutlineTwitter/> Twitter
        </Twitter>
        <Whatsapp
        href={`https://wa.me?text=${process.env.REACT_APP_URL_COBRA}${props.idCobra}`}
        target="_blank"
        >
          <FaWhatsapp/> Whatsapp
        </Whatsapp>
        <Linkedin
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${process.env.REACT_APP_URL_COBRA}${props.idCobra}&title=LinkRegistro&summary=&source=epayco.co`}
        target="_blank"
        >
          <FaLinkedin/> Linkedin
          </Linkedin>
      </Container>
      <Container>
        <Text>
          También puede copiar y pegar este link en su red social favorita de forma directa
        </Text>
        <Input value={`${process.env.REACT_APP_URL_COBRA}${props.idCobra}`} disabled />
        <CopyButton
          disabled={copied}
          onClick={() => {
            copyText(`${process.env.REACT_APP_URL_COBRA}${props.idCobra}`)
          }}
        >
          {copied ? 'Copiado en el portapapeles' : 'Copiar enlace'}
        </CopyButton>
      </Container>
      <Container>
        <Text>
          Ingrese un email y haga clic en el botón compartir.
        </Text>
        <Input placeholder="Email del cliente"/>
        <CopyButton>Compartir</CopyButton>
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
                      `${process.env.REACT_APP_AMAZON_URL}` +
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
        <Input placeholder="Número de celular del cliente"/>
        <CopyButton>Compartir</CopyButton>
      </Container>
      <Container  style={{border:"none"}}>
        <CancelButton onClick={()=>props.toggle()}>Cancelar</CancelButton>
      </Container>
    </Wrapper>
  )
}
