import { combineReducers } from 'redux'
import captchaReducer from './captchaReducer'
import propertyReducer from './propertyReducer'
import propertyPostReducer from './propertyPostReducer'
import gateWayGetReducer from './getGateWayReducer'
import setGateWayPostReducer from './gateWayPostReducer'
import getKeysGetReducer from './getKeysReducer'
import getLogoReducer from './getLogoReducer'
import setLogoReducer from './setLogoPostReducer'
import profileReducer from './profileReducer'
import sellReducer from './sellReducer'
import getListCollectReducer from './getListCollectReducer'
import getListTransactionReducer from './getListTransactionReducer'

const rootReducer = combineReducers({
  captcha: captchaReducer,
  property: propertyReducer,
  setProperty: propertyPostReducer,
  getGateWay: gateWayGetReducer,
  setGateWay: setGateWayPostReducer,
  getKeys: getKeysGetReducer,
  getLogo: getLogoReducer,
  setLogo: setLogoReducer,
  profile: profileReducer,
  sell: sellReducer,
  getListCollect: getListCollectReducer,
  getListTransaction: getListTransactionReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
