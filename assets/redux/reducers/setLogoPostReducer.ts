import { AnyAction } from 'redux'
import { SetLogoReducerType } from '../../types/SetLogoReducerType'
import { SET_LOGO } from '../actions/index'

const initialState: SetLogoReducerType = {
  logoData: {
    data: {
      message: '',
      status: 0,
    },
  },
}

const setLogoReducer = (state: SetLogoReducerType = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LOGO: {
      return {
        ...state,
        logoData: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default setLogoReducer
