import React from 'react';

export interface INotificationsUIData {
  id: string;
}

export type INotificationsUIState = INotificationsUIData[];

export type INotificationsUIUpdate = React.Dispatch<React.SetStateAction<INotificationsUIState>>;

export interface INotificationsContext {
  uiState: INotificationsUIState;
  uiUpdate: INotificationsUIUpdate;
}

export const notificationsUIState: INotificationsUIState = [];

export const NotificationsContext = React.createContext<INotificationsContext>({
  uiState: notificationsUIState,
  uiUpdate: () => notificationsUIState,
});
