import React from 'react';

import {
  useNotificationsDispatch,
  actionExtendOptions,
} from '../../redux';
import {
  INotificationsStateInitOptions,
} from '../../types';

export const useNotificationsInitExtend = (
  initOptions: INotificationsStateInitOptions = {},
): void => {
  const dispatch = useNotificationsDispatch();
  const refInitCanBeExtended = React.useRef<boolean>(true);

  React.useEffect(() => {
    if (refInitCanBeExtended.current && Object.keys(initOptions).length > 0) {
      refInitCanBeExtended.current = false;
      dispatch(actionExtendOptions(initOptions));
    }
    return () => {
      refInitCanBeExtended.current = false;
    };
  }, [
    dispatch,
    initOptions,
  ]);
};
