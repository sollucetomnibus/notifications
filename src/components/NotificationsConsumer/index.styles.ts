import React from 'react';

import {
  notificationsInitState,
} from '../../context';
import {
  helperNotificationsWrapperInsetGenerator,
} from '../../helpers';
import {
  styleCommon,
} from '../../styles';

export const styleRoot: React.CSSProperties = {
  ...styleCommon,
  position: 'fixed',
  zIndex: notificationsInitState.zIndex,
  inset: helperNotificationsWrapperInsetGenerator({
    offset: notificationsInitState.offset,
    placement: notificationsInitState.placement,
  }),
  width: notificationsInitState.width,
  maxWidth: '100%',
  maxHeight: `calc(100vh - ${notificationsInitState.offset})`,
  overflow: 'hidden auto',
  padding: 0,
  margin: 'auto',
  opacity: notificationsInitState.opacity,
  transitionProperty: 'opacity',
  transitionDuration: `${notificationsInitState.animationDurationAsMilliseconds}ms`,
  transitionTimingFunction: 'ease-in-out',
  transitionDelay: '0ms',
};
