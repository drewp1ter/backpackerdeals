import { combineReducers } from 'redux'
import { filtersReducer } from '../features/search'
import { searchReducer } from '../features/find'
import { pageReducer } from '../features/page'

export default combineReducers({
  page: pageReducer,
  search: searchReducer,
  filters: filtersReducer
})
