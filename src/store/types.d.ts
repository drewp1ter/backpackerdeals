import { PageActions } from 'features/page'
import { StateType } from 'typesafe-actions'
import rootReducer from './root-reducer'

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>
  export type RootAction = PageActions
}
