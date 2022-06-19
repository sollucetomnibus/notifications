import { createSelector } from '@reduxjs/toolkit';

import {
  TNotificationsState,
  initialStateNotificationsInitOptions,
} from '..';

export const selectNotificationsInit = (state: TNotificationsState) => state.stateNotificationsInit;

export const selectNotificationsInitOptions = createSelector(
  [selectNotificationsInit],
  (stateNotificationsInit) => ({
    ...initialStateNotificationsInitOptions,
    ...stateNotificationsInit.options,
  }),
);
