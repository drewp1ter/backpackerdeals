import { createAsyncAction, createStandardAction } from 'typesafe-actions'
import * as types from './actionTypes'
import { IContextSearch } from './models'

export const openFilters = createStandardAction(types.FILTERS_MENU_OPEN)<undefined>()
export const closeFilters = createStandardAction(types.FILTERS_MENU_CLOSE)<undefined>()
export const openSearch = createStandardAction(types.MOBILE_SEARCH_OPEN)<undefined>()
export const closeSearch = createStandardAction(types.MOBILE_SEARCH_CLOSE)<undefined>()

export const changeSearchType = createStandardAction(types.SEARCH_TYPE_CHANGE)<'advanced' | 'basic'>()

export const contextSearch = createAsyncAction(types.CONTEXT_SEARCH_REQUEST, types.CONTEXT_SEARCH_SUCCESS, types.CONTEXT_SEARCH_FAILURE)<
  string,
  IContextSearch[],
  IRequestError
>()