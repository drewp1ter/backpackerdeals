import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'
import { IContextSearch } from './models'

export interface ISearchState {
  filtersAreOpened: boolean
  searchIsOpen: boolean
  searchType: 'basic' | 'advanced'
  fetching: boolean
  error: IRequestError
  contextSearch: IContextSearch[]
}

export type SearchActionsTypes = ActionType<typeof actions>

const initialState: ISearchState = {
  filtersAreOpened: false,
  fetching: false,
  searchIsOpen: false,
  searchType: 'basic',
  error: { message: '', status: 0 },
  contextSearch: [],
}

export default (state: ISearchState = initialState, action: SearchActionsTypes): ISearchState => {
  switch (action.type) {
    case getType(actions.closeSearch):
      return {
        ...state,
        searchIsOpen: false,
      }
    case getType(actions.openSearch):
      return {
        ...state,
        searchIsOpen: true,
      }
    case getType(actions.changeSearchType):
      return {
        ...state,
        searchType: action.payload,
      }
    case getType(actions.closeFilters):
      return {
        ...state,
        filtersAreOpened: false,
      }
    case getType(actions.openFilters):
      return {
        ...state,
        filtersAreOpened: true,
      }
    case getType(actions.contextSearch.request):
      return {
        ...state,
        fetching: true,
      }
    case getType(actions.contextSearch.success):
      return {
        ...state,
        fetching: false,
        contextSearch: action.payload,
      }
    case getType(actions.contextSearch.failure):
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }

    default:
      return state
  }
}
