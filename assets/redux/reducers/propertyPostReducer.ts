import { AnyAction } from 'redux'
import { ClientStatusReducerType } from '../../types/ClienteStatusReducerType'
import { SET_PROPERTY_SITE } from '../actions/index'

const initialState: ClientStatusReducerType = {
  clienData: {
    data: {
      message: '',
      status: 0,
    },
  },
}

const proertyPostReducer = (state: ClientStatusReducerType = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_PROPERTY_SITE: {
      return {
        ...state,
        clienData: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default proertyPostReducer
