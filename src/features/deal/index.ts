import * as actions from './actions'
import * as actionTypes from './actionTypes'
import * as components from './components'
import * as containers from './containers'

import dealReducer, { DealActionsTypes, IDealState } from './reducer'

export interface IDealActions {
  onClickNextAviable: typeof actions.onClickNextAviable
}
export { components, dealReducer, actionTypes, actions, IDealState, DealActionsTypes, containers }
