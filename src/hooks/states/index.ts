import React from 'react';

import {
  NotificationsContext,
  INotificationsUIState,
} from '../../context';

export const useNotificationsUIState = (): {
  uiState: INotificationsUIState;
} => {
  const { uiState } = React.useContext(NotificationsContext);
  return { uiState };
};
