import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  NotificationsProvider,
  useNotifications,
} from '../src';

import styles from './Notifications.module.scss';

const App: React.FC = () => {
  const { add } = useNotifications({
    classNameWrapper: styles.wrapper,
    hasBackgroundOverlay: true,
    backgroundOverlayColor: 'rgba(255, 204, 0, 0.25)',
    autoRemoveDelay: 6000,
    borderRadius: '8px',
    offset: '12px',
    // placement: 'bottom-center',
    // hasAnimation: false,
  });

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 9999,
      }}
    >
      <h1>{'App'}</h1>
      <button
        type="button"
        onClick={() => add()}
      >{'ADD'}</button>
    </div>
  );
};

const NotificationsExample: React.FC = () => {
  return (
    <NotificationsProvider>
      <App />
    </NotificationsProvider>
  );
};

export default {
  title: 'Notifications',
  component: NotificationsExample,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NotificationsExample>;

const Template: ComponentStory<typeof NotificationsExample> = (args) => <NotificationsExample {...args} />;

export const ExampleTemplate = Template.bind({});

ExampleTemplate.args = {
  data: {
    example: 'Sol Lucet Omnibus',
  },
};
