import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import Types from 'Types'
// import rootEpic from './root-epic'
import services from '../services'
import rootReducer from './root-reducer'

export default function initStore(initState?: object) {
  const epicMiddleware = createEpicMiddleware<Types.RootAction, Types.RootAction, Types.RootState>({
    dependencies: services,
  })
  const middlewares = [epicMiddleware]
  const enhancer = applyMiddleware(...middlewares)
  const store = createStore(rootReducer, initState!, enhancer)
  // epicMiddleware.run(rootEpic)
  return store
}




