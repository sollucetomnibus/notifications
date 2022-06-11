import React from 'react';

import {
  NotificationsContext,
} from '../../context';
import {
  uuidV4,
  isMotificationsPlacementTop,
} from '../../helpers';
import {
  INotificationsInitState,
  INotificationsUIStateItem,
  IUseNotificationsUIMethodsReturn,
} from '../../types';
import {
  useNotificationsGetInitState,
  useNotificationsSetInitState,
} from '../states';

export const useNotificationsUIMethods = (
  initOptions: INotificationsInitState = {},
): IUseNotificationsUIMethodsReturn => {
  const { uiState, uiUpdate } = React.useContext(NotificationsContext);
  const { initState } = useNotificationsGetInitState();

  useNotificationsSetInitState(initOptions);

  const add = (): void => {
    const id = uuidV4();
    const item: INotificationsUIStateItem = { id };

    if (isMotificationsPlacementTop({
      placement: initState.placement,
    })) {
      uiUpdate([item, ...uiState]);
    } else {
      uiUpdate([...uiState, item]);
    }
  };

  const remove = (id: string): void => {
    uiUpdate([...uiState.filter((item) => item.id !== id)]);
  };

  return { add, remove };
};
