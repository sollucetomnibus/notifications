import React from 'react';

import {
  INotificationsStateUIItem,
} from '../redux';

export interface INotificationsProviderProps {
  children: React.ReactNode;
}

export interface INotificationsItemProps {
  props: INotificationsStateUIItem;
}
