import { PageActionsTypes } from 'features/page'
import { SearchActionsTypes } from 'features/search'
import { StateType } from 'typesafe-actions'
import rootReducer from './root-reducer'

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>
  export type RootAction = PageActionsTypes | SearchActionsTypes
}
