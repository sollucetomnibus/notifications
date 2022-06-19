import { createSelector } from '@reduxjs/toolkit';

import {
  TNotificationsState,
} from '..';

export const selectNotificationsUI = (state: TNotificationsState) => state.stateNotificationsUI;

export const selectNotificationsUIItems = createSelector(
  [selectNotificationsUI],
  (stateNotificationsUI) => stateNotificationsUI.items,
);
