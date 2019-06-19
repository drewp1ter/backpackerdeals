import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'

import Types from 'Types'
// import rootEpic from './root-epic'
import services from '../services'
import rootReducer from './root-reducer'

const initialState = {}

export default function initStore() {
  const epicMiddleware = createEpicMiddleware<Types.RootAction, Types.RootAction, Types.RootState>({
    dependencies: services,
  })
  const composeEnhancers = composeWithDevTools({})
  const middlewares = [epicMiddleware]
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  const store = createStore(rootReducer, initialState, enhancer)
  // epicMiddleware.run(rootEpic)
  return store
}
