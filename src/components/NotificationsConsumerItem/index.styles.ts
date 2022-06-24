import React from 'react';

import {
  helperNotificationsItemsMarginGenerator,
  helperNotificationsItemsTransformGenerator,
} from '../../helpers';
import {
  initialStateNotificationsInitOptions,
} from '../../redux';
import {
  styleCommon,
} from '../../styles';

export const styleRoot: React.CSSProperties = {
  ...styleCommon,
  position: 'relative',
  zIndex: initialStateNotificationsInitOptions.zIndex + 1,
  width: '100%',
  borderRadius: initialStateNotificationsInitOptions.borderRadius,
  opacity: 0,
  visibility: 'hidden',
  transitionProperty: 'opacity, visibility, transform',
  transitionDuration: `${initialStateNotificationsInitOptions.animationDurationAsMilliseconds}ms`,
  transitionTimingFunction: 'ease-in-out',
  transitionDelay: '0ms',
  transform: helperNotificationsItemsTransformGenerator({
    hasAnimation: initialStateNotificationsInitOptions.hasAnimation,
    isVisible: false,
    placement: initialStateNotificationsInitOptions.placement,
  }),
  margin: helperNotificationsItemsMarginGenerator({
    placement: initialStateNotificationsInitOptions.placement,
  }),
  // TODO: design
  padding: 20,
  background: '#fc0',
};
