import React from 'react';

import {
  NotificationsContext,
  INotificationsUIState,
  notificationsUIState,
} from '../../context';
import {
  NotificationsUI,
} from '../NotificationsUI';

export const NotificationsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [
    uiState,
    uiUpdate,
  ] = React.useState<INotificationsUIState>(notificationsUIState);

  return (
    <NotificationsContext.Provider value={{
      uiState,
      uiUpdate,
    }}>
      {children}
      <NotificationsUI />
    </NotificationsContext.Provider>
  );
};
