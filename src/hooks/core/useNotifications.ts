import {
  helperGenerateUUIDV4,
  helperIsMotificationsPlacementTop,
} from '../../helpers';
import {
  actionNotificationsItemsInsertAfter,
  actionNotificationsItemsInsertBefore,
  useNotificationsDispatch,
  useNotificationsSelector,
  selectNotificationsInitOptions,
} from '../../redux';
import type {
  INotificationsStateInitOptions,
  INotificationsStateUIItem,
} from '../../types';
import {
  useNotificationsInitOptionsExtend,
} from './useNotificationsInitOptionsExtend';

export const useNotifications = (
  initOptions: INotificationsStateInitOptions = {},
) => {
  const dispatch = useNotificationsDispatch();
  const {
    placement,
  } = useNotificationsSelector(selectNotificationsInitOptions);

  useNotificationsInitOptionsExtend(initOptions);

  const add = (): void => {
    const item: INotificationsStateUIItem = {
      id: helperGenerateUUIDV4(),
      isAutoRemovable: true,
      isVisible: false,
    };

    if (helperIsMotificationsPlacementTop({
      placement,
    })) {
      dispatch(actionNotificationsItemsInsertBefore(item));
    } else {
      dispatch(actionNotificationsItemsInsertAfter(item));
    }
  };

  return {
    add,
  };
};
