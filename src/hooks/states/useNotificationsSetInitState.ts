import React from 'react';

import {
  NotificationsContext,
} from '../../context';
import {
  INotificationsInitState,
} from '../../types';

export const useNotificationsSetInitState = (
  initOptions: INotificationsInitState = {},
): void => {
  const refInitCanBeExtended = React.useRef<boolean>(true);
  const { initState, initUpdate } = React.useContext(NotificationsContext);

  React.useEffect(() => {
    if (refInitCanBeExtended.current && Object.keys(initOptions).length > 0) {
      initUpdate({ ...initState, ...initOptions });
      refInitCanBeExtended.current = false;
    }

    return () => {
      refInitCanBeExtended.current = false;
    };
  }, [
    initUpdate,
    initState,
    initOptions,
  ]);
};
