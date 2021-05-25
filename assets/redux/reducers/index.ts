import { combineReducers } from 'redux'
import captchaReducer from './captchaReducer'

const rootReducer = combineReducers({
  captcha: captchaReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
