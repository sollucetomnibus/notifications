import {
  INotificationsUIStateItem,
} from './context';

export interface IActionNotificationsItemUpdateVisibilityProps {
  id: INotificationsUIStateItem['id'];
  isVisible: boolean;
}

export interface IActionNotificationsItemRemoveProps {
  id: INotificationsUIStateItem['id'];
}
