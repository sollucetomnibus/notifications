import React from 'react';

import {
  NotificationsContext,
  INotificationsUIData,
} from '../../context';
import {
  uuidV4,
} from '../../helpers';

export const useNotificationsUIMethods = (): {
  add: () => void;
  remove: (id: string) => void;
} => {
  const { uiState, uiUpdate } = React.useContext(NotificationsContext);

  const add = (): void => {
    const id = uuidV4();
    const data: INotificationsUIData = { id };
    uiUpdate([...uiState, data]);
  };

  const remove = (id: string): void => {
    uiUpdate([...uiState.filter((data) => data.id !== id)]);
  };

  return { add, remove };
};
