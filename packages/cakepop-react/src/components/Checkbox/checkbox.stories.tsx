import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { defaultTheme } from '../../themes/defaultTheme';

import { Button } from '../Button/';
import { Flex } from '../Flex/Flex';
import { Checkbox } from './Checkbox';
import { Container } from '../Container/Container';

import { ZagCheckbox } from './zagCheckbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const checkbox: StoryFn<typeof Checkbox> = (args) => {
  let [selected, setSelected] = useState(false);
  //const handleChecked = {isChecked ? 'checked' : 'unchecked'}
  return (
    <div className={defaultTheme}>
      <ZagCheckbox > Input is</ZagCheckbox>
      <Checkbox {...args}>Test</Checkbox>
    </div>
  );
};
