import { AnyAction } from 'redux'
import { GetShowCollectReducerType } from '../../types/GetShowCollectReducerType'
import { GET_SHOW_COLLECT } from '../actions/index'

const initialState: GetShowCollectReducerType = {
  showCollectData: {
    data: [],
  },
}

const getShowCollectReducer = (
  state: GetShowCollectReducerType = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_SHOW_COLLECT: {
      return {
        ...state,
        showCollectData: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default getShowCollectReducer
