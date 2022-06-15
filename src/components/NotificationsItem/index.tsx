import React from 'react';

import {
  notificationsItemsMarginGenerator,
} from '../../helpers';
import {
  useNotifications,
  useNotificationsGetInitState,
} from '../../hooks';
import {
  INotificationsUIStateItem,
} from '../../types';

import { styleRoot } from './index.styles';

export interface NotificationsItemProps {
  props: INotificationsUIStateItem;
}

const NotificationsItem: React.FC<NotificationsItemProps> = ({
  props,
}) => {
  const {
    id,
    isVisible,
  } = props;
  const refItemCanBeVisible = React.useRef<boolean>(true);
  const [stateIsItemVisible, setStateIsItemVisible] = React.useState<boolean>(isVisible);

  const { notificationUpdateVisibility } = useNotifications();
  const { initState } = useNotificationsGetInitState();

  const itemVisibilityHandler = React.useCallback((): void => {
    if (!stateIsItemVisible) {
      notificationUpdateVisibility({
        id,
        isVisible: true,
      });
      setStateIsItemVisible(true);
    }
  }, [
    id,
    stateIsItemVisible,
    notificationUpdateVisibility,
  ]);

  React.useEffect(() => {
    if (refItemCanBeVisible.current) {
      itemVisibilityHandler();
      refItemCanBeVisible.current = false;
    }

    return () => {
      refItemCanBeVisible.current = false;
    };
  }, [itemVisibilityHandler]);

  return (
    <div
      className={initState.classNameItems}
      data-id={id}
      style={{
        ...styleRoot,
        margin: notificationsItemsMarginGenerator({
          placement: initState.placement,
        }),
        opacity: !initState.hasAnimation || stateIsItemVisible ? 1 : 0,
      }}
    >{id}</div>
  );
};

export default NotificationsItem;
