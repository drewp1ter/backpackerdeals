import { combineReducers } from 'redux'
import { pageReducer } from '../features/page'

export default combineReducers({
  ui: pageReducer,
})
