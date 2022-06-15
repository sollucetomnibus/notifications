import {
  isMotificationsPlacementTop,
  uuidV4,
} from '../../helpers';
import {
  INotificationsInitState,
  INotificationsUIStateItem,
  IUseNotificationsReturn,
  IUseNotificationsUpdateVisibility,
} from '../../types';
import {
  useNotificationsGetInitState,
  useNotificationsSetInitState,
  useNotificationsGetUIState,
  useNotificationsGetUIUpdate,
} from '../states';

// TODO: Separate to Public and Private
export const useNotifications = (
  initOptions: INotificationsInitState = {},
): IUseNotificationsReturn => {
  const { initState } = useNotificationsGetInitState();
  const { uiState } = useNotificationsGetUIState();
  const { uiUpdate } = useNotificationsGetUIUpdate();

  useNotificationsSetInitState(initOptions);

  const add = (): void => {
    const id = uuidV4();
    const item: INotificationsUIStateItem = {
      id,
      isVisible: false,
    };

    if (isMotificationsPlacementTop({
      placement: initState.placement,
    })) {
      uiUpdate([item, ...uiState]);
    } else {
      uiUpdate([...uiState, item]);
    }
  };

  const remove = (id: string): void => {
    uiUpdate([...uiState.filter((item) => item.id !== id)]);
  };

  const notificationUpdateVisibility = ({
    id,
    isVisible,
  }: IUseNotificationsUpdateVisibility): void => {
    uiUpdate([...uiState.filter((item) => {
      if (item.id === id) {
        const newItem: INotificationsUIStateItem = {
          ...item,
          isVisible,
        };
        return newItem;
      }
      return item;
    })]);
  };

  return {
    add,
    remove,
    notificationUpdateVisibility,
  };
};
