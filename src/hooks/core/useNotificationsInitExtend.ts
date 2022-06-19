import { useEffect, useRef } from 'react';

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
  const refInitCanBeExtended = useRef<boolean>(true);

  useEffect(() => {
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
