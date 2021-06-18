import { AnyAction } from 'redux'
import { ClientStatusReducerType } from '../../types/ClienteStatusReducerType'
import { SET_PROFILE_DATA } from '../actions/index'

const initialState: ClientStatusReducerType = {
  clienData: {
    data: {
      message: '',
      status: 0,
    },
  },
}

const profilePostReducer = (state: ClientStatusReducerType = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_PROFILE_DATA: {
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
