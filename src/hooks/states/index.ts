import React from 'react';

import {
  NotificationsContext,
  notificationsInitState,
} from '../../context';
import {
  INotificationsInitState,
  TNotificationsUIState,
} from '../../types';

export const useNotificationsGetInitState = (): {
  initState: Required<INotificationsInitState>;
} => {
  const { initState } = React.useContext(NotificationsContext);
  return {
    initState: {
      ...notificationsInitState,
      ...initState,
    },
  };
};

export const useNotificationsSetInitState = (
  initOptions: INotificationsInitState = {},
): void => {
  const {
    initState,
    initUpdate,
  } = React.useContext(NotificationsContext);

  React.useEffect(() => {
    initUpdate({ ...initState, ...initOptions });
  }, []);
};

export const useNotificationsGetUIState = (): {
  uiState: TNotificationsUIState;
} => {
  const { uiState } = React.useContext(NotificationsContext);
  return { uiState };
};
