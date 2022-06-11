import React from 'react';

import {
  isMotificationsPlacementTop,
} from '../../helpers';
import {
  useNotificationsGetInitState,
  useNotificationsGetUIState,
} from '../states';

export const useNotificationsUIWrapperAutoScroll = (
  ref: React.RefObject<HTMLDivElement>,
): void => {
  const { initState } = useNotificationsGetInitState();
  const { uiState } = useNotificationsGetUIState();
  const scrollOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'center',
  };

  React.useEffect(() => {
    if (uiState.length > 1) {
      if (isMotificationsPlacementTop({
        placement: initState.placement,
      })) {
        ref.current?.firstElementChild?.scrollIntoView(scrollOptions);
      } else {
        ref.current?.lastElementChild?.scrollIntoView(scrollOptions);
      }
    }
  }, [
    uiState.length,
    initState.placement,
    ref.current,
  ]);
};
