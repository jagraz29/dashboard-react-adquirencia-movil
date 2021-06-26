import { AnyAction } from 'redux'
import { GetListTransactionReducerType } from '../../types/GetListTransactionReducerType'
import { GET_LIST_TRANSACTION } from '../actions/index'

const initialState: GetListTransactionReducerType = {
  listTransactionData: {
    transactions: [],
  },
}

const getListTransactionReducer = (
  state: GetListTransactionReducerType = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_LIST_TRANSACTION: {
      return {
        ...state,
        listTransactionData: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default getListTransactionReducer
