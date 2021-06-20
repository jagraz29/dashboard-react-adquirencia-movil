import { DataService } from '../../services/dataService'
export const SET_STATE_GLOBAL = 'SET_STATE_GLOBAL'
export const GET_STATE_USER = 'GET_STATE_USER'
export const GET_PROPERTY_SITE = 'GET_PROPERTY_SITE'
export const SET_PROPERTY_SITE = 'SET_PROPERTY_SITE'
export const CREATE_SELL_LINK = 'CREATE_SELL_LINK'

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
    console.log('POST: ')
    const res = await dataService.post(
      'http://localhost:8000/api/configuration/property-site',
      data
    )

    dispatch({
      type: SET_PROPERTY_SITE,
      payload: res.data.data.cliente,
    })
  } catch (error) {}
}

export const createSellLink = (data: any) => async (dispatch: any) => {
  try {
    await dataService.post('http://localhost:8000/api/collect/create', data)
    dispatch({
      type: CREATE_SELL_LINK,
      payload: data,
    })
    return true
  } catch (error) {
    return false
  }
}

export const editSellLink = (id: number) => async (dispatch: any) => {
  try {
    const { data } = await dataService.get(`http://localhost:8000/api/collect/edit/${id}`)
    const resData = data.data
    return resData
  } catch (error) {
    return false
  }
}
