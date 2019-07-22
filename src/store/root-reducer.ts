import { combineReducers } from 'redux'
import { pageReducer } from '../features/page'
import { searchReducer } from '../features/search'

export default combineReducers({
  page: pageReducer,
  search: searchReducer,
})
