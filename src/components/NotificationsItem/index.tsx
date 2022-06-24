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
import {
  INotificationsItemProps,
} from '../../types';

import { styleRoot } from './index.styles';

const NotificationsItem: React.FC<INotificationsItemProps> = ({
  props,
}) => {
  const {
    id,
  } = props;

  const {
    classNameItems,
    placement,
    hasAnimation,
    borderRadius,
  } = useNotificationsSelector(selectNotificationsInitOptions);

  const { isItemVisible } = useNotificationsItemsVisibility({ id });

  useNotificationsItemsRemoveAuto({ id });

  return (
    <div
      className={classNameItems}
      data-id={id}
      style={{
        ...styleRoot,
        margin: helperNotificationsItemsMarginGenerator({
          placement,
        }),
        borderRadius,
        opacity: (!hasAnimation || isItemVisible) ? 1 : 0,
        visibility: (!hasAnimation || isItemVisible) ? 'visible' : 'hidden',
        transform: helperNotificationsItemsTransformGenerator({
          hasAnimation,
          isVisible: isItemVisible,
          placement,
        }),
      }}
    >{id}</div>
  );
};

export default NotificationsItem;
