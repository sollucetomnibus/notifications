import React from 'react';

import {
  NotificationsContext,
} from '../../context';
import {
  TNotificationsUIUpdate,
} from '../../types';

export const useNotificationsGetUIUpdate = (): {
  uiUpdate: TNotificationsUIUpdate;
} => {
  const { uiUpdate } = React.useContext(NotificationsContext);
  return { uiUpdate };
};
