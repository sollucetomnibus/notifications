import React from 'react';

import {
  notificationsWrapperInsetGenerator,
  notificationsItemsMarginGenerator,
} from '../../helpers';
import {
  useNotificationsGetInitState,
  useNotificationsGetUIState,
  useNotificationsUIWrapperAutoScroll,
} from '../../hooks';

import { styleRoot, styleItem } from './index.styles';

export const NotificationsConsumer: React.FC = () => {
  const refWrapper = React.useRef<HTMLDivElement>(null);
  const { initState } = useNotificationsGetInitState();
  const { uiState } = useNotificationsGetUIState();

  useNotificationsUIWrapperAutoScroll(refWrapper);

  // TODO
  // React.useEffect(() => {
  //   console.log(initState);
  // }, [initState]);

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
      }}
    >
      {
        uiState.map((item) => (
          <div
            data-id={item.id}
            key={item.id}
            style={{
              ...styleItem,
              margin: notificationsItemsMarginGenerator({
                placement: initState.placement,
              }),
              // TODO
              opacity: 1,
            }}
          >{item.id}</div>
        ))
      }
    </div>
  );
};
