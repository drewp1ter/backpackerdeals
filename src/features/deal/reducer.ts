import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'

export interface IDealState {
  nextAviableDate: Date | undefined
}

export type DealActionsTypes = ActionType<typeof actions>

const initialState: IDealState = {
  nextAviableDate: undefined,
}

export default (state: IDealState = initialState, action: DealActionsTypes): IDealState => {
  switch (action.type) {
    case getType(actions.onClickNextAviable):
      return {
        ...state,
        nextAviableDate: action.payload,
      }
    default:
      return state
  }
}
