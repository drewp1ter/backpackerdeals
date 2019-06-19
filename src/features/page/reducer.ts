import { ActionType, getType } from 'typesafe-actions'
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

export default (state: IPageState = initialState, action: PageActionsTypes): IPageState => {
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

    default:
      return state
  }
}
