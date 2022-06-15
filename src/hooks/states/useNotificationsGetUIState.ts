import React from 'react';

import {
  NotificationsContext,
} from '../../context';
import {
  TNotificationsUIState,
} from '../../types';

export const useNotificationsGetUIState = (): {
  uiState: TNotificationsUIState;
} => {
  const { uiState } = React.useContext(NotificationsContext);
  return { uiState };
};
