import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import AnimateOnScollComp, { AnimateOnScrollProp, AnimationDirection } from '../../components/AnimateOnScrollComp/AnimateOnScrollComp';

export default {
  title: 'Components/Animate On Scroll',
  component: AnimateOnScollComp,
  argTypes: {
    direction: { control: { type: 'select', options: [0, 1, 2, 3] } },
    id: { control: { type: 'text', disable: true } },
    className: { control: { type: 'text', disable: true } }
  }
} as Meta;

const Template: Story<AnimateOnScrollProp> = ({direction}) => (
  <AnimateOnScollComp direction={direction}>
    <h1>Test</h1>
  </AnimateOnScollComp>
);

export const AnimateUp = Template.bind({});
AnimateUp.args = {
  direction: AnimationDirection.Up,
};

export const AnimateDown = Template.bind({});
AnimateDown.args = {
  direction: AnimationDirection.Down,
};

export const AnimateLeft = Template.bind({});
AnimateLeft.args = {
  direction: AnimationDirection.Left,
};

export const AnimateRight = Template.bind({});
AnimateRight.args = {
  direction: AnimationDirection.Right,
};
