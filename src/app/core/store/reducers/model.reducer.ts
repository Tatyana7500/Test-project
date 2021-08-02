import { createReducer, on } from '@ngrx/store';
import { ModelState  } from '../../models';
import { SearchActions, RepositoryActions } from 'src/app/core/store/actions';

export const initialState: ModelState = {
  searchResults: [],
  infoRepository: {},
};

const _modelReducer = createReducer(
  initialState,
  on(SearchActions.setSearchResultsStore, (state, { payload }) => ({
    ...state,
    searchResults: payload,
  })),
  on(RepositoryActions.setInfoRepositoryStore, (state, { payload }) => ({
    ...state,
    infoRepository: payload,
  })),
);

export function modelReducer(state: any, action: any) {
  return _modelReducer(state, action);
}
