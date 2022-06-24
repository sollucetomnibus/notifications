import {
  getMockNotificationsStore,
} from '../mocks';
import {
  initialStateNotificationsInit,
  initialStateNotificationsInitOptions,
  initialStateNotificationsUI,
} from '../slices';
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
        selectNotificationsInit(getMockNotificationsStore().getState()),
      ).toStrictEqual(initialStateNotificationsInit);
    });
  });

  describe('selectNotificationsInitOptions', () => {
    it('returns the Notifications Init Options state', () => {
      expect(
        selectNotificationsInitOptions(getMockNotificationsStore().getState()),
      ).toStrictEqual(initialStateNotificationsInitOptions);
    });
  });

  describe('selectNotificationsUI', () => {
    it('returns the Notifications UI state', () => {
      expect(
        selectNotificationsUI(getMockNotificationsStore().getState()),
      ).toStrictEqual(initialStateNotificationsUI);
    });
  });

  describe('selectNotificationsUIItems', () => {
    it('returns the Notifications UI Items state', () => {
      expect(
        selectNotificationsUIItems(getMockNotificationsStore().getState()),
      ).toStrictEqual([]);
    });
  });
});
