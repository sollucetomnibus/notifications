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

import NotificationsItem from '../NotificationsItem';

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
      {
        items.map((item) => (
          <NotificationsItem
            key={item.id}
            props={item}
          />
        ))
      }
    </div>
  );
};
