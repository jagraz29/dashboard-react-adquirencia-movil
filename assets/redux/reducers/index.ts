import { combineReducers } from 'redux'
import captchaReducer from './captchaReducer'
import propertyReducer from './propertyReducer'
import sellReducer from './sellReducer'

const rootReducer = combineReducers({
  captcha: captchaReducer,
  property: propertyReducer,
  sell: sellReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
