import React from 'react';

import { StoryFn, Meta } from '@storybook/react';
//import { rainbowSprinkles, RealrainbowSprinkles } from '../../contract';

import { defaultTheme } from '../../themes/defaultTheme.css';
import { excludedParams } from '../../utils/excludedParams';
//import { SprinklesButton } from './Button';
import { overRideStyles } from './overRide.css';
import { Button } from './Button';
import { Spacer } from '../Spacer/Spacer';
import { clsx } from 'clsx';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

const buttonTemplate: StoryFn<typeof Button> = (args) => {
  return (
    <div style={{ display: 'flex' }} className={defaultTheme}>
      <Button overrides={overRideStyles} variant='accent'>
        button
      </Button>
    </div>
  );
};

export const button = buttonTemplate.bind({});
//button.parameters = { controls: { exclude: excludedParams, sort: 'alpha' } };
