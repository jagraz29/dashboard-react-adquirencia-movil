import { DataService } from '../../services/dataService'
export const SET_STATE_GLOBAL = 'SET_STATE_GLOBAL'
export const GET_STATE_USER = 'GET_STATE_USER'

const dataService = new DataService()

export const setToken = (token: any) => (dispatch: any) => {
  dispatch({
    type: SET_STATE_GLOBAL,
    payload: token,
  })
}

export const getDataUser = () => async (dispatch: any) =>{
  try{
    const res = await dataService.get("http://localhost:8000/api/client/info");
    dispatch({
      type: GET_STATE_USER,
      payload: res.data,
    })
  }catch(error){

  }
}
