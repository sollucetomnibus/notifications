import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import {
  INotificationsStateInit,
  INotificationsStateInitOptions,
} from '../../types';

export const initialStateNotificationsInitOptions: Required<INotificationsStateInitOptions> = {
  autoRemoveDelay: 4500,
  classNameWrapper: 'notifications-wrapper',
  classNameItems: 'notifications-items',
  zIndex: 1918,
  placement: 'bottom-right',
  width: '320px',
  offset: '12px',
  opacity: 1,
  hasBackgroundOverlay: false,
  backgroundOverlayColor: 'rgba(0, 0, 0, 0.25)',
  borderRadius: '12px',
  hasAnimation: true,
  animationDurationAsMilliseconds: 360,
};

export const initialStateNotificationsInit: INotificationsStateInit = {
  options: initialStateNotificationsInitOptions,
};

export const sliceNotificationsInit = createSlice({
  name: 'reducerNotificationsInit',
  initialState: initialStateNotificationsInit,
  reducers: {
    actionExtendOptions: (state, action: PayloadAction<INotificationsStateInitOptions>) => {
      state.options = { ...action.payload };
    },
  },
});

export const {
  actionExtendOptions,
} = sliceNotificationsInit.actions;

export default sliceNotificationsInit.reducer;
