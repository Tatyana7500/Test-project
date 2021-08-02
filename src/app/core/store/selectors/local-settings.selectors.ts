import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState, UserLocalSettings } from '../../models';

export const selectLocalSettings = createFeatureSelector<AppState, UserLocalSettings>('localSettings');

export const selectSearchString = createSelector(selectLocalSettings, (localSettings: UserLocalSettings) => localSettings.search);
export const selectIsLoaderSearch = createSelector(selectLocalSettings,(localSettings: UserLocalSettings) => localSettings.isLoaderSearch);
export const selectFilterWithDescription = createSelector(selectLocalSettings, (localSettings: UserLocalSettings) => localSettings.filters.withDescription);
export const selectFilterSelectedLanguage = createSelector(selectLocalSettings, (localSettings: UserLocalSettings) => localSettings.filters.selectedLanguage);
