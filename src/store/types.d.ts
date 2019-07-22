import { FiltersActionsTypes } from 'features/search'
import { SearchActionsTypes } from 'features/find'
import { PageActionsTypes } from 'features/page'
import { StateType } from 'typesafe-actions'
import rootReducer from './root-reducer'

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>
  export type RootAction = PageActionsTypes | SearchActionsTypes | FiltersActionsTypes
}
