import React from 'react';

import {
  helperNotificationsWaitForTimeout,
} from '../../helpers';
import {
  selectNotificationsUIItems,
  useNotificationsDispatch,
  useNotificationsSelector,
  actionUpdateVisibility,
} from '../../redux';
import {
  IUseNotificationsItemsVisibilityProps,
  IUseNotificationsItemsVisibilityReturn,
} from '../../types';

export const useNotificationsItemsVisibility = ({
  id,
}: IUseNotificationsItemsVisibilityProps): IUseNotificationsItemsVisibilityReturn => {
  const refIsVisible = React.useRef<boolean>(false);
  const dispatch = useNotificationsDispatch();
  const itemIsVisible = useNotificationsSelector(selectNotificationsUIItems)
    .find((item) => item.id === id)?.isVisible === true;

  const itemVisibilityHandler = React.useCallback(async (): Promise<void> => {
    if (!refIsVisible.current) {
      refIsVisible.current = true;

      await helperNotificationsWaitForTimeout(100);

      dispatch(actionUpdateVisibility({
        id,
        isVisible: true,
      }));
    }
  }, [
    id,
    dispatch,
  ]);

  React.useEffect(() => {
    itemVisibilityHandler();
  }, [itemVisibilityHandler]);

  return { itemIsVisible };
};
