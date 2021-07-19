import { DataService } from '../../services/dataService'
export const SET_STATE_GLOBAL = 'SET_STATE_GLOBAL'
export const GET_STATE_USER = 'GET_STATE_USER'
export const GET_PROPERTY_SITE = 'GET_PROPERTY_SITE'
export const SET_PROPERTY_SITE = 'SET_PROPERTY_SITE'
export const GET_GATE_WAY = 'GET_GATE_WAY'
export const SET_GATE_WAY = 'SET_GATE_WAY'
export const GET_KEYS = 'GET_KEYS'
export const GET_LOGO = 'GET_LOGO'
export const SET_LOGO = 'SET_LOGO'
export const GET_PROFILE_DATA = 'GET_PROFILE_DATA'
export const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
export const SET_PASSWORD = 'SET_PASSWORD'
export const CREATE_SELL_LINK = 'CREATE_SELL_LINK'
export const GET_LIST_COLLECT = 'GET_LIST_COLLECT'
export const GET_LIST_TRANSACTION = 'GET_LIST_TRANSACTION'
export const GET_TRANSACTION_DETAIL = 'GET_TRANSACTION_DETAIL'
export const GET_SHOW_COLLECT = 'GET_SHOW_COLLECT'

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

export const getListCollect = (searchGeneral: any) => async (dispatch: any) => {
  try {
    const res = await dataService.get(`api/collect${searchGeneral}`)
    dispatch({
      type: GET_LIST_COLLECT,
      payload: res.data.data,
    })
  } catch (error) {}
}

export const editSellLink = (id: number) => async (dispatch: any) => {
  try {
    const { data } = await dataService.get(`http://localhost:8000/api/collect/edit/${id}`)
    return data.data
  } catch (error) {
    return false
  }
}

export const getListTransactionSite = (filter: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: 'LOADING_TRUE',
    })
    const res = await dataService.get(`api/transaction${filter}`)
    dispatch({
      type: 'LOADING_FALSE',
    })
    dispatch({
      type: GET_LIST_TRANSACTION,
      payload: res.data.data,
    })
  } catch (error) {}
}

export const getListTransactionSite2 = (filter: string) => async (dispatch: any) => {
  try {
    const { data } = await dataService.get(`api/transaction${filter}`)
    return data.data
  } catch (error) {
    return false
  }
}

export const sendEmail = async (email: string) => {
  try {
    const { data } = await dataService.post('/api/auth/password-reset', { email })
    return data.status
  } catch (error) {
    return false
  }
}

export const sendPasswords = async (data: any) => {
  try {
    const dataRes = await dataService.post('/api/auth/password-create', data)
    return dataRes.data
  } catch (error) {
    return false
  }
}

export const createTicket = async (data: any) => {
  try {
    const dataRes = await dataService.post('/api/ticket/create', data)
    return dataRes.data
  } catch (error) {
    return false
  }
}

export const getDepartments = async () => {
  try {
    const { data } = await dataService.get('/api/ticket/departments')
    return data.data
  } catch (error) {
    return false
  }
}

export const getPriorities = async () => {
  try {
    const { data } = await dataService.get('/api/ticket/priorities')
    return data.data
  } catch (error) {
    return false
  }
}

export const exportExcel = (filter: string) => async (dispatch: any) => {
  try {
    const { data } = await dataService.get(`api/transaction/export.xlsx/${filter}`)
    return data.data
  } catch (error) {
    return false
  }
}

export const getTransactionDetail = async (id: number) => {
  try {
    const res = await dataService.get(`/api/transaction/detail/${id}`)
    return res.data.data
  } catch (error) {
    return false
  }
}

export const sendTransactionReceiptLast = async (transaction: number, email: string) => {
  try {
    const res = await dataService.get(`/api/transaction/send/email/${transaction}/${email}`)
    return res
  } catch (error) {
    return false
  }
}

export const getShowCollect = (id: any) => async (dispatch: any) => {
  try {
    const res = await dataService.get(`/api/collect/show/${id}`)
    dispatch({
      type: GET_SHOW_COLLECT,
      payload: res.data,
    })
  } catch (error) {}
}

export const getTickets = async (data: any) => {
  try {
    const dataRes = await dataService.post('/api/ticket/list', data)
    return dataRes.data.data
  } catch (error) {
    return false
  }
}

export const closeTicket = async (id: number) => {
  try {
    const dataRes = await dataService.get(`/api/ticket/close/${id}`)
    return dataRes.data
  } catch (error) {
    return false
  }
}

export const reOpenTicket = async (id: number) => {
  try {
    const dataRes = await dataService.get(`/api/ticket/reopen/${id}`)
    return dataRes.data
  } catch (error) {
    return false
  }
}

export const detailTicket = async (id: number) => {
  try {
    const dataRes = await dataService.get(`/api/ticket/detail/${id}`)
    return dataRes.data.data
  } catch (error) {
    return false
  }
}

export const createTicketResponse = async (data: any) => {
  try {
    const dataRes = await dataService.post('/api/ticket/save', data)
    console.log(dataRes)
    return dataRes.data
  } catch (error) {
    return false
  }
}

export const getDeleteCollect = async (id: any) => {
  try {
    const dataRes = await dataService.get(`/api/collect/delete/${id}`)
    return dataRes.data
  } catch (error) {
    return false
  }
}

export const getDuplicateCollect = async (id: any) => {
  try {
    const dataRes = await dataService.get(`/api/collect/duplicate/${id}`)
    return dataRes.data
  } catch (error) {
    return false
  }
}
