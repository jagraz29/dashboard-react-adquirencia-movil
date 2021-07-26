import React from 'react'
import { StyleCard } from './style'

const CardSupportMin = ({ text, url, icon, target, phone, history, className }: any) => {
  return (
    <StyleCard
      className={`${className} animated fadeIn`}
      onClick={() => {
        if (typeof url == 'string' && url != '') {
          history == true ? (window.location.href = url) : null
          typeof target == 'boolean' && target ? newTapBrowser({ urlFocus: url }) : null
        } else {
          typeof phone == 'string' && phone != ''
            ? newTapBrowser({ urlFocus: `tel:${phone}`, target: '_self' })
            : null
        }
      }}
    >
      <div
        className={'icon'}
        style={{
          backgroundImage: `url('${icon}')`,
        }}
      ></div>
      <p>{text}</p>
    </StyleCard>
  )
}

const newTapBrowser = ({
  stateAction = false,
  urlFocus = '',
  history = false,
  urlHistory = false,
  target = '_blank',
}) => {
  try {
    const win = window.open(urlFocus, target)
    notUndefained(win, null)
      ? win != null
        ? win.focus()
        : console.error('Error element Window or urlFocus is undefained!')
      : validateType(history, 'function') &&
        validateType(urlHistory, 'string') &&
        notUndefained(win, null)
      ? (history = urlHistory)
      : console.error('Error: props history for push undefained')

    validateType(stateAction, 'function') && notUndefained(win, null) ? (stateAction = false) : null
  } catch (e) {
    console.error(e)
  }
}

const notUndefained = (data: any, type: any) => {
  const isData = typeof data != 'undefined' && typeof data != undefined && data != null
  const isType =
    typeof type != 'undefined' && typeof type != undefined && type != null && typeof data == type
  if (isType && isData) return isType
  return isData
}

const validateType = (element: any, type: any, count = false) => {
  if (count) {
    return typeof element === type && element.length
  } else {
    return typeof element === type
  }
}

export default CardSupportMin
