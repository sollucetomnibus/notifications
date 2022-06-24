import { configureStore } from '@reduxjs/toolkit';

import {
  reducerNotificationsInit,
  reducerNotificationsUI,
  initialStateNotificationsInitOptions,
} from '../slices';

export const notificationsStore = configureStore({
  reducer: {
    stateNotificationsInit: reducerNotificationsInit,
    stateNotificationsUI: reducerNotificationsUI,
  },
  preloadedState: {
    stateNotificationsInit: {
      options: initialStateNotificationsInitOptions,
    },
    stateNotificationsUI: {
      items: [],
    },
  },
  // TODO
  devTools: true,
});

export type TNotificationsStore = typeof notificationsStore;

export type TNotificationsStoreState = ReturnType<typeof notificationsStore.getState>;

export type TNotificationsStoreDispatch = typeof notificationsStore.dispatch;
