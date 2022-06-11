import {
  INotificationsInitState,
  IUseNotificationsReturn,
} from '../types';
import {
  useNotificationsUIMethods,
} from './methods';

export {
  useNotificationsUIWrapperAutoScroll,
} from './animations';
export {
  useNotificationsUIMethods,
} from './methods';
export {
  useNotificationsGetInitState,
  useNotificationsSetInitState,
  useNotificationsGetUIState,
} from './states';

export const useNotifications = (
  initOptions: INotificationsInitState = {},
): IUseNotificationsReturn => ({
  ...useNotificationsUIMethods(initOptions),
});
