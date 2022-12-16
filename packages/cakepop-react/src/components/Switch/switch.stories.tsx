import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { style } from '@macaron-css/core';
//import { style } from '../../index';
import { pop } from '../../index';
import { defaultTheme } from '../../themes/defaultTheme';

import { Button } from '../Button';
import { Flex } from '../Flex/Flex';
import { Switch } from './Switch';
import { Container } from '../Container/Container';

export default {
  title: 'Switch',
  component: Switch,
} as Meta<typeof Switch>;

export const switchComponent: StoryFn<typeof Switch> = (args) => {
  let [selected, setSelected] = useState(false);
  return (
    <div className={defaultTheme}>
      <Switch
        css={style({ backgroundColor: 'red !important' })}
        variant='accent'
        onCheckedChange={setSelected}
        {...args}
      >
        Switch
      </Switch>
      <p>{selected ? 'Low' : 'High'} power mode active.</p>
    </div>
  );
};

//<Switch size='xs' {...args} variant='primary' aria-label='toggle' />
//        <Switch size='sm' {...args} aria-label='toggle' />
//        <Switch size='md' {...args} aria-label='toggle' />
//        <Switch size='lg' {...args} aria-label='toggle' />
//       <Switch size='xl' {...args} aria-label='toggle' onChange={setSelected}>
//         PowerMode
//       </Switch>
//       <p>{selected ? 'Low' : 'High'} power mode active.</p>
