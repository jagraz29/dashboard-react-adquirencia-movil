import { combineReducers } from 'redux'
import captchaReducer from './captchaReducer'
import propertyReducer from './propertyReducer'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
  captcha: captchaReducer,
  property: propertyReducer,
  profile: profileReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
