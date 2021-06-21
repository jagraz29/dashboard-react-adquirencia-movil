import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AlertContent, IconAlert } from './styles'

type Props = {
  closeToast: any
  type: any
  texto: any
  noAutoClose: any
  closeIt: any
}

const ToastAlert: React.FC<Props> = ({ closeToast, type, texto, noAutoClose, closeIt }) => {
  const color = ['', 'green', 'blue', 'yellow', 'red']
  const icon = [
    '',
    '/img/alerts-icons/checked.png',
    '/img/alerts-icons/information.png',
    '/img/alerts-icons/warning.png',
    '/img/alerts-icons/forbidden.png',
  ]

  return (
    <AlertContent>
      <div className={`alert f01 jcfs ${color[type]}`}>
        <div className="icon">
          <img src={icon[type]} alt="" className={'imgr'} />
        </div>
        <div className="texto">
          {typeof texto === 'string' ? (
            <p>{texto}</p>
          ) : typeof texto === 'function' ? (
            texto()
          ) : null}
        </div>
        {!noAutoClose && (
          <div
            className="close-alert p-0 m-0"
            onClick={() => {
              closeToast()
              closeIt()
            }}
          >
            <i className={'fa fa-times'}> </i>
          </div>
        )}
      </div>
    </AlertContent>
  )
}

export default ToastAlert
