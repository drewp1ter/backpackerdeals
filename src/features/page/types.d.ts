import * as actions from './actions'

declare module 'Page' {
  export type Actions = typeof actions
}