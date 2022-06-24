import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  TNotificationsStoreState,
  TNotificationsStoreDispatch,
} from '../store';

export const useNotificationsSelector: TypedUseSelectorHook<TNotificationsStoreState> = useSelector;

export const useNotificationsDispatch: () => TNotificationsStoreDispatch = useDispatch;
