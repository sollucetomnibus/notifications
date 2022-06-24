import React from 'react';

import {
  helperNotificationsItemsMarginGenerator,
  helperNotificationsItemsTransformGenerator,
} from '../../helpers';
import {
  useNotificationsItemsRemoveAuto,
  useNotificationsItemsVisibility,
} from '../../hooks';
import {
  selectNotificationsInitOptions,
  useNotificationsSelector,
} from '../../redux';
import type {
  INotificationsConsumerItemProps,
} from '../../types';

import { styleRoot } from './index.styles';

const NotificationsConsumerItem: React.FC<INotificationsConsumerItemProps> = ({
  props,
}) => {
  const {
    id,
  } = props;

  const {
    classNameItems,
    zIndex,
    placement,
    hasAnimation,
    borderRadius,
    animationDurationAsMilliseconds,
  } = useNotificationsSelector(selectNotificationsInitOptions);

  const { isItemVisible } = useNotificationsItemsVisibility({ id });

  useNotificationsItemsRemoveAuto({ id });

  return (
    <div
      className={classNameItems}
      data-id={id}
      style={{
        ...styleRoot,
        zIndex: zIndex + 1,
        borderRadius,
        transitionDuration: `${animationDurationAsMilliseconds}ms`,
        opacity: (!hasAnimation || isItemVisible) ? 1 : 0,
        visibility: (!hasAnimation || isItemVisible) ? 'visible' : 'hidden',
        transform: helperNotificationsItemsTransformGenerator({
          hasAnimation,
          isVisible: isItemVisible,
          placement,
        }),
        margin: helperNotificationsItemsMarginGenerator({
          placement,
        }),
      }}
    >{id}</div>
  );
};

export default NotificationsConsumerItem;
