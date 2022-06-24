import React, { useRef } from 'react';

import {
  helperNotificationsWrapperInsetGenerator,
} from '../../helpers';
import {
  selectNotificationsUIItems,
  selectNotificationsInitOptions,
  useNotificationsSelector,
} from '../../redux';
import {
  useNotificationsConsumerAutoScroll,
} from '../../hooks';

import NotificationsConsumerItem from '../NotificationsConsumerItem';
import NotificationsConsumerOverlay from '../NotificationsConsumerOverlay';

import { styleRoot } from './index.styles';

export const NotificationsConsumer: React.FC = () => {
  const refWrapper = useRef<HTMLDivElement>(null);

  const items = useNotificationsSelector(selectNotificationsUIItems);
  const {
    classNameWrapper,
    zIndex,
    opacity,
    offset,
    placement,
    width,
  } = useNotificationsSelector(selectNotificationsInitOptions);

  useNotificationsConsumerAutoScroll(refWrapper);

  return (
    <div
      ref={refWrapper}
      className={classNameWrapper}
      style={{
        ...styleRoot,
        zIndex,
        opacity,
        inset: helperNotificationsWrapperInsetGenerator({
          offset,
          placement,
        }),
        width,
        maxWidth: `calc(100% - ${offset} - ${offset})`,
        maxHeight: `calc(100vh - ${offset})`,
      }}
    >
      <NotificationsConsumerOverlay />
      {
        items.map((item) => (
          <NotificationsConsumerItem
            key={item.id}
            props={item}
          />
        ))
      }
    </div>
  );
};
