import React from 'react';

import {
  helperNotificationsWaitForTimeout,
} from '../../helpers';
import {
  IUseNotificationsItemsVisibilityProps,
  IUseNotificationsItemsVisibilityReturn,
} from '../../types';
import {
  useNotificationsActionsPrivate,
} from '../actions';
import {
  useNotificationsGetUIState,
} from '../states';

export const useNotificationsItemsVisibility = ({
  id,
}: IUseNotificationsItemsVisibilityProps): IUseNotificationsItemsVisibilityReturn => {
  const refIsVisible = React.useRef<boolean>(false);
  const isVisible = useNotificationsGetUIState().uiState
    .find((item) => item.id === id)?.isVisible === true;

  const {
    actionNotificationsItemUpdateVisibility,
  } = useNotificationsActionsPrivate();

  const itemVisibilityHandler = React.useCallback(async (): Promise<void> => {
    if (!refIsVisible.current) {
      refIsVisible.current = true;

      await helperNotificationsWaitForTimeout(100);

      actionNotificationsItemUpdateVisibility({
        id,
        isVisible: true,
      });
    }
  }, [
    id,
    actionNotificationsItemUpdateVisibility,
  ]);

  React.useEffect(() => {
    itemVisibilityHandler();
  }, [itemVisibilityHandler]);

  return { isVisible };
};
