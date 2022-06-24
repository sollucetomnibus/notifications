import React from 'react';

import {
  selectNotificationsInitOptions,
  selectNotificationsUIItems,
  useNotificationsSelector,
} from '../../redux';

import { styleRoot } from './index.styles';

const NotificationsConsumerOverlay: React.FC = () => {
  const {
    zIndex,
    hasAnimation,
    hasBackgroundOverlay,
    backgroundOverlayColor,
    animationDurationAsMilliseconds,
  } = useNotificationsSelector(selectNotificationsInitOptions);
  const items = useNotificationsSelector(selectNotificationsUIItems);
  const isAtLeastOneItemVisible = !hasAnimation || items.find((item) => item.isVisible) !== undefined;

  if (!hasBackgroundOverlay || items.length === 0) {
    return null;
  }

  return (
    <div
      data-testid="NotificationsConsumerOverlay"
      style={{
        ...styleRoot,
        zIndex,
        background: backgroundOverlayColor,
        transitionDuration: `${animationDurationAsMilliseconds}ms`,
        opacity: isAtLeastOneItemVisible ? 1 : 0,
        visibility: isAtLeastOneItemVisible ? 'visible' : 'hidden',
      }}
    />
  );
};

export default NotificationsConsumerOverlay;
