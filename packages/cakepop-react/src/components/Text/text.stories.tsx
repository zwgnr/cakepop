import { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { defaultTheme } from '../../themes/defaultTheme';
import { Text } from './index';
import { excludedParams } from '../../utils/excludedParams';

import { Spacer } from '../Spacer/Spacer';

export default {
  title: 'Text',
  component: Text,
} as Meta<typeof Text>;

const textTemplate: StoryFn<typeof Text> = (args) => {
  return (
    <div className={defaultTheme}>
      <Text color={'blue'}>Hey!</Text>
    </div>
  );
};

export const text = textTemplate.bind({});
text.parameters = { controls: { exclude: excludedParams, sort: 'alpha' } };
