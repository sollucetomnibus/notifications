import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Example: React.FC = () => {
  return (
    <div>{'Example'}</div>
  );
};

export default {
  title: 'Example',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />;

export const ExampleTemplate = Template.bind({});

ExampleTemplate.args = {
  data: {
    example: 'Sol Lucet Omnibus',
  },
};
