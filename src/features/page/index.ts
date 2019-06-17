import * as actions from './actions'
import * as actionTypes from './actionTypes'
import * as components from './components'
import * as containers from './containers'

import { IPageState, PageActionsTypes } from './reducer'

export type PageActions = typeof actions
export { components, containers, actionTypes, actions, IPageState, PageActionsTypes }
