import React from 'react';

import {
  helperNotificationsItemsMarginGenerator,
} from '../../helpers';
import {
  useNotificationsItemsVisibility,
  useNotificationsGetInitState,
} from '../../hooks';
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

  const { initState } = useNotificationsGetInitState();

  const { isVisible } = useNotificationsItemsVisibility({
    id,
  });

  return (
    <div
      className={initState.classNameItems}
      data-id={id}
      style={{
        ...styleRoot,
        margin: helperNotificationsItemsMarginGenerator({
          placement: initState.placement,
        }),
        opacity: (!initState.hasAnimation || isVisible) ? 1 : 0,
        visibility: (!initState.hasAnimation || isVisible) ? 'visible' : 'hidden',
      }}
    >{id}</div>
  );
};

export default NotificationsItem;
