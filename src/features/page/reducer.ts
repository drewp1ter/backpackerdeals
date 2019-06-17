import { ActionType, getType, StateType } from 'typesafe-actions'
import * as actions from './actions'

export interface IPageState {
  readonly menuIsOpen: boolean
  readonly searchIsOpen: boolean
  readonly searchType: string
}

export type PageActionsTypes = ActionType<typeof actions>

const initialState: IPageState = {
  menuIsOpen: false,
  searchIsOpen: false,
  searchType: 'basic',
}

export const pageReducer = (state: IPageState = initialState, action: PageActionsTypes) => {
  switch (action.type) {
    case getType(actions.closeMenu):
      return {
        ...state,
        menuIsOpen: false,
      }
    case getType(actions.openMenu):
      return {
        ...state,
        menuIsOpen: true,
      }
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

export type PageState = StateType<typeof pageReducer>
