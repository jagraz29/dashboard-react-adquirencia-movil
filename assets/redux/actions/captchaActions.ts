import { DataService } from '../../services/dataService'
export const SET_STATE_GLOBAL = 'SET_STATE_GLOBAL'
export const GET_STATE_USER = 'GET_STATE_USER'
export const GET_PROPERTY_SITE = 'GET_PROPERTY_SITE'
export const SET_PROPERTY_SITE = 'SET_PROPERTY_SITE'
export const CREATE_SELL_LINK = 'CREATE_SELL_LINK'
export const GET_GATE_WAY = 'GET_GATE_WAY'
export const SET_GATE_WAY = 'SET_GATE_WAY'
export const GET_KEYS = 'GET_KEYS'
export const GET_LOGO = 'GET_LOGO'
export const SET_LOGO = 'SET_LOGO'
export const GET_PROFILE_DATA = 'GET_PROFILE_DATA'
export const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
export const SET_PASSWORD = 'SET_PASSWORD'

const dataService = new DataService()

export const setToken = (token: any) => (dispatch: any) => {
  dispatch({
    type: SET_STATE_GLOBAL,
    payload: token,
  })
}

export const getDataUser = () => async (dispatch: any) => {
  try {
    const res = await dataService.get('/api/client/info')
    dispatch({
      type: GET_STATE_USER,
      payload: res.data,
    })
  } catch (error) {}
}

export const getPropertySite = () => async (dispatch: any) => {
  try {
    const res = await dataService.get('api/configuration/property-site')
    dispatch({
      type: GET_PROPERTY_SITE,
      payload: res.data.data.cliente,
    })
  } catch (error) {}
}

export const setPropertySite = (data: any) => async (dispatch: any) => {
  try {
    const res = await dataService.post('api/configuration/property-site', data)
    dispatch({
      type: SET_PROPERTY_SITE,
      payload: res.data,
    })
  } catch (error) {}
}

export const getGateWaySite = () => async (dispatch: any) => {
  try {
    const res = await dataService.get('api/configuration/options-gateway')
    dispatch({
      type: GET_GATE_WAY,
      payload: res.data,
    })
  } catch (error) {}
}

export const setGateWaySite = (data: any) => async (dispatch: any) => {
  try {
    const res = await dataService.post('api/configuration/options-gateway', data)
    dispatch({
      type: SET_GATE_WAY,
      payload: res.data,
    })
  } catch (error) {}
}

export const getKeysSite = () => async (dispatch: any) => {
  try {
    const res = await dataService.get('api/configuration/keys')
    dispatch({
      type: GET_KEYS,
      payload: res.data,
    })
  } catch (error) {}
}

export const getLogoSite = () => async (dispatch: any) => {
  try {
    const res = await dataService.get('api/configuration/pay-page')
    dispatch({
      type: GET_LOGO,
      payload: res.data,
    })
  } catch (error) {}
}

export const setLogoSite = (data: any) => async (dispatch: any) => {
  try {
    const res = await dataService.post('api/configuration/pay-page', data)
    dispatch({
      type: SET_GATE_WAY,
      payload: res.data,
    })
  } catch (error) {}
}

export const getProfileData = () => async (dispatch: any) => {
  try {
    const res = await dataService.get('api/security/profile-data')
    dispatch({
      type: GET_PROFILE_DATA,
      payload: res.data,
    })
  } catch (error) {}
}

export const setProfileData = (data: any) => async (dispatch: any) => {
  try {
    const res = await dataService.post('api/security/profile-data', data)

    dispatch({
      type: SET_PROFILE_DATA,
      payload: res.data,
    })
  } catch (error) {}
}

export const setNewClientPassword = (data: any) => async (dispatch: any) => {
  try {
    const res = await dataService.post('/api/security/set-password', data)

    dispatch({
      type: SET_PASSWORD,
      payload: res.data,
    })
  } catch (error) {}
}

export const createSellLink = (data: any) => async (dispatch: any) => {
  try {
    await dataService.post('/api/collect/create', data)
    dispatch({
      type: CREATE_SELL_LINK,
      payload: data,
    })
    return true
  } catch (error) {
    return false
  }
}
