import { createSlice } from '@reduxjs/toolkit';

import {
  INotificationsStateUI,
  TActionNotificationsItemsInsertAfter,
  TActionNotificationsItemsInsertBefore,
  TActionNotificationsItemsUpdateVisibility,
  TActionNotificationsItemsRemove,
} from '../../types';

export const initialStateNotificationsUI: INotificationsStateUI = {
  items: [],
};

export const sliceNotificationsUI = createSlice({
  name: 'reducerNotificationsUI',
  initialState: initialStateNotificationsUI,
  reducers: {
    actionNotificationsItemsInsertAfter: (state, action: TActionNotificationsItemsInsertAfter) => {
      state.items = [...state.items, action.payload];
    },
    actionNotificationsItemsInsertBefore: (state, action: TActionNotificationsItemsInsertBefore) => {
      state.items = [action.payload, ...state.items];
    },
    actionNotificationsItemsUpdateVisibility: (state, action: TActionNotificationsItemsUpdateVisibility) => {
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
    actionNotificationsItemsRemove: (state, action: TActionNotificationsItemsRemove) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const {
  actionNotificationsItemsInsertAfter,
  actionNotificationsItemsInsertBefore,
  actionNotificationsItemsUpdateVisibility,
  actionNotificationsItemsRemove,
} = sliceNotificationsUI.actions;

export default sliceNotificationsUI.reducer;
