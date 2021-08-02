import { ModelState } from './model.model';
import { UserLocalSettings } from './local-settings.model';

export interface AppState {
  model?: ModelState;
  localSettings?: UserLocalSettings;
}
