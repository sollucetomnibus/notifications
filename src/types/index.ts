export type TNotificationsInitStateUnit = `${number}${'px' | '%' | 'rem' | 'em'}`;

export type TNotificationsInitStateColor = `rgb(${number}, ${number}, ${number})`
  | `rgba(${number}, ${number}, ${number}, ${number})`
  | `#${string}`;

export type TNotificationsInitStatePlacement = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface INotificationsInitState {
  classNameWrapper?: string;
  classNameItems?: string;
  timeout?: number;
  placement?: TNotificationsInitStatePlacement;
  zIndex?: number;
  offset?: TNotificationsInitStateUnit;
  width?: TNotificationsInitStateUnit;
  opacity?: number;
  borderRadius?: TNotificationsInitStateUnit;
  backgroundOverlay?: boolean;
  backgroundOverlayColor?: TNotificationsInitStateColor;
  // clickToClose?: boolean;
  // pauseOnHover?: boolean;
  // showOnlyTheLastOne?: boolean;
}

export type TNotificationsInitUpdate = React.Dispatch<React.SetStateAction<INotificationsInitState>>;

export interface INotificationsUIStateItem {
  id: string;
}

export type TNotificationsUIState = INotificationsUIStateItem[];

export type TNotificationsUIUpdate = React.Dispatch<React.SetStateAction<TNotificationsUIState>>;

export interface INotificationsContext {
  initState: INotificationsInitState;
  initUpdate: TNotificationsInitUpdate;
  uiState: TNotificationsUIState;
  uiUpdate: TNotificationsUIUpdate;
}

export interface IUseNotificationsUIMethodsReturn {
  add: () => void;
  remove: (id: string) => void;
}

export type TUseNotificationsReturn = IUseNotificationsUIMethodsReturn;
