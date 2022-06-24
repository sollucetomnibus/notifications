import React from 'react';
import { Provider } from 'react-redux';

import {
  notificationsStore,
} from '../../redux';
import type {
  INotificationsProviderProps,
} from '../../types';
import {
  NotificationsConsumer,
} from '../NotificationsConsumer';

export const NotificationsProvider: React.FC<INotificationsProviderProps> = ({
  children,
}) => (
  <Provider store={notificationsStore}>
    {children}
    <NotificationsConsumer />
  </Provider>
);
