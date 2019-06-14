import { Reducer } from 'redux'
import { UiActionTypes } from './actionTypes'

export interface IUiState {
  readonly menuIsOpen: boolean
  readonly searchIsOpen: boolean
  readonly searchType: string
}

const initialState: IUiState = {
  menuIsOpen: false,
  searchIsOpen: false,
  searchType: "basic"
}

export const uiReducer: Reducer<IUiState> = (state = initialState, action) => {
  switch (action.type) {
    case UiActionTypes.MOBILE_MENU_CLOSED:
      return {
        ...state,
        menuIsOpen: false
      }
    case UiActionTypes.MOBILE_MENU_OPENED:
      return {
        ...state,
        menuIsOpen: true
      }
    case UiActionTypes.MOBILE_SEARCH_CLOSED:
      return {
        ...state,
        searchIsOpen: false
      }
    case UiActionTypes.MOBILE_SEARCH_OPENED:
      return {
        ...state,
        searchIsOpen: true
      }
    case UiActionTypes.SEARCH_TYPE_CHANGED:
      return {
        ...state,
        searchType: action.payload
      }

    default: return state
  }
}