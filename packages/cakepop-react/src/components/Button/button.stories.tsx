import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { defaultTheme } from '../../themes/defaultTheme.css';
import { excludedParams } from '../../utils/excludedParams';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

const buttonTemplate: StoryFn<typeof Button> = (args) => {
  return (
    <div style={{ display: 'flex' }} className={defaultTheme}>
      <Button disabled variant='accent'>
        button
      </Button>
    </div>
  );
};

export const button = buttonTemplate.bind({});
button.parameters = { controls: { exclude: excludedParams, sort: 'alpha' } };
