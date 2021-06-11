import { combineReducers } from 'redux'
import captchaReducer from './captchaReducer'
import propertyReducer from './propertyReducer'

const rootReducer = combineReducers({
  captcha: captchaReducer,
  property: propertyReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
