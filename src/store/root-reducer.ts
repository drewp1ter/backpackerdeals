import { combineReducers } from 'redux'
import { searchReducer } from '../features/find'
import { pageReducer } from '../features/page'
import { filtersReducer } from '../features/search'

export default combineReducers({
  page: pageReducer,
  search: searchReducer,
  filters: filtersReducer
})
