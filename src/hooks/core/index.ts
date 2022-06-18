import React from 'react';

import {
  helperIsMotificationsPlacementTop,
  helperGenerateUUIDV4,
} from '../../helpers';
import {
  INotificationsInitState,
  INotificationsUIStateItem,
  ITodo,
} from '../../types';
import {
  useNotificationsGetInitState,
  useNotificationsSetInitState,
  useNotificationsGetUIState,
  useNotificationsGetUIUpdate,
} from '../states';

// TODO: Make these "useNotificationsActionsPublic" and separate to this hook
export const useNotifications = (
  initOptions: INotificationsInitState = {},
): ITodo => {
  const { initState } = useNotificationsGetInitState();
  const { uiState } = useNotificationsGetUIState();
  const { uiUpdate } = useNotificationsGetUIUpdate();

  useNotificationsSetInitState(initOptions);

  const add = React.useCallback((): void => {
    const id = helperGenerateUUIDV4();
    const item: INotificationsUIStateItem = {
      id,
      isVisible: false,
      isAutoRemovable: true,
    };

    if (helperIsMotificationsPlacementTop({
      placement: initState.placement,
    })) {
      const newState = [item, ...uiState];
      uiUpdate(newState);
    } else {
      const newState = [...uiState, item];
      uiUpdate(newState);
    }
  }, [
    uiState,
    uiUpdate,
    initState.placement,
  ]);

  return {
    add,
  };
};
