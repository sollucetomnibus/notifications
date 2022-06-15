import React from 'react';

import {
  NotificationsContext,
  notificationsInitState,
} from '../../context';
import {
  INotificationsInitState,
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
