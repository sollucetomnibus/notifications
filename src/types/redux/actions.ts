import {
  PayloadAction,
} from '@reduxjs/toolkit';

import {
  INotificationsStateUIItem,
  INotificationsStateInitOptions,
} from './store';

export type TActionNotificationsInitOptionsExtend = PayloadAction<INotificationsStateInitOptions>;

export type TActionNotificationsItemsInsertAfter = PayloadAction<INotificationsStateUIItem>;

export type TActionNotificationsItemsInsertBefore = PayloadAction<INotificationsStateUIItem>;

export type TActionNotificationsItemsUpdateVisibility = PayloadAction<{
  id: INotificationsStateUIItem['id'];
  isVisible: INotificationsStateUIItem['isVisible'];
}>;

export type TActionNotificationsItemsRemove = PayloadAction<{
  id: INotificationsStateUIItem['id'];
}>;
