import React from 'react';
import { Provider } from 'react-redux';

import {
  store,
} from '../../redux';
import {
  INotificationsProviderProps,
} from '../../types';
import {
  NotificationsConsumer,
} from '../NotificationsConsumer';

export const NotificationsProvider: React.FC<INotificationsProviderProps> = ({
  children,
}) => (
  <Provider store={store}>
    {children}
    <NotificationsConsumer />
  </Provider>
);
