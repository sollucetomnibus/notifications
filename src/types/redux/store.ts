export type TNotificationsStateInitUnit = `${number}${'px' | '%' | 'rem' | 'em'}`;

export type TNotificationsStateInitColor = `rgb(${number}, ${number}, ${number})`
  | `rgba(${number}, ${number}, ${number}, ${number})`
  | `#${string}`;

export type TNotificationsStateInitPlacement = 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface INotificationsStateInitOptions {
  autoRemoveDelay?: number;
  classNameWrapper?: string;
  classNameItems?: string;
  zIndex?: number;
  placement?: TNotificationsStateInitPlacement;
  width?: TNotificationsStateInitUnit;
  offset?: TNotificationsStateInitUnit;
  opacity?: number;
  hasBackgroundOverlay?: boolean;
  backgroundOverlayColor?: TNotificationsStateInitColor;
  borderRadius?: TNotificationsStateInitUnit;
  hasAnimation?: boolean;
  animationDurationAsMilliseconds?: number;
  // clickToClose?: boolean;
  // pauseOnHover?: boolean;
  // showOnlyTheLastOne?: boolean;
}

export interface INotificationsStateInit {
  options: INotificationsStateInitOptions;
}

export interface INotificationsStateUIItem {
  id: string;
  isVisible: boolean;
  isAutoRemovable: boolean;
}

export interface INotificationsStateUI {
  items: INotificationsStateUIItem[];
}
