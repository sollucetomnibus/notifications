import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  TNotificationsDispatch,
  TNotificationsState,
} from '../store';

export const useNotificationsDispatch: () => TNotificationsDispatch = useDispatch;

export const useNotificationsSelector: TypedUseSelectorHook<TNotificationsState> = useSelector;
