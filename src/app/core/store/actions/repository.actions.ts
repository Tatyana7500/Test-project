import { createAction, props } from '@ngrx/store';

export const setInfoRepositoryStore = createAction('set_info_repository_store', props<{ payload: {} }>());
export const sendGetRequestInfoByRepository = createAction('send_get_request_info_by_repository', props<{ payload: string }>());
