import { searchEpics } from 'features/search'
import { combineEpics } from 'redux-observable'

export default combineEpics(searchEpics)
