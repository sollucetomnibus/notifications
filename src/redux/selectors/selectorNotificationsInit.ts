import { createSelector } from '@reduxjs/toolkit';

import {
  TNotificationsStoreState,
  initialStateNotificationsInitOptions,
} from '..';

export const selectNotificationsInit = (state: TNotificationsStoreState) => state.stateNotificationsInit;

export const selectNotificationsInitOptions = createSelector(
  [selectNotificationsInit],
  (stateNotificationsInit) => ({
    ...initialStateNotificationsInitOptions,
    ...stateNotificationsInit.options,
  }),
);
