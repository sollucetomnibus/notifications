import { useCallback, useEffect } from 'react';

import {
  helperNotificationsWaitForTimeout,
} from '../../helpers';
import {
  actionUpdateVisibility,
  actionRemove,
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

  const itemIsAutoRemovable = useNotificationsSelector(selectNotificationsUIItems)
    .find((item) => item.id === id)?.isAutoRemovable === true;

  const {
    autoRemoveDelay,
    animationDurationAsMilliseconds,
  } = useNotificationsSelector(selectNotificationsInitOptions);

  const { itemIsVisible } = useNotificationsItemsVisibility({ id });

  const itemAutoRemoveHandler = useCallback(async (): Promise<void> => {
    if (itemIsAutoRemovable && itemIsVisible) {
      await helperNotificationsWaitForTimeout(autoRemoveDelay);

      dispatch(actionUpdateVisibility({
        id,
        isVisible: false,
      }));

      await helperNotificationsWaitForTimeout(animationDurationAsMilliseconds);

      dispatch(actionRemove({
        id,
      }));
    }
  }, [
    id,
    dispatch,
    itemIsVisible,
    itemIsAutoRemovable,
    autoRemoveDelay,
    animationDurationAsMilliseconds,
  ]);

  useEffect(() => {
    itemAutoRemoveHandler();
  }, [itemAutoRemoveHandler]);
};
