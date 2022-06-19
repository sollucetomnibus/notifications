import {
  helperGenerateUUIDV4,
} from '../../helpers';
import {
  useNotificationsDispatch,
  actionAddBefore,
} from '../../redux';
import {
  INotificationsStateInitOptions,
} from '../../types';
import {
  useNotificationsInitExtend,
} from './useNotificationsInitExtend';

export const useNotifications = (
  initOptions: INotificationsStateInitOptions = {},
) => {
  useNotificationsInitExtend(initOptions);

  const dispatch = useNotificationsDispatch();

  const add = (): void => {
    dispatch(actionAddBefore({
      id: helperGenerateUUIDV4(),
      isAutoRemovable: true,
      isVisible: false,
    }));
  };

  return {
    add,
  };
};
