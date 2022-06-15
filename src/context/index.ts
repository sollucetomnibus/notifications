import React from 'react';

import {
  INotificationsContext,
  INotificationsInitState,
  TNotificationsUIState,
} from '../types';

export const notificationsInitState: Required<INotificationsInitState> = {
  autoRemoveDelay: 4500,
  classNameWrapper: 'notifications-wrapper',
  classNameItems: 'notifications-items',
  zIndex: 1918,
  placement: 'bottom-right',
  width: '320px',
  offset: '12px',
  opacity: 1,
  hasBackgroundOverlay: false,
  backgroundOverlayColor: 'rgba(0, 0, 0, 0.25)',
  borderRadius: '12px',
  hasAnimation: true,
  animationDurationAsMilliseconds: 360,
};

export const notificationsUIState: TNotificationsUIState = [];

export const NotificationsContext = React.createContext<INotificationsContext>({
  initState: notificationsInitState,
  initUpdate: () => notificationsInitState,
  uiState: notificationsUIState,
  uiUpdate: () => notificationsUIState,
});
