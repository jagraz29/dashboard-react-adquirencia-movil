import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { Spinner } from './styles'
import { sendEmail, sendPasswords } from '../../redux/actions'

const AuthComponent = () => {
  const { id }: any = useParams()
  const history = useHistory()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [check, setCheck] = useState(false)
  const [password, setPassword] = useState({ password: '', passwordConfirm: '' })
  const [disableButton, setDisableButton] = useState(false)
  const [disableInput, setDisableInput] = useState(false)
  const [loadButton, setLoadButton] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validate = () => {
    const regex = /\S+@\S+\.\S+/

    if (email == '') {
      return 'Debe ingresar un correo.'
    }

    if (!regex.test(email)) {
      return 'El correo es inválido.'
    }
    return true
  }

  const validatePassword = () => {
    const lowerCaseLetters = /[a-z]/g

    if (!password.password.match(lowerCaseLetters)) {
      return 'La contraseña debe tener al menos una letra en minúscula.'
    }

    const upperCaseLetters = /[A-Z]/g
    if (!password.password.match(upperCaseLetters)) {
      return 'La contraseña debe tener al menos una letra en mayúscula'
    }

    const numbers = /[0-9]/g
    if (!password.password.match(numbers)) {
      return 'La contraseña debe tener al menos un número.'
    }

    if (password.password.length < 8) {
      return 'La contraseña debe tener una longitud mínima de 8 caracteres.'
    }

    if (password.password !== password.passwordConfirm) {
      return 'Las contraseñas no coinciden.'
    }

    if (!check) {
      return 'Debe aceptar lo términos y condiciones.'
    }

    return true
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const val = validate()
    setLoadButton(true)
    setDisableInput(true)

    if (typeof val != 'boolean') {
      toast.error(val)
      setLoadButton(false)
      setDisableInput(false)
      return false
    }

    const res = await sendEmail(email)
    if (res == true) {
      setShowSuccess(true)
    } else {
      toast.error('Ha ocurrido un error en el servidor.')
      setLoadButton(false)
      setDisableInput(false)
    }
  }

  const redirectRoute = (path: string) => {
    history.push(path)
  }

  const handleSubmitPassword = async (e: any) => {
    e.preventDefault()

    const val = validatePassword()
    setLoadButton(true)
    setDisableInput(true)

    if (typeof val != 'boolean') {
      toast.error(val)
      setLoadButton(false)
      setDisableInput(false)
      return false
    }

    const data = {
      password: password.password,
      confirmPassword: password.passwordConfirm,
      token: id,
    }

    const res = await sendPasswords(data)
    if (res.status == true) {
      toast.success('Se ha actualizado correctamente la contraseña.')
      window.location.assign('/login')
    } else {
      if (res.message == 'Client not found') {
        toast.error('No se encontró el cliente.')
        setLoadButton(false)
        setDisableInput(false)
      } else {
        toast.error('Ha ocurrido un error en el servidor.')
        setLoadButton(false)
        setDisableInput(false)
      }
    }
  }

  const handleChangeInput = (e: any) => {
    const target = e.target
    const name = target.name
    const value = target.value
    if (name == 'email') {
      setEmail(value)
    }

    if (name == 'password' || name == 'passwordConfirm') {
      setPassword({ ...password, [name]: value })
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="auth-background">
        <div className="logo-container">
          <img className="img-ePayco" src="/img/epayco-white.png" alt="" />
          <img className="img-davivienda" src="/img/davivienda.png" alt="" />
        </div>

        <div className="container-princ">

        {location.pathname === '/password/reset' && (
          <div className="auth-copyrigth-container">
            {showSuccess ? (
              <div className="auth-container">
                <h1 className="auth-title">
                  Si existe una cuenta con su correo electrónico, recibirá un mensaje de
                  recuperación de contraseña.
                </h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img className="img-send" src="/img/icon-correo.png" alt="" />
                </div>
                <div className="button-section">
                  <button
                    onClick={() => window.location.assign('/login')}
                    disabled={disableButton}
                    className="btn-auth"
                    style={{width:"100%"}}
                  >
                    Regresar
                  </button>
                </div>
              </div>
            ) : (
              <form method="post" className="auth-container">
                <h1 className="auth-title">
                  Ingrese su e-mail y le serán enviadas las instrucciones para cambiar la
                  contraseña.
                </h1>
                <div className="auth-input">
                  <label>Correo</label>
                  <input
                    disabled={disableInput}
                    onChange={handleChangeInput}
                    className="input-auth"
                    placeholder={'Ingrese su correo'}
                    type="email"
                    value={email}
                    name="email"
                    required
                  />
                </div>
                <div className="button-section">
                  <button
                    onClick={handleSubmit}
                    disabled={disableButton}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      width: "100%"
                    }}
                    className="btn-auth"
                  >
                    {loadButton ? <Spinner /> : 'Enviar'}
                  </button>
                </div>
                <div className="button-section" style={{ textAlign: 'center' }}>
                  <a className="to-login" href="/login">
                    Regresar al inicio de sesión
                  </a>
                </div>
              </form>
            )}
            <span className="copyright">Banco Davivienda S.A. todos los derechos reservados 2020.</span>
          </div>
        )}

        {location.pathname === '/password/change/' + id && (
          <div className="auth-copyrigth-container">
            <form method="post" className="auth-container" >
              <h1 className="auth-title">Cree su nueva contraseña</h1>
              <h2 className="auth-subtitle">
                Se recomienda para mayor seguridad de su cuenta, la contraseña debe contener mínino
                8 caracteres entre letras y números
              </h2>
              <div className="auth-input">
                <label>Ingrese su nueva contraseña</label>
                <input
                  className="input-auth"
                  type="password"
                  placeholder={'Ingrese su nueva contraseña'}
                  onChange={handleChangeInput}
                  value={password.password}
                  name="password"
                  required
                />
              </div>
              <div className="auth-input">
                <label>Confirme su nueva contraseña</label>
                <input
                  className="input-auth"
                  type="password"
                  onChange={handleChangeInput}
                  value={password.passwordConfirm}
                  placeholder={'Repita su nueva contraseña'}
                  name="passwordConfirm"
                  required
                />
              </div>
              <div className="button-section" style={{ display: 'flex' }}>
                <input
                  className="input-checkbox"
                  type="checkbox"
                  onChange={() => setCheck(true)}
                  name=""
                  id=""
                />
                <span className="policy-check">
                  Confirmo que acepto los{' '}
                  <span style={{ color: 'skyblue' }}>Términos y condiciones </span> de los servicios
                  ofrecidos por ePayco y la{' '}
                  <span style={{ color: 'skyblue' }}>
                    Política de Tratamiento de datos personales
                  </span>{' '}
                  de ePayco.
                </span>
              </div>
              <div className="button-section">
                <button
                  disabled={disableButton}
                  onClick={handleSubmitPassword}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    width: "100%"
                  }}
                  className="btn-auth"
                  type="submit"
                >
                  {loadButton ? <Spinner /> : 'Guardar y continuar'}
                </button>
              </div>
            </form>
            <span className="copyright">Banco Davivienda S.A. todos los derechos reservados 2020.</span>
          </div>
        )}
        <div className="right-side">
          Con <b>Mi Negocio</b> puede administrar sus cobros y transacciones de forma rápida y
          segura
        </div>
        
        </div>
      </div>
    </>
  )
}

export default AuthComponent
