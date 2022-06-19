import { configureStore } from '@reduxjs/toolkit';

import {
  reducerNotificationsUI,
  reducerNotificationsInit,
  initialStateNotificationsUI,
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
    // TODO
    stateNotificationsUI: {
      items: [
        {
          id: '12345',
          isAutoRemovable: true,
          isVisible: false,
        },
      ] || initialStateNotificationsUI,
    },
  },
});

export type TNotificationsState = ReturnType<typeof store.getState>;

export type TNotificationsDispatch = typeof store.dispatch;
