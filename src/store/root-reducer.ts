import { combineReducers } from 'redux'
import { IUiState, uiReducer } from './ui'

export interface IAppState {
  ui: IUiState
}

export const rootReducer = combineReducers({ 
  ui: uiReducer 
})