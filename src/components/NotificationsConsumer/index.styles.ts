import React from 'react';

import {
  Constants,
} from '../../constants';
import {
  helperNotificationsWrapperInsetGenerator,
} from '../../helpers';
import {
  initialStateNotificationsInitOptions,
} from '../../redux';
import {
  styleCommon,
} from '../../styles';

export const styleRoot: React.CSSProperties = {
  ...styleCommon,
  position: 'fixed',
  zIndex: initialStateNotificationsInitOptions.zIndex,
  inset: helperNotificationsWrapperInsetGenerator({
    offset: initialStateNotificationsInitOptions.offset,
    placement: initialStateNotificationsInitOptions.placement,
  }),
  width: initialStateNotificationsInitOptions.width,
  maxWidth: '100%',
  maxHeight: `calc(100vh - ${initialStateNotificationsInitOptions.offset})`,
  overflow: 'hidden auto',
  padding: `${Constants.items.marginY} 0`,
  margin: 'auto',
  opacity: initialStateNotificationsInitOptions.opacity,
  transitionProperty: 'opacity',
  transitionDuration: `${initialStateNotificationsInitOptions.animationDurationAsMilliseconds}ms`,
  transitionTimingFunction: 'ease-in-out',
  transitionDelay: '0ms',
};
