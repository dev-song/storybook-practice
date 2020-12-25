import React from 'react';

import { Sample } from './Sample';

export default {
  title: 'Practice/Sample',
  component: Sample,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Sample {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Primary sample',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary sample'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text: 'Large Sample',
};
