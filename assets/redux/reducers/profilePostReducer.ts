import { AnyAction } from 'redux'
import { SET_PROFILE_DATA } from '../actions/index'
import {SetPerfilReducerType} from '../../types/SetPerfilReducerType'

const initialState: SetPerfilReducerType = {
  profileData: {
    data: {
      message: '',
      status: 0,
    },
  },
}

const profilePostReducer = (state: SetPerfilReducerType = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_PROFILE_DATA: {
      console.log('Pa ver', action.payload)
      return {
        ...state,
        profileData: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default profilePostReducer
