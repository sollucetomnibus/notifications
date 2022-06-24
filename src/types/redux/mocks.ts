import React from 'react';

import {
  INotificationsStateInitOptions,
  INotificationsStateUIItem,
} from './store';

export interface IGetMockNotificationsStoreProps {
  options?: INotificationsStateInitOptions;
  items?: INotificationsStateUIItem[];
}

export interface IMockNotificationsProviderProps extends IGetMockNotificationsStoreProps {
  children: React.ReactNode;
}
