import { AnyAction } from 'redux'
import { SET_PASSWORD } from '../actions/index'
import { SetPasswordReducerType } from '../../types/SetPasswordReducerType'

const initialState: SetPasswordReducerType = {
  passwordData: {
    data: {
      message: '',
      status: 0,
    },
  },
}

const setPasswordReducer = (state: SetPasswordReducerType = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_PASSWORD: {
      console.log('Pa ver', action.payload)
      return {
        ...state,
        passwordData: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default setPasswordReducer
