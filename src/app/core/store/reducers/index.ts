import {
  MetaReducer,
  ActionReducer,
  ActionReducerMap,
} from '@ngrx/store';
import { AppState } from '../../models';
import { environment } from '../../../../environments/environment';
import { modelReducer } from './model.reducer';
import { localSettingsReducer } from './local-settings.reducer';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    !environment.production && ((window as any).getState = (): any => state);

    return reducer(state, action);
  };
}

export const reducers: ActionReducerMap<AppState> = {
  model: modelReducer,
  localSettings: localSettingsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug] : [debug];
