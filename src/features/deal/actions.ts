import { createStandardAction } from 'typesafe-actions'
import * as types from './actionTypes'

export const onClickNextAviable = createStandardAction(types.ONCLICK_NEXT_AVIABLE_DATE)<Date>()