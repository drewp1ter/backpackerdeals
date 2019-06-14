import { action } from 'typesafe-actions'
import { UiActionTypes } from './actionTypes'

export const openMenu = () => action(UiActionTypes.MOBILE_MENU_OPENED, true)
export const closeMenu = () =>  action(UiActionTypes.MOBILE_MENU_CLOSED, false)

export const openSearch = () => action(UiActionTypes.MOBILE_SEARCH_OPENED, true)
export const closeSearch = () => action(UiActionTypes.MOBILE_SEARCH_CLOSED, false)

export const changeSearchType = (type: string) => action(UiActionTypes.SEARCH_TYPE_CHANGED, type)