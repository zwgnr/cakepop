import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { defaultTheme } from '../../themes/defaultTheme.css';
import { Switch } from './Switch';

export default {
  title: 'Switch',
  component: Switch,
} as Meta<typeof Switch>;

export const switchComponent: StoryFn<typeof Switch> = (args) => {
  let [selected, setSelected] = useState(false);
  return (
    <div className={defaultTheme}>
      <Switch
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