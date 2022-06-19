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
      return `${offset} auto auto ${offset}`;

    case 'top-right':
      return `${offset} ${offset} auto auto`;

    case 'top-center':
      return `${offset} 0px auto 0px`;

    case 'bottom-left':
      return `auto auto ${offset} ${offset}`;

    case 'bottom-center':
      return `auto 0px ${offset} 0px`;

    // 'bottom-right'
    default:
      return `auto ${offset} ${offset} auto`;
  }
};

export const helperNotificationsItemsMarginGenerator = ({
  placement,
}: {
  placement: TNotificationsStateInitPlacement;
}): string => {
  if (helperIsMotificationsPlacementTop({ placement })) {
    return '0px 0px 12px 0px';
  }

  return '12px 0px 0px 0px';
};

export const helperNotificationsWaitForTimeout = (delay: number): Promise<number> => new Promise((resolve) => {
  const timeout = window.setTimeout(() => {
    resolve(delay);
    window.clearTimeout(timeout);
  }, delay);
  return timeout;
});
