import {
  INotificationsStateUIItem,
} from './redux';

export interface IUseNotificationsItemsVisibilityProps {
  id: INotificationsStateUIItem['id'];
}

export interface IUseNotificationsItemsVisibilityReturn {
  itemIsVisible: boolean;
}

export interface IUseNotificationsItemsRemoveAutoProps {
  id: INotificationsStateUIItem['id'];
}
