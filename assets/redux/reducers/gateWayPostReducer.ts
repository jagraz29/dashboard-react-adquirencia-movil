import { AnyAction } from 'redux'
import { GateWayStatusReducerType } from '../../types/GateWayStatusReducerType'
import { SET_GATE_WAY } from '../actions/index'

const initialState: GateWayStatusReducerType = {
  gateWayData: {
    data: {
      message: '',
      status: 0,
    },
  },
}

const proertyPostReducer = (state: GateWayStatusReducerType = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_GATE_WAY: {
      return {
        ...state,
        gateWayData: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default proertyPostReducer
