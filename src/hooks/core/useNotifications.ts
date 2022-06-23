import {
  helperGenerateUUIDV4,
} from '../../helpers';
import {
  useNotificationsDispatch,
  actionNotificationsItemsInsertBefore,
} from '../../redux';
import {
  INotificationsStateInitOptions,
} from '../../types';
import {
  useNotificationsInitOptionsExtend,
} from './useNotificationsInitOptionsExtend';

export const useNotifications = (
  initOptions: INotificationsStateInitOptions = {},
) => {
  const dispatch = useNotificationsDispatch();

  useNotificationsInitOptionsExtend(initOptions);

  const add = (): void => {
    dispatch(actionNotificationsItemsInsertBefore({
      id: helperGenerateUUIDV4(),
      isAutoRemovable: true,
      isVisible: false,
    }));
  };

  return {
    add,
  };
};
