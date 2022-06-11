import {
  uuidV4,
  isMotificationsPlacementTop,
  notificationsWrapperInsetGenerator,
  notificationsItemsMarginGenerator,
} from '.';

describe('Helpers', () => {
  describe('uuidV4', () => {
    it('returns an uuidV4', () => {
      expect(
        uuidV4(),
      ).toMatch(/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$/);
    });
  });

  describe('isMotificationsPlacementTop', () => {
    it('returns the correct boolean by placement', () => {
      expect(
        isMotificationsPlacementTop({
          placement: 'top-left',
        }),
      ).toBe(true);

      expect(
        isMotificationsPlacementTop({
          placement: 'top-center',
        }),
      ).toBe(true);

      expect(
        isMotificationsPlacementTop({
          placement: 'top-right',
        }),
      ).toBe(true);

      expect(
        isMotificationsPlacementTop({
          placement: 'bottom-left',
        }),
      ).toBe(false);

      expect(
        isMotificationsPlacementTop({
          placement: 'bottom-center',
        }),
      ).toBe(false);

      expect(
        isMotificationsPlacementTop({
          placement: 'bottom-right',
        }),
      ).toBe(false);
    });
  });

  describe('notificationsWrapperInsetGenerator', () => {
    it('returns the correct inset by offset and placement', () => {
      expect(
        notificationsWrapperInsetGenerator({
          offset: '10px',
          placement: 'top-left',
        }),
      ).toBe('10px auto auto 10px');

      expect(
        notificationsWrapperInsetGenerator({
          offset: '3px',
          placement: 'top-center',
        }),
      ).toBe('3px 0px auto 0px');

      expect(
        notificationsWrapperInsetGenerator({
          offset: '12px',
          placement: 'top-right',
        }),
      ).toBe('12px 12px auto auto');

      expect(
        notificationsWrapperInsetGenerator({
          offset: '8px',
          placement: 'bottom-left',
        }),
      ).toBe('auto auto 8px 8px');

      expect(
        notificationsWrapperInsetGenerator({
          offset: '6px',
          placement: 'bottom-center',
        }),
      ).toBe('auto 0px 6px 0px');

      expect(
        notificationsWrapperInsetGenerator({
          offset: '4px',
          placement: 'bottom-right',
        }),
      ).toBe('auto 4px 4px auto');
    });
  });

  describe('notificationsItemsMarginGenerator', () => {
    it('returns the correct margin by placement', () => {
      expect(
        notificationsItemsMarginGenerator({
          placement: 'top-left',
        }),
      ).toBe('0px 0px 12px 0px');

      expect(
        notificationsItemsMarginGenerator({
          placement: 'top-center',
        }),
      ).toBe('0px 0px 12px 0px');

      expect(
        notificationsItemsMarginGenerator({
          placement: 'top-right',
        }),
      ).toBe('0px 0px 12px 0px');

      expect(
        notificationsItemsMarginGenerator({
          placement: 'bottom-left',
        }),
      ).toBe('12px 0px 0px 0px');

      expect(
        notificationsItemsMarginGenerator({
          placement: 'bottom-center',
        }),
      ).toBe('12px 0px 0px 0px');

      expect(
        notificationsItemsMarginGenerator({
          placement: 'bottom-right',
        }),
      ).toBe('12px 0px 0px 0px');
    });
  });
});
