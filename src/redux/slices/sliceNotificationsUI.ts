import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import {
  INotificationsStateUI,
  INotificationsStateUIItem,
  IActionNotificationsItemUpdateVisibility,
  IActionNotificationsItemRemove,
} from '../../types';

export const initialStateNotificationsUI: INotificationsStateUI = {
  items: [],
};

export const sliceNotificationsUI = createSlice({
  name: 'reducerNotificationsUI',
  initialState: initialStateNotificationsUI,
  reducers: {
    actionAddAfter: (state, action: PayloadAction<INotificationsStateUIItem>) => {
      state.items = [...state.items, action.payload];
    },
    actionAddBefore: (state, action: PayloadAction<INotificationsStateUIItem>) => {
      state.items = [action.payload, ...state.items];
    },
    actionUpdateVisibility: (state, action: PayloadAction<IActionNotificationsItemUpdateVisibility>) => {
      state.items = state.items.map((item) => {
        if (action.payload.id === item.id) {
          return {
            ...item,
            isVisible: action.payload.isVisible,
          };
        }
        return item;
      });
    },
    actionRemove: (state, action: PayloadAction<IActionNotificationsItemRemove>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const {
  actionAddAfter,
  actionAddBefore,
  actionUpdateVisibility,
  actionRemove,
} = sliceNotificationsUI.actions;

export default sliceNotificationsUI.reducer;
