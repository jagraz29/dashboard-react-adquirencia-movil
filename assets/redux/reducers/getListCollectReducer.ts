import { AnyAction } from 'redux'
import { GetListCollectReducerType } from '../../types/GetListCollectReducerType'
import { GET_LIST_COLLECT } from '../actions/index'

const initialState: GetListCollectReducerType = {
  listCollectData: {
    data: [],
  },
}

const getListCollectReducer = (
  state: GetListCollectReducerType = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_LIST_COLLECT: {
      return {
        ...state,
        listCollectData: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default getListCollectReducer
