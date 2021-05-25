import { AnyAction } from 'redux'
import { CaptchaReducerType } from '../../types'
import { SET_STATE_GLOBAL } from '../actions/index'

const initialState: CaptchaReducerType = {
  tokenCaptcha: '',
}

const captchaReducer = (state: CaptchaReducerType = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_STATE_GLOBAL: {
      return {
        ...state,
        tokenCaptcha: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default captchaReducer
