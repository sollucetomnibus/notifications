import React from 'react';

import {
  helperIsMotificationsPlacementTop,
} from '../../helpers';
import {
  useNotificationsGetInitState,
  useNotificationsGetUIState,
} from '../states';

export const useNotificationsConsumerAutoScroll = (
  ref: React.RefObject<HTMLDivElement>,
): void => {
  const { initState } = useNotificationsGetInitState();
  const { uiState } = useNotificationsGetUIState();

  const scrollOptions: ScrollIntoViewOptions = React.useMemo(() => ({
    behavior: initState.hasAnimation ? 'smooth' : 'auto',
    block: 'center',
  }), [initState.hasAnimation]);

  const scrollIntoViewHandler = React.useCallback(async (): Promise<void> => {
    if (uiState.length > 1) {
      if (helperIsMotificationsPlacementTop({
        placement: initState.placement,
      })) {
        ref.current?.firstElementChild?.scrollIntoView(scrollOptions);
      } else {
        ref.current?.lastElementChild?.scrollIntoView(scrollOptions);
      }
    }
  }, [
    ref,
    scrollOptions,
    uiState.length,
    initState.placement,
  ]);

  React.useEffect(() => {
    scrollIntoViewHandler();
  }, [scrollIntoViewHandler]);
};
