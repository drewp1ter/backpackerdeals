import * as actions from './actions'
import * as actionTypes from './actionTypes'
import * as components from './components'

import searchReducer, { ISearchState, SearchActionsTypes } from './reducer'

export type SearchActions = typeof actions
export { components, actionTypes, actions, searchReducer, ISearchState, SearchActionsTypes }
