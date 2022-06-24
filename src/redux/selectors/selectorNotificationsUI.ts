import { createSelector } from '@reduxjs/toolkit';

import {
  TNotificationsStoreState,
} from '..';

export const selectNotificationsUI = (state: TNotificationsStoreState) => state.stateNotificationsUI;

export const selectNotificationsUIItems = createSelector(
  [selectNotificationsUI],
  (stateNotificationsUI) => stateNotificationsUI.items,
);
