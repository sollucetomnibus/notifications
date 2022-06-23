import {
  initialStateNotificationsInit,
  initialStateNotificationsInitOptions,
  initialStateNotificationsUI,
} from '../slices';
import {
  store,
} from '../store';
import {
  selectNotificationsInit,
  selectNotificationsInitOptions,
  selectNotificationsUI,
  selectNotificationsUIItems,
} from '.';

describe('Selectors', () => {
  describe('selectNotificationsInit', () => {
    it('returns the Notifications Init state', () => {
      expect(
        selectNotificationsInit(store.getState()),
      ).toStrictEqual(initialStateNotificationsInit);
    });
  });

  describe('selectNotificationsInitOptions', () => {
    it('returns the Notifications Init Options state', () => {
      expect(
        selectNotificationsInitOptions(store.getState()),
      ).toStrictEqual(initialStateNotificationsInitOptions);
    });
  });

  describe('selectNotificationsUI', () => {
    it('returns the Notifications UI state', () => {
      expect(
        selectNotificationsUI(store.getState()),
      ).toStrictEqual(initialStateNotificationsUI);
    });
  });

  describe('selectNotificationsUIItems', () => {
    it('returns the Notifications UI Items state', () => {
      expect(
        selectNotificationsUIItems(store.getState()),
      ).toStrictEqual([]);
    });
  });
});
