import { createStandardAction } from 'typesafe-actions'
import * as actionTypes from './actionTypes'

export const openSearch = createStandardAction(actionTypes.MOBILE_SEARCH_OPEN)<undefined>()
export const closeSearch = createStandardAction(actionTypes.MOBILE_SEARCH_CLOSE)<undefined>()

export const changeSearchType = createStandardAction(actionTypes.SEARCH_TYPE_CHANGE)<'advanced' | 'basic'>()