import { combineReducers } from 'redux'
import { dealReducer } from '../features/deal'
import { pageReducer } from '../features/page'
import { searchReducer } from '../features/search'

export default combineReducers({
  page: pageReducer,
  search: searchReducer,
  deal: dealReducer,
})
