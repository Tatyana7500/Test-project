import { createSelector, createFeatureSelector } from '@ngrx/store';
import { getLanguages } from 'src/app/core/commonLogic/logic';
import { AppState, ModelState } from '../../models';
import { selectFilterWithDescription, selectFilterSelectedLanguage } from './local-settings.selectors';

export const selectModel = createFeatureSelector<AppState, ModelState>('model');

export const selectSearchResults = createSelector(selectModel, (model: ModelState) => model.searchResults);
export const selectInfoRepository = createSelector(selectModel, (model: ModelState) => model.infoRepository);

export const selectFilteredSearchResults = createSelector(
  selectSearchResults,
  selectFilterWithDescription,
  selectFilterSelectedLanguage,
  (searchResults, withDescription, language) => {
    let filteredResults = searchResults;

    if (language) {
      filteredResults = searchResults.filter(item => language === item.language);
    }

    if (withDescription) {
      filteredResults = filteredResults.filter(item => item.description);
    }

    return filteredResults;
  }
);

export const selectFilterLanguages = createSelector(
  selectFilteredSearchResults,
  (searchResults) => getLanguages(searchResults)
);
