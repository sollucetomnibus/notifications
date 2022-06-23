import { configureStore } from '@reduxjs/toolkit';

import {
  reducerNotificationsUI,
  reducerNotificationsInit,
  initialStateNotificationsInitOptions,
} from '../slices';

export const store = configureStore({
  reducer: {
    stateNotificationsInit: reducerNotificationsInit,
    stateNotificationsUI: reducerNotificationsUI,
  },
  // TODO
  devTools: true,
  preloadedState: {
    stateNotificationsInit: {
      options: initialStateNotificationsInitOptions,
    },
    stateNotificationsUI: {
      items: [],
    },
  },
});

export type TNotificationsState = ReturnType<typeof store.getState>;

export type TNotificationsDispatch = typeof store.dispatch;
