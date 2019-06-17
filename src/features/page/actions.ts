import { createStandardAction } from 'typesafe-actions'
import * as actionTypes from './actionTypes'

export const openMenu = createStandardAction(actionTypes.MOBILE_MENU_OPEN)<undefined>()
export const closeMenu = createStandardAction(actionTypes.MOBILE_MENU_CLOSE)<undefined>()