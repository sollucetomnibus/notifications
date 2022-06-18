import React from 'react';

import {
  NotificationsContext,
  notificationsInitState,
  notificationsUIState,
} from '../../context';
import {
  INotificationsInitState,
  INotificationsProviderProps,
  TNotificationsUIState,
} from '../../types';
import {
  NotificationsConsumer,
} from '../NotificationsConsumer';

export const NotificationsProvider: React.FC<INotificationsProviderProps> = ({
  children,
}) => {
  const [
    initState,
    initUpdate,
  ] = React.useState<INotificationsInitState>(notificationsInitState);
  const [
    uiState,
    uiUpdate,
  ] = React.useState<TNotificationsUIState>(notificationsUIState);

  return (
    <NotificationsContext.Provider value={{
      initState,
      initUpdate,
      uiState,
      uiUpdate,
    }}>
      {children}
      <NotificationsConsumer />
    </NotificationsContext.Provider>
  );
};
