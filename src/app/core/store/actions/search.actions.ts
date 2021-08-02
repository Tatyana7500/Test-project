import {  SearchGithub } from '../../models';
import { createAction, props } from '@ngrx/store';

export const searchError = createAction('search_error');
export const setSearchResults = createAction('set_search_results', props<{ payload: SearchGithub[] }>());
export const setSearchResultsStore = createAction('set_search_results_store', props<{ payload: SearchGithub[] }>());
export const sendGetRequestSearchByGithub = createAction('send_get_request_search_by_github', props<{ payload: string }>());
