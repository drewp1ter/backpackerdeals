export enum ActionType {
  setPage = 'SET_PAGE',
  setView = 'SET_VIEW',
  toggleDec = 'TOGGLE_DEC',
}

export enum ViewType {
  tile = 'tile',
  list = 'list',
}

export interface IState {
  page: number
  view: ViewType
  sortDec: boolean
}

export interface IAction {
  type: ActionType
  payload?: any
}

export const initialState = {
  page: 1,
  view: ViewType.tile,
  sortDec: true,
}

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.setPage:
      return { ...state, page: action.payload }
    case ActionType.setView:
      return { ...state, view: action.payload }
    case ActionType.toggleDec:
      return { ...state, sortDec: !state.sortDec }
    default:
      return state
  }
}

export default reducer