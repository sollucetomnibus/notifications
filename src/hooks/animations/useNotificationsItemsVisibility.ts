import { useCallback, useEffect, useRef } from 'react';

import {
  helperNotificationsWaitForTimeout,
} from '../../helpers';
import {
  selectNotificationsUIItems,
  useNotificationsDispatch,
  useNotificationsSelector,
  actionNotificationsItemsUpdateVisibility,
} from '../../redux';
import {
  IUseNotificationsItemsVisibilityProps,
  IUseNotificationsItemsVisibilityReturn,
} from '../../types';

export const useNotificationsItemsVisibility = ({
  id,
}: IUseNotificationsItemsVisibilityProps): IUseNotificationsItemsVisibilityReturn => {
  const refIsVisible = useRef<boolean>(false);
  const dispatch = useNotificationsDispatch();
  const isItemVisible = useNotificationsSelector(selectNotificationsUIItems)
    .find((item) => item.id === id)?.isVisible === true;

  const itemVisibilityHandler = useCallback(async (): Promise<void> => {
    if (!refIsVisible.current) {
      refIsVisible.current = true;

      await helperNotificationsWaitForTimeout(100);

      dispatch(actionNotificationsItemsUpdateVisibility({
        id,
        isVisible: true,
      }));
    }
  }, [
    id,
    dispatch,
  ]);

  useEffect(() => {
    itemVisibilityHandler();
  }, [itemVisibilityHandler]);

  return { isItemVisible };
};
