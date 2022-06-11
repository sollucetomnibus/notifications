import React from 'react';

import {
  INotificationsContext,
  INotificationsInitState,
  TNotificationsUIState,
} from '../types';

export const notificationsInitState: Required<INotificationsInitState> = {
  classNameWrapper: 'notifications-wrapper',
  classNameItems: 'notifications-items',
  timeout: 4500,
  placement: 'bottom-right',
  zIndex: 1918,
  offset: '12px',
  width: '320px',
  opacity: 1,
  borderRadius: '12px',
  backgroundOverlay: false,
  backgroundOverlayColor: 'rgba(0, 0, 0, 0.25)',
};

export const notificationsUIState: TNotificationsUIState = [];

export const NotificationsContext = React.createContext<INotificationsContext>({
  initState: notificationsInitState,
  initUpdate: () => notificationsInitState,
  uiState: notificationsUIState,
  uiUpdate: () => notificationsUIState,
});
