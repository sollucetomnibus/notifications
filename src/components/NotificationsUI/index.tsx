import React from 'react';

import {
  useNotificationsUIMethods,
  useNotificationsUIState,
} from '../../hooks';

import { root, data } from './index.styles';

export const NotificationsUI: React.FC = () => {
  const { remove } = useNotificationsUIMethods();
  const { uiState } = useNotificationsUIState();

  return (
    <div style={root}>
      {
        uiState.map((item) => (
          <div
            data-id={item.id}
            key={item.id}
            onClick={() => remove(item.id)}
            style={{ ...data, opacity: 1 }}
          >{item.id}</div>
        ))
      }
    </div>
  );
};
