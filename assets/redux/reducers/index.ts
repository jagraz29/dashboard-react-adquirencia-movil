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
import profilePostReducer from './profilePostReducer'
import setPasswordReducer from './setPasswordReducer'
import sellReducer from './sellReducer'

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
  profilePost: profilePostReducer,
  setPassword: setPasswordReducer,
  sell: sellReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
