import { combineReducers } from 'redux'
import { uiReducer, IUiState } from './ui'

export interface IAppState {
  ui: IUiState
}

export const rootReducer = combineReducers({ 
  ui: uiReducer 
})