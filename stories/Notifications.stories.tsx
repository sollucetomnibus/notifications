import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  NotificationsProvider,
  useNotifications,
} from '../src';

const App: React.FC = () => {
  const { add } = useNotifications({
    // offset: '24px',
    // hasAnimation: false,
    // placement: 'top-right',
  });

  return (
    <div>
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
