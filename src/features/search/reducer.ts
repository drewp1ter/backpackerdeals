import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'

export interface IFiltersState {
  readonly filtersAreOpened: boolean
}

export type FiltersActionsTypes = ActionType<typeof actions>

const initialState: IFiltersState = {
  filtersAreOpened: false,
}

export default (state: IFiltersState = initialState, action: FiltersActionsTypes): IFiltersState => {
  switch (action.type) {
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

    default:
      return state
  }
}
