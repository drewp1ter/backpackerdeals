import { combineReducers } from 'redux'
import { pageReducer } from '../features/page'
import { searchReducer } from '../features/search'
import { filtersReducer } from '../features/catalog'

export default combineReducers({
  page: pageReducer,
  search: searchReducer,
  filters: filtersReducer
})
