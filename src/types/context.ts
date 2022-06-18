export type TNotificationsInitStateUnit = `${number}${'px' | '%' | 'rem' | 'em'}`;

export type TNotificationsInitStateColor = `rgb(${number}, ${number}, ${number})`
  | `rgba(${number}, ${number}, ${number}, ${number})`
  | `#${string}`;

export type TNotificationsInitStatePlacement = 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface INotificationsInitState {
  autoRemoveDelay?: number;
  classNameWrapper?: string;
  classNameItems?: string;
  zIndex?: number;
  placement?: TNotificationsInitStatePlacement;
  width?: TNotificationsInitStateUnit;
  offset?: TNotificationsInitStateUnit;
  opacity?: number;
  hasBackgroundOverlay?: boolean;
  backgroundOverlayColor?: TNotificationsInitStateColor;
  borderRadius?: TNotificationsInitStateUnit;
  hasAnimation?: boolean;
  animationDurationAsMilliseconds?: number;
  // clickToClose?: boolean;
  // pauseOnHover?: boolean;
  // showOnlyTheLastOne?: boolean;
}

export type TNotificationsInitUpdate = React.Dispatch<React.SetStateAction<INotificationsInitState>>;

export interface INotificationsUIStateItem {
  id: string;
  isVisible: boolean;
  isAutoRemovable: boolean;
}

export type TNotificationsUIState = INotificationsUIStateItem[];

export type TNotificationsUIUpdate = React.Dispatch<React.SetStateAction<TNotificationsUIState>>;

export interface INotificationsContext {
  initState: INotificationsInitState;
  initUpdate: TNotificationsInitUpdate;
  uiState: TNotificationsUIState;
  uiUpdate: TNotificationsUIUpdate;
}
