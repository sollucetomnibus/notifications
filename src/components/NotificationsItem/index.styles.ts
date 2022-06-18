import React from 'react';

import {
  notificationsInitState,
} from '../../context';
import {
  styleCommon,
} from '../../styles';

export const styleRoot: React.CSSProperties = {
  ...styleCommon,
  position: 'relative',
  width: '100%',
  borderRadius: notificationsInitState.borderRadius,
  margin: '12px 0 0 0',
  // TODO: animations
  opacity: 0,
  visibility: 'hidden',
  transitionProperty: 'opacity, visibility',
  transitionDuration: `${notificationsInitState.animationDurationAsMilliseconds}ms`,
  transitionTimingFunction: 'ease-in-out',
  transitionDelay: '0ms',
  // TODO: design
  padding: 20,
  background: '#fc0',
};
