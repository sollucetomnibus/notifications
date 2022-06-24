import {
  Constants,
} from '../constants';
import {
  TNotificationsStateInitPlacement,
  TNotificationsStateInitUnit,
} from '../types';

const helperGenerateUUIDV4Generator = (count: number): string => {
  let result = '';
  for (let i = 0; i < count; ++i) {
    result += (16 * Math.random() | 0).toString(16);
  }
  return result;
};

export const helperGenerateUUIDV4 = (): string => {
  const helperGenerateUUIDV4 = `${helperGenerateUUIDV4Generator(8)}-${helperGenerateUUIDV4Generator(4)}-4${helperGenerateUUIDV4Generator(3)}-${(((16 * Math.random() | 0) & 0x3) | 0x8).toString(16)}${helperGenerateUUIDV4Generator(3)}-${helperGenerateUUIDV4Generator(12)}`;
  return helperGenerateUUIDV4;
};

export const helperIsMotificationsPlacementTop = ({
  placement,
}: {
  placement: TNotificationsStateInitPlacement;
}): boolean => {
  const topPlacements: TNotificationsStateInitPlacement[] = [
    'top-left',
    'top-center',
    'top-right',
  ];
  return topPlacements.includes(placement);
};

export const helperNotificationsWrapperInsetGenerator = ({
  offset,
  placement,
}: {
  offset: TNotificationsStateInitUnit;
  placement: TNotificationsStateInitPlacement;
}): string => {
  switch (placement) {
    case 'top-left':
      return `calc(${offset} - ${Constants.items.marginY}) auto auto ${offset}`;

    case 'top-right':
      return `calc(${offset} - ${Constants.items.marginY}) ${offset} auto auto`;

    case 'top-center':
      return `calc(${offset} - ${Constants.items.marginY}) 0px auto 0px`;

    case 'bottom-left':
      return `auto auto calc(${offset} - ${Constants.items.marginY}) ${offset}`;

    case 'bottom-center':
      return `auto 0px calc(${offset} - ${Constants.items.marginY}) 0px`;

    // 'bottom-right'
    default:
      return `auto ${offset} calc(${offset} - ${Constants.items.marginY}) auto`;
  }
};

export const helperNotificationsItemsMarginGenerator = ({
  placement,
}: {
  placement: TNotificationsStateInitPlacement;
}): string => {
  if (helperIsMotificationsPlacementTop({ placement })) {
    return `0px 0px ${Constants.items.marginY} 0px`;
  }

  return `${Constants.items.marginY} 0px 0px 0px`;
};

export const helperNotificationsItemsTransformGenerator = ({
  hasAnimation,
  isVisible,
  placement,
}: {
  hasAnimation: boolean;
  isVisible: boolean;
  placement: TNotificationsStateInitPlacement;
}): string => {
  if (hasAnimation && !isVisible) {
    if (helperIsMotificationsPlacementTop({ placement })) {
      return `translateY(-${Constants.items.marginY})`;
    }

    return `translateY(${Constants.items.marginY})`;
  }

  return 'translateY(0px)';
};

export const helperNotificationsWaitForTimeout = (delay: number): Promise<number> => new Promise((resolve) => {
  const timeout = window.setTimeout(() => {
    resolve(delay);
    window.clearTimeout(timeout);
  }, delay);
  return timeout;
});
