import * as actions from './actions'
import * as actionTypes from './actionTypes'
import * as components from './components'
import * as containers from './containers'
import searchEpics from './epics'

import searchReducer, { ISearchState, SearchActionsTypes } from './reducer'

export interface ISearchActions {
  openFilters: typeof actions.openFilters
  closeFilters: typeof actions.closeFilters
  openSearch: typeof actions.openSearch
  closeSearch: typeof actions.closeSearch
  changeSearchType: typeof actions.changeSearchType
  contextSearch: typeof actions.contextSearch.request
}
export { components, searchReducer, containers, actionTypes, actions, ISearchState, SearchActionsTypes, searchEpics }
