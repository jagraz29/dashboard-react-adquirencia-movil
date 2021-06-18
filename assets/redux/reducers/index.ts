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
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
