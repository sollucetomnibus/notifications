import { useCallback, useEffect } from 'react';

import {
  helperNotificationsWaitForTimeout,
} from '../../helpers';
import {
  actionNotificationsItemsUpdateVisibility,
  actionNotificationsItemsRemove,
  selectNotificationsInitOptions,
  selectNotificationsUIItems,
  useNotificationsDispatch,
  useNotificationsSelector,
} from '../../redux';
import {
  IUseNotificationsItemsRemoveAutoProps,
} from '../../types';
import {
  useNotificationsItemsVisibility,
} from '.';

export const useNotificationsItemsRemoveAuto = ({
  id,
}: IUseNotificationsItemsRemoveAutoProps): void => {
  const dispatch = useNotificationsDispatch();

  const isItemAutoRemovable = useNotificationsSelector(selectNotificationsUIItems)
    .find((item) => item.id === id)?.isAutoRemovable === true;

  const {
    autoRemoveDelay,
    animationDurationAsMilliseconds,
  } = useNotificationsSelector(selectNotificationsInitOptions);

  const { isItemVisible } = useNotificationsItemsVisibility({ id });

  const itemRemoveAutoHandler = useCallback(async (): Promise<void> => {
    if (isItemAutoRemovable && isItemVisible) {
      await helperNotificationsWaitForTimeout(autoRemoveDelay);

      dispatch(actionNotificationsItemsUpdateVisibility({
        id,
        isVisible: false,
      }));

      await helperNotificationsWaitForTimeout(animationDurationAsMilliseconds);

      dispatch(actionNotificationsItemsRemove({
        id,
      }));
    }
  }, [
    id,
    dispatch,
    isItemVisible,
    isItemAutoRemovable,
    autoRemoveDelay,
    animationDurationAsMilliseconds,
  ]);

  useEffect(() => {
    itemRemoveAutoHandler();
  }, [itemRemoveAutoHandler]);
};
