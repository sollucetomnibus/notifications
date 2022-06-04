import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationsProvider } from '../src/components';
import { useNotificationsUIMethods } from '../src/hooks';

const App: React.FC = () => {
  const { add } = useNotificationsUIMethods();

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
