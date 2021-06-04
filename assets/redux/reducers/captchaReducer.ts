import { AnyAction } from 'redux'
import { CaptchaReducerType, UserReducerType } from '../../types'
import { SET_STATE_GLOBAL, GET_STATE_USER } from '../actions/index'

const initialState: UserReducerType = {
  userData: {
    data: {
      email: '',
      cellPhone: '',
      companyName: '',
      indicative: '',
      logo: '',
      socialName: '',
    }
  },
  profileImage: '',
  backgroundImage: '',

}

const captchaReducer = (state: UserReducerType = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_STATE_GLOBAL: {
      return {
        ...state,
        tokenCaptcha: action.payload,
      }
    }
    case GET_STATE_USER: {
      return {
        ...state,
        userData : action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default captchaReducer
