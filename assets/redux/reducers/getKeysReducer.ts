import { AnyAction } from 'redux'
import { GetKeysReducerType } from '../../types/GetKeysReducerType'
import { GET_KEYS } from '../actions/index'

const initialState: GetKeysReducerType = {
  keysData: {
    data: {
      p_cust_id_cliente: '',
      p_key: '',
      privateKey: '',
      publicKey: '',
    },
  },
}

const getKeysReducer = (state: GetKeysReducerType = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_KEYS: {
      return {
        ...state,
        keysData: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default getKeysReducer
