import React, { useCallback, useEffect, useMemo } from 'react';

import {
  helperIsMotificationsPlacementTop,
} from '../../helpers';
import {
  selectNotificationsInitOptions,
  selectNotificationsUIItems,
  useNotificationsSelector,
} from '../../redux';

export const useNotificationsConsumerAutoScroll = (
  ref: React.RefObject<HTMLDivElement>,
): void => {
  const items = useNotificationsSelector(selectNotificationsUIItems);
  const {
    placement,
    hasAnimation,
  } = useNotificationsSelector(selectNotificationsInitOptions);

  const scrollOptions: ScrollIntoViewOptions = useMemo(() => ({
    behavior: hasAnimation ? 'smooth' : 'auto',
    block: 'center',
  }), [hasAnimation]);

  const consumerScrollIntoViewHandler = useCallback(async (): Promise<void> => {
    if (items.length > 1) {
      if (helperIsMotificationsPlacementTop({
        placement,
      })) {
        ref.current?.firstElementChild?.scrollIntoView(scrollOptions);
      } else {
        ref.current?.lastElementChild?.scrollIntoView(scrollOptions);
      }
    }
  }, [
    ref,
    scrollOptions,
    items.length,
    placement,
  ]);

  useEffect(() => {
    consumerScrollIntoViewHandler();
  }, [consumerScrollIntoViewHandler]);
};
