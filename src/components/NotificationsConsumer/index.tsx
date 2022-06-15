import React from 'react';

import {
  notificationsWrapperInsetGenerator,
} from '../../helpers';
import {
  useNotificationsGetInitState,
  useNotificationsGetUIState,
  useNotificationsConsumerAutoScroll,
} from '../../hooks';

import NotificationsItem from '../NotificationsItem';

import { styleRoot } from './index.styles';

export const NotificationsConsumer: React.FC = () => {
  const refWrapper = React.useRef<HTMLDivElement>(null);

  const { initState } = useNotificationsGetInitState();
  const { uiState } = useNotificationsGetUIState();

  useNotificationsConsumerAutoScroll(refWrapper);

  return (
    <div
      ref={refWrapper}
      className={initState.classNameWrapper}
      style={{
        ...styleRoot,
        zIndex: initState.zIndex,
        opacity: initState.opacity,
        inset: notificationsWrapperInsetGenerator({
          offset: initState.offset,
          placement: initState.placement,
        }),
        width: initState.width,
        maxWidth: `calc(100% - ${initState.offset} - ${initState.offset})`,
        maxHeight: `calc(100vh - ${initState.offset})`,
      }}
    >
      {
        uiState.map((item) => (
          <NotificationsItem
            key={item.id}
            props={item}
          />
        ))
      }
    </div>
  );
};
