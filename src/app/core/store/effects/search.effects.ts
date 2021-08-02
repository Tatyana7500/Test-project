import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpService } from '../../services';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, debounceTime, withLatestFrom, mergeMap } from 'rxjs/operators';
import { RepositoryActions, SearchActions, LocalSettingsActions } from '../actions';
import { SearchResultsResponse, InfoRepositoryResponse } from '../../models';
import { selectSearchString } from '../selectors';

@Injectable()
export class SearchEffects {
  constructor(
    private store: Store,
    private actions$: Actions,
    private httpService: HttpService
  ) {}

  searchByGithub$ = createEffect(() => this.actions$.pipe(
    ofType(SearchActions.sendGetRequestSearchByGithub),
    map(action => `https://api.github.com/search/repositories?q=${action.payload}`),
    debounceTime(500),
    switchMap(url =>
      this.httpService.sendGetRequest(url).pipe(
        map((searchResults: SearchResultsResponse) =>
            SearchActions.setSearchResults({ payload: searchResults.items }),
        catchError((error) => of(SearchActions.error(error)))),
      )
    )
  ), { useEffectsErrorHandler: false });

  setSearchResults$ = createEffect(() => this.actions$.pipe(
    ofType(SearchActions.setSearchResults),
    map(action => action.payload),
    withLatestFrom(
      this.store.pipe(select(selectSearchString)),
    ),
    mergeMap(async ([searchResults, searchString]) => {
      if (searchString) {
        this.store.dispatch(SearchActions.setSearchResultsStore({ payload: searchResults }));
        this.store.dispatch(LocalSettingsActions.setIsLoaderStore({ payload: false }));
      }
    }),
  ),{ dispatch: false });

  infoByRepository$ = createEffect(() => this.actions$.pipe(
    ofType(RepositoryActions.sendGetRequestInfoByRepository),
    switchMap(action =>
      this.httpService.sendGetRequest(action.payload).pipe(
        map((infoRepository: InfoRepositoryResponse) =>
            RepositoryActions.setInfoRepositoryStore({ payload: infoRepository }),
          catchError((error) => of(SearchActions.error(error)))),
      )
    )
  ), { useEffectsErrorHandler: false });

  error$ = createEffect(() => this.actions$.pipe(
    ofType(SearchActions.error),
    map(action => action.payload),
    map( error => console.warn('Error', error))
  ), { dispatch: false });
}
