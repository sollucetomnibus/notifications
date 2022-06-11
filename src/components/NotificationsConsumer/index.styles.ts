import React from 'react';

import {
  notificationsInitState,
} from '../../context';
import {
  notificationsWrapperInsetGenerator,
} from '../../helpers';

export const styleRoot: React.CSSProperties = {
  boxSizing: 'border-box',
  position: 'fixed',
  zIndex: notificationsInitState.zIndex,
  opacity: notificationsInitState.opacity,
  inset: notificationsWrapperInsetGenerator({
    offset: notificationsInitState.offset,
    placement: notificationsInitState.placement,
  }),
  width: notificationsInitState.width,
  maxWidth: '100%',
  maxHeight: '100vh',
  overflow: 'hidden auto',
  padding: 0,
  margin: 'auto',
};

export const styleItem: React.CSSProperties = {
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: notificationsInitState.borderRadius,
  margin: '12px 0 0 0',
  // TODO
  padding: 20,
  background: '#fc0',
  opacity: 0,
  transition: 'opacity 1s ease',
};
