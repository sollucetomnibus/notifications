import React from 'react';

import {
  INotificationsUIStateItem,
} from './context';

export interface INotificationsProviderProps {
  children: React.ReactNode;
}

export interface INotificationsItemProps {
  props: INotificationsUIStateItem;
}
