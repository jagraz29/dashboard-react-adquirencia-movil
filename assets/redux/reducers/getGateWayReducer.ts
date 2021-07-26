import { AnyAction } from 'redux'
import { GetGateWayReducerType } from '../../types/GetGateWayReducerType'
import { GET_GATE_WAY } from '../actions/index'

const initialState: GetGateWayReducerType = {
  gateWayData: {
    data: {
      idiomaPredeterminado: '',
      urlConfirmacion: '',
      urlRespuesta: '',
    },
  },
}

const proertyPostReducer = (state: GetGateWayReducerType = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_GATE_WAY: {
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
