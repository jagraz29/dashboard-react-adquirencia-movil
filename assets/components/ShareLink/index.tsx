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
  CancelButton,
  LoadingSpinner,
  ModalInput,
  ModalButtons
} from './style'
import Selector from '../Selector'
import { countries } from '../../utils/countries'
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { sendEmailSmsCollect } from '../../redux/actions';
import { ModalComp } from '../modalComp';
import { toast } from 'react-toastify'
import {config} from '../../config/enviroment'
export default function ShareLink(props:any) { 

  const [phonePrefixSelected, setPhonePrefixSelected] = useState('+57')
  const [copied, setCopied] = useState(false)
  const [typeShare, setTypeShare]= useState("")
  const [isShown, setIsShown] = useState<boolean>(false)
  const toggle = () => setIsShown(!isShown)

  const socialMediaMessage="Link de pago. Paga ahora con ePayco"

  const onPhonePrefixSelected = (value: string | undefined) => {
    if (value) setPhonePrefixSelected(value)
  }

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
  }
  
  const [input, setInput] = useState({
    email: "",
    telefono: "",
  })
  const handleInputChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const validate = () => {
    const regex = /\S+@\S+\.\S+/
    if (input.email == '') {
      return 'Debe ingresar un correo.'
    }
    if (!regex.test(input.email)) {
      return 'El correo es inválido.'
    }
    return true
  }

  const sendSMS = async () =>{
    if(input.telefono ===""){
      setIsShown(!isShown)
      props.toggle()
      toast.error("Debe ingresar un número telefónico.")
      return 
    }

    setTypeShare("celular")
    setIsShown(!isShown)
    const data={
      id: props.idCobra,
      type: "celular",
      value: input.telefono,
      indicative: phonePrefixSelected,
    }
    let res= await sendEmailSmsCollect(data)
    setIsShown(!isShown)
    props.toggle()

    if(res.status){
      let respuesta= JSON.parse(res.message)
      if(respuesta.success){ 
        toast.success(`SMS enviado exitosamente a ${phonePrefixSelected}${input.telefono}.`)
      } else {
        toast.error("Error al enviar SMS, intente nuevamente.")
      }
    }else{
      toast.error('Error al enviar SMS, intente nuevamente.')
    }
  }

  const sendEmail = async() =>{
    const val = validate()
    if (typeof val != 'boolean') {
      setIsShown(!isShown)
      props.toggle()
      toast.error(val)
      return 
    }

    setTypeShare("email")
    setIsShown(!isShown)
    const data={
      id: props.idCobra,
      type: "email",
      value: input.email,
    }
    let res= await sendEmailSmsCollect(data)
    setIsShown(!isShown)
    props.toggle()

    if(res.status){
      if(res.message == `Correo enviado exitosamente a ${input.email}`) toast.success(res.message)
      else toast.error("Error al enviar email, intente nuevamente.")
    }else{
      toast.error('Error al enviar email, intente nuevamente.')
    }
  }

  const modalConfirmacionTrx = (
    <div>
      <ModalInput>
        <p>Enviando {typeShare === "email"?`email a ${input.email}`:`SMS a ${phonePrefixSelected}${input.telefono}`}</p> 
      </ModalInput>
      <ModalButtons>
        <button className="buttonSend">
        <LoadingSpinner />
        </button>
      </ModalButtons>
    </div>
  )

  return (
    <Wrapper>
      <Container style={{paddingTop: 0}}>
        <Facebook
        href={`https://www.facebook.com/sharer.php?u=${config.cobraUrl}${props.idCobra}`}
        target="_blank"
        > 
          <AiFillFacebook/> Facebook
        </Facebook>
        <Twitter
        href={`https://twitter.com/share?text=${socialMediaMessage}:&amp;url=${config.cobraUrl}${props.idCobra}`}
        target="_blank"
        >
          <AiOutlineTwitter/> Twitter
        </Twitter>
        <Whatsapp
        href={`https://wa.me?text=${config.cobraUrl}${props.idCobra}`}
        target="_blank"
        >
          <FaWhatsapp/> Whatsapp
        </Whatsapp>
        <Linkedin
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${config.cobraUrl}${props.idCobra}&title=LinkRegistro&summary=&source=epayco.co`}
        target="_blank"
        >
          <FaLinkedin/> Linkedin
        </Linkedin>
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
        <Text>
          Ingrese un email y haga clic en el botón compartir.
        </Text>
        <Input 
         name="email"
         type="email"
         value={input.email}
         onChange={(e) => handleInputChange(e)}
          placeholder="Email del cliente"
        />
        <CopyButton 
          onClick={()=>sendEmail()}
        >
          Compartir
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
        <Input 
          name="telefono"
          type="number"
          value={input.telefono}
          onChange={(e) => handleInputChange(e)}
          placeholder="Número de celular del cliente" 
          />
        <CopyButton onClick={()=> sendSMS()}>Compartir</CopyButton>
      </Container>
      <Container  style={{border:"none"}}>
        <CancelButton onClick={()=>props.toggle()}>Cancelar</CancelButton>
      </Container>

      <ModalComp
        isShown={isShown}
        hide={toggle}
        modalContent={modalConfirmacionTrx}
        headerText={typeShare == "email"? "Compartiendo email de cobro" : "Compartiendo SMS de cobro"}
      ></ModalComp>

    </Wrapper>
  )
}
