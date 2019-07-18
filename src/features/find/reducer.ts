import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'

export interface ISearchState {
  readonly searchIsOpen: boolean
  readonly searchType: 'basic' | 'advanced'
}

export type SearchActionsTypes = ActionType<typeof actions>

const initialState: ISearchState = {
  searchIsOpen: false,
  searchType: 'basic',
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

    default:
      return state
  }
}
