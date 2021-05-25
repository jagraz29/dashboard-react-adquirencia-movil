import { applyMiddleware, createStore, compose, Store, StoreEnhancer } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/'

export default function configureStore(preloadedState = {}) {
  const middlewares = [thunkMiddleware] // loggerMiddleware
  const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares))
  const enhancers = [middlewareEnhancer]
  const composedEnhancers: StoreEnhancer = compose(...enhancers)
  const store: Store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}
