import { Epic } from 'redux-observable'
import { combineEpics } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, filter, map, pluck, switchMap, timeout } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'

import { contextSearch } from './actions'
import * as apiEndpoints from './apiEndpoints'
import { ContextSearchResult, IContextSearchResult } from './models'

export const contextSearchAction: Epic = (
  action$,
  // tslint:disable-next-line:variable-name
  _state$,
  request
) =>
  action$.pipe(
    filter(isActionOf(contextSearch.request)),
    switchMap(action =>
      request({
        url: apiEndpoints.contextSearch(action.payload),
        method: 'GET',
      }).pipe(
        timeout(10000),
        pluck('response'),
        map((res: any) => res.map((searchResult: IContextSearchResult) => ContextSearchResult.create(searchResult))),
        map(contextSearch.success),
        catchError(error => of(contextSearch.failure(error.response ? { message: error.response.message, status: error.status } : error)))
      )
    )
  )

export default combineEpics(contextSearchAction)
