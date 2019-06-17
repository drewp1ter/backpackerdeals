import * as actions from './actions'
import * as actionTypes from './actionTypes'
import * as components from './components'
import * as containers from './containers'

import { IPageState, PageActionsTypes, pageReducer, PageState } from './reducer'

export type Actions = typeof actions
export { components, containers, actionTypes, actions, pageReducer, IPageState, PageActionsTypes, PageState }
