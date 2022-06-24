import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import type {
  IMockNotificationsProviderProps,
  IGetMockNotificationsStoreProps,
  INotificationsStateUIItem,
} from '../../types';
import {
  initialStateNotificationsInitOptions,
  reducerNotificationsInit,
  reducerNotificationsUI,
} from '../slices';
import {
  TNotificationsStore,
} from '../store';

export const getMockNotificationsStore = ({
  options = {},
  items = [],
}: IGetMockNotificationsStoreProps = {}): TNotificationsStore => {
  const mockStore = configureStore({
    reducer: {
      stateNotificationsInit: reducerNotificationsInit,
      stateNotificationsUI: reducerNotificationsUI,
    },
    preloadedState: {
      stateNotificationsInit: {
        options: {
          ...initialStateNotificationsInitOptions,
          ...options,
        },
      },
      stateNotificationsUI: {
        items: [...items],
      },
    },
  });

  return mockStore;
};

export const MockNotificationsProvider: React.FC<IMockNotificationsProviderProps> = ({
  children,
  options,
  items,
}) => (
  <Provider store={getMockNotificationsStore({
    items,
    options,
  })}>
    {children}
  </Provider>
);

export const getMockNotificationsStateUIItem = (
  extend?: Partial<INotificationsStateUIItem>,
): INotificationsStateUIItem => ({
  id: '12345',
  isAutoRemovable: true,
  isVisible: false,
  ...extend,
});
