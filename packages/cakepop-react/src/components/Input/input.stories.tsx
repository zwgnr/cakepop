import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { defaultTheme } from '../../themes/defaultTheme.css';

import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
} as Meta<typeof Input>;

export const input: StoryFn<typeof Input> = (args) => {
  const [stringValue, setStringValue] = useState('');
  return (
    <div className={defaultTheme}>
      <Input
        type='text'
        value={stringValue}
        //defaultValue='Email Address'
        onChange={(event: any) => setStringValue(event.target.value)}
        {...args}
        label='Email:'
        //startHelper='https//'
        //endHelper='.com'
        errorMessage='please enter a valid email'
        description='idk'
      />
    </div>
  );
};
