import { useEffect, useRef } from 'react';

import {
  useNotificationsDispatch,
  actionNotificationsInitOptionsExtend,
} from '../../redux';
import type {
  INotificationsStateInitOptions,
} from '../../types';

export const useNotificationsInitOptionsExtend = (
  initOptions: INotificationsStateInitOptions = {},
): void => {
  const dispatch = useNotificationsDispatch();
  const refInitCanBeExtended = useRef<boolean>(true);

  useEffect(() => {
    if (refInitCanBeExtended.current && Object.keys(initOptions).length > 0) {
      refInitCanBeExtended.current = false;
      dispatch(actionNotificationsInitOptionsExtend(initOptions));
    }
    return () => {
      refInitCanBeExtended.current = false;
    };
  }, [
    dispatch,
    initOptions,
  ]);
};
