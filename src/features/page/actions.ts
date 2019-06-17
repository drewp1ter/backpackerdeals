import { createStandardAction } from 'typesafe-actions'
import * as actionTypes from './actionTypes'

export const openMenu = createStandardAction(actionTypes.MOBILE_MENU_OPENED)<undefined>()
export const closeMenu = createStandardAction(actionTypes.MOBILE_MENU_CLOSED)<undefined>()

export const openSearch = createStandardAction(actionTypes.MOBILE_SEARCH_OPENED)<undefined>()
export const closeSearch = createStandardAction(actionTypes.MOBILE_SEARCH_CLOSED)<undefined>()

export const changeSearchType = createStandardAction(actionTypes.SEARCH_TYPE_CHANGED)<'advanced' | 'basic'>()