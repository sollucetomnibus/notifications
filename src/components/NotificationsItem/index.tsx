import React from 'react';

import {
  helperNotificationsItemsMarginGenerator,
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
        opacity: (!hasAnimation || isItemVisible) ? 1 : 0,
        visibility: (!hasAnimation || isItemVisible) ? 'visible' : 'hidden',
      }}
    >{id}</div>
  );
};

export default NotificationsItem;
