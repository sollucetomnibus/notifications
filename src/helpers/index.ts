import {
  TNotificationsInitStatePlacement,
  TNotificationsInitStateUnit,
} from '../types';

const uuidV4Generator = (count: number): string => {
  let result = '';
  for (let i = 0; i < count; ++i) {
    result += (16 * Math.random() | 0).toString(16);
  }
  return result;
};

export const uuidV4 = (): string => {
  const uuidV4 = `${uuidV4Generator(8)}-${uuidV4Generator(4)}-4${uuidV4Generator(3)}-${(((16 * Math.random() | 0) & 0x3) | 0x8).toString(16)}${uuidV4Generator(3)}-${uuidV4Generator(12)}`;
  return uuidV4;
};

export const isMotificationsPlacementTop = ({
  placement,
}: {
  placement: TNotificationsInitStatePlacement;
}): boolean => {
  const topPlacements: TNotificationsInitStatePlacement[] = [
    'top-left',
    'top-center',
    'top-right',
  ];
  return topPlacements.includes(placement);
};

export const notificationsWrapperInsetGenerator = ({
  offset,
  placement,
}: {
  offset: TNotificationsInitStateUnit;
  placement: TNotificationsInitStatePlacement;
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

export const notificationsItemsMarginGenerator = ({
  placement,
}: {
  placement: TNotificationsInitStatePlacement;
}): string => {
  if (isMotificationsPlacementTop({ placement })) {
    return '0px 0px 12px 0px';
  }

  return '12px 0px 0px 0px';
};
