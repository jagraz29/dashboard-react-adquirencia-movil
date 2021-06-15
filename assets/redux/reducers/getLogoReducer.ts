import { AnyAction } from 'redux'
import { GetLogoReducerType } from '../../types/GetLogoReducerType'
import { GET_LOGO } from '../actions/index'

const initialState: GetLogoReducerType = {
  logoData: {
    data: {
      logo: '',
    },
  },
}

const getLogoReducer = (state: GetLogoReducerType = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_LOGO: {
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

export default getLogoReducer
