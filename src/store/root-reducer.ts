import { combineReducers } from 'redux'
import { filtersReducer } from '../features/catalog'
import { pageReducer } from '../features/page'
import { searchReducer } from '../features/search'

export default combineReducers({
  page: pageReducer,
  search: searchReducer,
  filters: filtersReducer
})
