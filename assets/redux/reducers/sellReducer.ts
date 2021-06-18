import { AnyAction } from 'redux'
import { sellLinkReducerType } from '../../types'
import { CREATE_SELL_LINK } from '../actions/index'

const initialState: sellLinkReducerType = {
  links: [
    {
      nombre: '',
      descripcion: '',
      factura: '',
      tipoMoneda: 'COP',
      valor: 0,
      total: 0,
      impuestos: 0,
      imagenes: [],
      archivo: null,
      cantidad: 0,
      fechaVencimiento: new Date(),
      urlConfirmacion: '',
      urlRespuesta: '',
    },
  ],
}

const sellLinkReducer = (state: sellLinkReducerType = initialState, action: AnyAction) => {
  switch (action.type) {
    case CREATE_SELL_LINK: {
      return {
        ...state,
        links: [...state.links, action.payload],
      }
    }
    default: {
      return state
    }
  }
}

export default sellLinkReducer
