import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpService } from '../../services';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, debounceTime, withLatestFrom, mergeMap } from 'rxjs/operators';
import { RepositoryActions, SearchActions } from '../actions';
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
        catchError(() => of(SearchActions.searchError()))),
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
        this.store.dispatch(SearchActions.setSearchResultsStore({payload: searchResults}));
      }
    }),
  ),{ dispatch: false });

  infoByRepository$ = createEffect(() => this.actions$.pipe(
    ofType(RepositoryActions.sendGetRequestInfoByRepository),
    switchMap(action =>
      this.httpService.sendGetRequest(action.payload).pipe(
        map((infoRepository: InfoRepositoryResponse) =>
            RepositoryActions.setInfoRepositoryStore({ payload: infoRepository }),
          catchError(() => of(SearchActions.searchError()))),
      )
    )
  ), { useEffectsErrorHandler: false });
}
