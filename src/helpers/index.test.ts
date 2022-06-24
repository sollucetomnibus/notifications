import {
  Constants,
} from '../constants';
import {
  TNotificationsStateInitPlacement,
} from '../types';
import {
  helperGenerateUUIDV4,
  helperIsMotificationsPlacementTop,
  helperNotificationsWrapperInsetGenerator,
  helperNotificationsItemsMarginGenerator,
  helperNotificationsItemsTransformGenerator,
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
          offset: '20px',
          placement: 'top-left',
        }),
      ).toBe(`calc(20px - ${Constants.items.marginY}) auto auto 20px`);

      expect(
        helperNotificationsWrapperInsetGenerator({
          offset: '13px',
          placement: 'top-center',
        }),
      ).toBe(`calc(13px - ${Constants.items.marginY}) 0px auto 0px`);

      expect(
        helperNotificationsWrapperInsetGenerator({
          offset: '16px',
          placement: 'top-right',
        }),
      ).toBe(`calc(16px - ${Constants.items.marginY}) 16px auto auto`);

      expect(
        helperNotificationsWrapperInsetGenerator({
          offset: '18px',
          placement: 'bottom-left',
        }),
      ).toBe(`auto auto calc(18px - ${Constants.items.marginY}) 18px`);

      expect(
        helperNotificationsWrapperInsetGenerator({
          offset: '24px',
          placement: 'bottom-center',
        }),
      ).toBe(`auto 0px calc(24px - ${Constants.items.marginY}) 0px`);

      expect(
        helperNotificationsWrapperInsetGenerator({
          offset: '28px',
          placement: 'bottom-right',
        }),
      ).toBe(`auto 28px calc(28px - ${Constants.items.marginY}) auto`);
    });
  });

  describe('helperNotificationsItemsMarginGenerator', () => {
    it('returns the correct margin by placement', () => {
      expect(
        helperNotificationsItemsMarginGenerator({
          placement: 'top-left',
        }),
      ).toBe(`0px 0px ${Constants.items.marginY} 0px`);

      expect(
        helperNotificationsItemsMarginGenerator({
          placement: 'top-center',
        }),
      ).toBe(`0px 0px ${Constants.items.marginY} 0px`);

      expect(
        helperNotificationsItemsMarginGenerator({
          placement: 'top-right',
        }),
      ).toBe(`0px 0px ${Constants.items.marginY} 0px`);

      expect(
        helperNotificationsItemsMarginGenerator({
          placement: 'bottom-left',
        }),
      ).toBe(`${Constants.items.marginY} 0px 0px 0px`);

      expect(
        helperNotificationsItemsMarginGenerator({
          placement: 'bottom-center',
        }),
      ).toBe(`${Constants.items.marginY} 0px 0px 0px`);

      expect(
        helperNotificationsItemsMarginGenerator({
          placement: 'bottom-right',
        }),
      ).toBe(`${Constants.items.marginY} 0px 0px 0px`);
    });
  });

  describe('helperNotificationsItemsTransformGenerator', () => {
    it('returns the correct transform by animation, visibility, and placement', () => {
      expect(
        helperNotificationsItemsTransformGenerator({
          hasAnimation: true,
          isVisible: false,
          placement: 'top-left',
        }),
      ).toBe(`translateY(-${Constants.items.marginY})`);

      expect(
        helperNotificationsItemsTransformGenerator({
          hasAnimation: true,
          isVisible: true,
          placement: 'top-left',
        }),
      ).toBe(`translateY(0px)`);

      expect(
        helperNotificationsItemsTransformGenerator({
          hasAnimation: true,
          isVisible: false,
          placement: 'top-center',
        }),
      ).toBe(`translateY(-${Constants.items.marginY})`);

      expect(
        helperNotificationsItemsTransformGenerator({
          hasAnimation: true,
          isVisible: true,
          placement: 'top-center',
        }),
      ).toBe(`translateY(0px)`);

      expect(
        helperNotificationsItemsTransformGenerator({
          hasAnimation: true,
          isVisible: false,
          placement: 'top-right',
        }),
      ).toBe(`translateY(-${Constants.items.marginY})`);

      expect(
        helperNotificationsItemsTransformGenerator({
          hasAnimation: true,
          isVisible: true,
          placement: 'top-right',
        }),
      ).toBe(`translateY(0px)`);

      expect(
        helperNotificationsItemsTransformGenerator({
          hasAnimation: true,
          isVisible: false,
          placement: 'bottom-left',
        }),
      ).toBe(`translateY(${Constants.items.marginY})`);

      expect(
        helperNotificationsItemsTransformGenerator({
          hasAnimation: true,
          isVisible: true,
          placement: 'bottom-left',
        }),
      ).toBe(`translateY(0px)`);

      expect(
        helperNotificationsItemsTransformGenerator({
          hasAnimation: true,
          isVisible: false,
          placement: 'bottom-center',
        }),
      ).toBe(`translateY(${Constants.items.marginY})`);

      expect(
        helperNotificationsItemsTransformGenerator({
          hasAnimation: true,
          isVisible: true,
          placement: 'bottom-center',
        }),
      ).toBe(`translateY(0px)`);

      expect(
        helperNotificationsItemsTransformGenerator({
          hasAnimation: true,
          isVisible: false,
          placement: 'bottom-right',
        }),
      ).toBe(`translateY(${Constants.items.marginY})`);

      expect(
        helperNotificationsItemsTransformGenerator({
          hasAnimation: true,
          isVisible: true,
          placement: 'bottom-right',
        }),
      ).toBe(`translateY(0px)`);

      expect(
        helperNotificationsItemsTransformGenerator({
          hasAnimation: false,
          isVisible: Math.random() < 0.5,
          placement: 'any-position' as TNotificationsStateInitPlacement,
        }),
      ).toBe(`translateY(0px)`);
    });
  });

  describe('helperNotificationsWaitForTimeout', () => {
    it('returns the delay after waiting for the delay', async () => {
      await expect(helperNotificationsWaitForTimeout(200)).resolves.toBe(200);
    });
  });
});
