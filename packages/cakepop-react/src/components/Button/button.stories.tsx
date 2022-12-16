import React from 'react';

import { StoryFn, Meta } from '@storybook/react';
//import { rainbowSprinkles, RealrainbowSprinkles } from '../../contract';

import { defaultTheme } from '../../themes/defaultTheme';

import { excludedParams } from '../../utils/excludedParams';

import { pop } from '../../utils';

import { style as css, style } from '@macaron-css/core';
import { SprinklesButton } from './Button';

import { Button } from '../../index';
import { Spacer } from '../Spacer/Spacer';
import { clsx } from 'clsx';
export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

const buttonTemplate: StoryFn<typeof Button> = (args) => {
  return (
    <div style={{ display: 'flex' }} className={defaultTheme}>
      <Button {...args}>Button</Button>
      <Spacer />
      <SprinklesButton
        sx={{
          padding: '$32',
          color: { hover: '$amber800' },
        }}
      />
      <Button {...args}>test</Button>
      <Spacer />
      <Button
        {...args}
        //overrides
      >
        test
        <div className={style({ backgroundColor: 'red' })}></div>
      </Button>
    </div>
  );
};

export const button = buttonTemplate.bind({});
//button.parameters = { controls: { exclude: excludedParams, sort: 'alpha' } };
