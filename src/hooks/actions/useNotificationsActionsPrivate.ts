import {
  INotificationsUIStateItem,
  IActionNotificationsItemRemoveProps,
  IActionNotificationsItemUpdateVisibilityProps,
  IUseNotificationsActionsPrivateReturn,
} from '../../types';
import {
  useNotificationsGetUIState,
  useNotificationsGetUIUpdate,
} from '../states';

export const useNotificationsActionsPrivate = (): IUseNotificationsActionsPrivateReturn => {
  const { uiState } = useNotificationsGetUIState();
  const { uiUpdate } = useNotificationsGetUIUpdate();

  const actionNotificationsItemRemove = ({
    id,
  }: IActionNotificationsItemRemoveProps): void => {
    const newState = uiState.filter((item) => item.id !== id);
    uiUpdate(newState);
  };

  const actionNotificationsItemUpdateVisibility = ({
    id,
    isVisible,
  }: IActionNotificationsItemUpdateVisibilityProps): void => {
    const newState = uiState.map((item) => {
      if (item.id === id) {
        const newItem: INotificationsUIStateItem = {
          ...item,
          isVisible,
        };
        return newItem;
      }
      return item;
    });
    uiUpdate(newState);
  };

  return {
    actionNotificationsItemRemove,
    actionNotificationsItemUpdateVisibility,
  };
};
