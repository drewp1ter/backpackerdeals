import { FiltersActionsTypes } from 'features/search'
import { PageActionsTypes } from 'features/page'
import { SearchActionsTypes } from 'features/find'
import { StateType } from 'typesafe-actions'
import rootReducer from './root-reducer'

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>
  export type RootAction = PageActionsTypes | SearchActionsTypes | FiltersActionsTypes
}
