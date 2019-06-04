export enum ActionType {
  setPage = 'SET_PAGE',
  nextPage = 'NEXT_PAGE',
  prevPage = 'PREV_PAGE',
  setView = 'SET_VIEW',
  toggleDec = 'TOGGLE_DEC',
}

export enum ViewType {
  tile = 'reversed',
  list = 'horizontal',
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
    case ActionType.nextPage:
      return { ...state, page: state.page + 1 }
    case ActionType.prevPage:
      return { ...state, page: state.page -1 }
    case ActionType.setView:
      return { ...state, view: action.payload }
    case ActionType.toggleDec:
      return { ...state, sortDec: !state.sortDec }
    default:
      return state
  }
}

export default reducer
