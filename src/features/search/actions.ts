import { createStandardAction } from 'typesafe-actions'
import * as actionTypes from './actionTypes'

export const openFilters = createStandardAction(actionTypes.FILTERS_MENU_OPEN)<undefined>()
export const closeFilters = createStandardAction(actionTypes.FILTERS_MENU_CLOSE)<undefined>()