import {
  INotificationsStateUIItem,
} from '../redux';

export interface IUseNotificationsItemsVisibilityProps {
  id: INotificationsStateUIItem['id'];
}

export interface IUseNotificationsItemsVisibilityReturn {
  isItemVisible: boolean;
}

export interface IUseNotificationsItemsRemoveAutoProps {
  id: INotificationsStateUIItem['id'];
}
