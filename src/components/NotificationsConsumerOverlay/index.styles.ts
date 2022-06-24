import React from 'react';

import {
  initialStateNotificationsInitOptions,
} from '../../redux';
import {
  styleCommon,
} from '../../styles';

export const styleRoot: React.CSSProperties = {
  ...styleCommon,
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: initialStateNotificationsInitOptions.zIndex,
  background: initialStateNotificationsInitOptions.backgroundOverlayColor,
  opacity: 0,
  visibility: 'hidden',
  transitionProperty: 'opacity, visibility',
  transitionDuration: `${initialStateNotificationsInitOptions.animationDurationAsMilliseconds}ms`,
  transitionTimingFunction: 'ease-in-out',
  transitionDelay: '0ms',
};
