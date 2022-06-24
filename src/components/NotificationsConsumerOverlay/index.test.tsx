import React from 'react';
import { render } from '@testing-library/react';

import {
  getMockNotificationsStateUIItem,
  MockNotificationsProvider,
} from '../../redux';

import NotificationsConsumerOverlay from '.';

describe('NotificationsConsumerOverlay', () => {
  it('returns "null" if "hasBackgroundOverlay" option is "false"', () => {
    const { queryByTestId } = render(
      <MockNotificationsProvider
        options={{
          hasBackgroundOverlay: false,
        }}
      >
        <NotificationsConsumerOverlay />
      </MockNotificationsProvider>,
    );
    const ovelay = queryByTestId('NotificationsConsumerOverlay');
    expect(ovelay).toBeNull();
  });

  it('returns "null" if "hasBackgroundOverlay" option is "true" but there is no "item"', () => {
    const { queryByTestId } = render(
      <MockNotificationsProvider
        options={{
          hasBackgroundOverlay: true,
        }}
        items={[]}
      >
        <NotificationsConsumerOverlay />
      </MockNotificationsProvider>,
    );
    const ovelay = queryByTestId('NotificationsConsumerOverlay');
    expect(ovelay).toBeNull();
  });

  it('returns the overlay element correctly', () => {
    const { queryByTestId } = render(
      <MockNotificationsProvider
        options={{
          hasBackgroundOverlay: true,
        }}
        items={[
          getMockNotificationsStateUIItem({
            isVisible: true,
          }),
        ]}
      >
        <NotificationsConsumerOverlay />
      </MockNotificationsProvider>,
    );
    const ovelay = queryByTestId('NotificationsConsumerOverlay');
    expect(ovelay?.tagName).toBe('DIV');
    // TODO: other stuff
  });
});
