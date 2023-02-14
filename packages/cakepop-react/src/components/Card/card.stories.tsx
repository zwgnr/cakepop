import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { defaultTheme } from '../../themes/defaultTheme.css';
import { Card } from './index';

export default {
  title: 'Card',
  component: Card,
} as Meta<typeof Card>;

export const card: StoryFn<typeof Card> = (args) => {
  return (
    <div className={defaultTheme}>
      <Card {...args}>
        <button>button</button>
      </Card>
    </div>
  );
};