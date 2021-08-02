import { createAction, props } from '@ngrx/store';

export const setSearchStore = createAction('set_search_store', props<{ payload: string }>());
export const toggleWithDescriptionStore = createAction('toggle_with_description_store');
export const changeSelectedLanguageStore = createAction('change_selected_language_store', props<{ payload: string }>());
