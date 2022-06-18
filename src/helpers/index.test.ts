import {
  helperGenerateUUIDV4,
  helperIsMotificationsPlacementTop,
  helperNotificationsWrapperInsetGenerator,
  helperNotificationsItemsMarginGenerator,
  helperNotificationsWaitForTimeout,
} from '.';

describe('Helpers', () => {
  describe('helperGenerateUUIDV4', () => {
    it('returns an helperGenerateUUIDV4', () => {
      expect(
        helperGenerateUUIDV4(),
      ).toMatch(/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$/);
    });
  });

  describe('helperIsMotificationsPlacementTop', () => {
    it('returns the correct boolean by placement', () => {
      expect(
        helperIsMotificationsPlacementTop({
          placement: 'top-left',
        }),
      ).toBe(true);

      expect(
        helperIsMotificationsPlacementTop({
          placement: 'top-center',
        }),
      ).toBe(true);

      expect(
        helperIsMotificationsPlacementTop({
          placement: 'top-right',
        }),
      ).toBe(true);

      expect(
        helperIsMotificationsPlacementTop({
          placement: 'bottom-left',
        }),
      ).toBe(false);

      expect(
        helperIsMotificationsPlacementTop({
          placement: 'bottom-center',
        }),
      ).toBe(false);

      expect(
        helperIsMotificationsPlacementTop({
          placement: 'bottom-right',
        }),
      ).toBe(false);
    });
  });

  describe('helperNotificationsWrapperInsetGenerator', () => {
    it('returns the correct inset by offset and placement', () => {
      expect(
        helperNotificationsWrapperInsetGenerator({
          offset: '10px',
          placement: 'top-left',
        }),
      ).toBe('10px auto auto 10px');

      expect(
        helperNotificationsWrapperInsetGenerator({
          offset: '3px',
          placement: 'top-center',
        }),
      ).toBe('3px 0px auto 0px');

      expect(
        helperNotificationsWrapperInsetGenerator({
          offset: '12px',
          placement: 'top-right',
        }),
      ).toBe('12px 12px auto auto');

      expect(
        helperNotificationsWrapperInsetGenerator({
          offset: '8px',
          placement: 'bottom-left',
        }),
      ).toBe('auto auto 8px 8px');

      expect(
        helperNotificationsWrapperInsetGenerator({
          offset: '6px',
          placement: 'bottom-center',
        }),
      ).toBe('auto 0px 6px 0px');

      expect(
        helperNotificationsWrapperInsetGenerator({
          offset: '4px',
          placement: 'bottom-right',
        }),
      ).toBe('auto 4px 4px auto');
    });
  });

  describe('helperNotificationsItemsMarginGenerator', () => {
    it('returns the correct margin by placement', () => {
      expect(
        helperNotificationsItemsMarginGenerator({
          placement: 'top-left',
        }),
      ).toBe('0px 0px 12px 0px');

      expect(
        helperNotificationsItemsMarginGenerator({
          placement: 'top-center',
        }),
      ).toBe('0px 0px 12px 0px');

      expect(
        helperNotificationsItemsMarginGenerator({
          placement: 'top-right',
        }),
      ).toBe('0px 0px 12px 0px');

      expect(
        helperNotificationsItemsMarginGenerator({
          placement: 'bottom-left',
        }),
      ).toBe('12px 0px 0px 0px');

      expect(
        helperNotificationsItemsMarginGenerator({
          placement: 'bottom-center',
        }),
      ).toBe('12px 0px 0px 0px');

      expect(
        helperNotificationsItemsMarginGenerator({
          placement: 'bottom-right',
        }),
      ).toBe('12px 0px 0px 0px');
    });
  });

  describe('helperNotificationsWaitForTimeout', () => {
    it('returns the delay after waiting for the delay', async () => {
      await expect(helperNotificationsWaitForTimeout(200)).resolves.toBe(200);
    });
  });
});
