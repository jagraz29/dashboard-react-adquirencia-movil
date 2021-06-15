import { DataService } from '../../services/dataService'
export const SET_STATE_GLOBAL = 'SET_STATE_GLOBAL'
export const GET_STATE_USER = 'GET_STATE_USER'
export const GET_PROPERTY_SITE = 'GET_PROPERTY_SITE'
export const SET_PROPERTY_SITE = 'SET_PROPERTY_SITE'
export const GET_GATE_WAY = 'GET_GATE_WAY'
export const SET_GATE_WAY = 'SET_GATE_WAY'
export const GET_KEYS = 'GET_KEYS'
export const GET_LOGO = 'GET_LOGO'

const dataService = new DataService()

export const setToken = (token: any) => (dispatch: any) => {
  dispatch({
    type: SET_STATE_GLOBAL,
    payload: token,
  })
}

export const getDataUser = () => async (dispatch: any) => {
  try {
    const res = await dataService.get('http://localhost:8000/api/client/info')
    dispatch({
      type: GET_STATE_USER,
      payload: res.data,
    })
  } catch (error) {}
}

export const getPropertySite = () => async (dispatch: any) => {
  try {
    const res = await dataService.get('http://localhost:8000/api/configuration/property-site')
    dispatch({
      type: GET_PROPERTY_SITE,
      payload: res.data.data.cliente,
    })
  } catch (error) {}
}

export const setPropertySite = (data: any) => async (dispatch: any) => {
  try {
    const res = await dataService.post(
      'http://localhost:8000/api/configuration/property-site',
      data
    )
    dispatch({
      type: SET_PROPERTY_SITE,
      payload: res.data,
    })
  } catch (error) {}
}

export const getGateWay = () => async (dispatch: any) => {
  try {
    const res = await dataService.get('http://localhost:8000/api/configuration/options-gateway')
    dispatch({
      type: GET_GATE_WAY,
      payload: res.data,
    })
  } catch (error) {}
}

export const setGateWay = (data: any) => async (dispatch: any) => {
  try {
    const res = await dataService.post(
      'http://localhost:8000/api/configuration/options-gateway',
      data
    )
    dispatch({
      type: SET_GATE_WAY,
      payload: res.data,
    })
  } catch (error) {}
}

export const getKeys = () => async (dispatch: any) => {
  try {
    const res = await dataService.get('http://localhost:8000/api/configuration/keys')
    dispatch({
      type: GET_KEYS,
      payload: res.data,
    })
  } catch (error) {}
}

export const getLogo = () => async (dispatch: any) => {
  try {
    const res = await dataService.get('http://localhost:8000/api/configuration/pay-page')
    dispatch({
      type: GET_LOGO,
      payload: res.data,
    })
  } catch (error) {}
}
