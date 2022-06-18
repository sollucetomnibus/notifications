import {
  IActionNotificationsItemRemoveProps,
  IActionNotificationsItemUpdateVisibilityProps,
} from './actions';
import {
  INotificationsUIStateItem,
} from './context';

export interface IUseNotificationsItemsVisibilityProps {
  id: INotificationsUIStateItem['id'];
}

export interface IUseNotificationsItemsVisibilityReturn {
  isVisible: boolean;
}

export interface IUseNotificationsActionsPrivateReturn {
  actionNotificationsItemRemove: (
    props: IActionNotificationsItemRemoveProps,
  ) => void;
  actionNotificationsItemUpdateVisibility: (
    props: IActionNotificationsItemUpdateVisibilityProps,
  ) => void;
}
