import { createReducer, on } from '@ngrx/store';
import { UserLocalSettings } from '../../models';
import { LocalSettingsActions } from '../actions';

export const initialState: UserLocalSettings = {
  search: '',
  filters: {
    withDescription: true,
    selectedLanguage: '',
  }
};

const _localSettingsReducer = createReducer(
  initialState,
  on(LocalSettingsActions.setSearchStore, (state, { payload }) => ({
    ...state,
    search: payload,
  })),
  on(LocalSettingsActions.toggleWithDescriptionStore, (state) => ({
    ...state,
    filters: {
      ...state.filters,
      withDescription: !state.filters.withDescription,
    },
  })),
  on(LocalSettingsActions.changeSelectedLanguageStore, (state, { payload }) => ({
    ...state,
    filters: {
      ...state.filters,
      selectedLanguage: payload,
    },
  })),
);

export function localSettingsReducer(state: any, action: any) {
  return _localSettingsReducer(state, action);
}
