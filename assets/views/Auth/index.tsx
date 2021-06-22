import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { Spinner } from './styles'
import { sendEmail } from '../../redux/actions'

const AuthComponent = () => {
  let { id }: any = useParams()
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const redirectRoute = (path: string) => {
    history.push(path)
  }

  const [email, setEmail] = useState('')
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

    const res = await dispatch(sendEmail(email))
    if (!!res == true) {
      setShowSuccess(true)
    } else {
      toast.error(
        'Ha ocurrido un error en el servidor, por favor comuníquese con el administrador.'
      )
    }
  }

  const handleChangeInput = (e: any) => {
    const target = e.target
    const name = target.name
    const value = target.value
    if (name == 'email') {
      setEmail(value)
    }

    if (name == 'password' || name == 'password-confirm') {
      setPassword({ ...password, [name]: value })
    }
  }

  return (
    <div>
      <ToastContainer />
      <div className="auth-background">
        <img className="img-davivienda" src="/img/davivienda.png" alt="" />
        <img className="img-ePayco" src="/img/epayco-white.png" alt="" />

        {location.pathname === '/password/reset' && (
          <div className="auth-container">
            {showSuccess ? (
              <div>
                <h1 className="auth-title">
                  Si existe una cuenta con su correo electrónico, recibirá un mensaje de
                  recuperación de contraseña.
                </h1>
                <div style={{ display: 'flex', marginTop: '4vw', justifyContent: 'center' }}>
                  <img className="img-send" src="/img/icon-correo.png" alt="" />
                </div>
                <div className="button-section">
                  <button
                    onClick={() => window.location.assign('/login')}
                    disabled={disableButton}
                    style={{ width: '21vw' }}
                    className="btn-auth"
                  >
                    Regresar
                  </button>
                </div>
              </div>
            ) : (
              <form method="post">
                <h1 className="auth-title">
                  Ingrese su e-mail y le serán enviadas las instrucciones para cambiar la
                  contraseña.
                </h1>
                <div className="auth-input" style={{ marginTop: '4vw' }}>
                  <label>Correo</label>
                  <input
                    disabled={disableInput}
                    onChange={handleChangeInput}
                    className="input-auth"
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
                      width: '21vw',
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
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
          </div>
        )}

        {location.pathname === '/password/change/' + id && (
          <div className="auth-container" style={{ bottom: '15%' }}>
            <form method="post" style={{ padding: '0 2vw' }}>
              <h1 className="auth-title">Cree su nueva contraseña</h1>
              <h2 className="auth-subtitle">
                Se recomienda para mayor seguridad de su cuenta, la contraseña debe contener minino
                8 caracteres entre letras y números
              </h2>
              <div className="auth-input">
                <label>Ingrese su nueva contraseña</label>
                <input
                  className="input-auth"
                  type="password"
                  onChange={handleChangeInput}
                  value={password.password}
                  name="email"
                  required
                />
              </div>
              <div className="auth-input">
                <label>Confirme su nueva contraseña</label>
                <input
                  className="input-auth"
                  type="password-confirm"
                  onChange={handleChangeInput}
                  value={password.passwordConfirm}
                  name="email"
                  required
                />
              </div>
              <div className="button-section" style={{ display: 'flex' }}>
                <input className="input-checkbox" type="checkbox" name="" id="" />
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
                  style={{ width: '21vw' }}
                  className="btn-auth"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="right-side">
          Con <b>Mi Negocio</b> puede administrar sus cobros y transacciones de forma rápida y
          segura
        </div>
        <span className="copyright" style={{ top: '88.44%' }}>
          Banco Davivienda S.A. todos los derechos reservados 2020.
        </span>
      </div>
    </div>
  )
}

export default AuthComponent
