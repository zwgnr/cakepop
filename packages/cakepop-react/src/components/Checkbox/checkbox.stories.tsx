import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { defaultTheme } from '../../themes/defaultTheme.css';

import { Button } from '../Button/';
import { Flex } from '../Flex/Flex';
import { Checkbox } from './Checkbox';
import { Container } from '../Container/Container';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const checkbox: StoryFn<typeof Checkbox> = (args) => {
  let [selected, setSelected] = useState(false);
  //const handleChecked = {isChecked ? 'checked' : 'unchecked'}
  return (
    <div className={defaultTheme}>
      <Checkbox variant='primary' size='xs'>xs</Checkbox>
      <Checkbox size='sm'>sm</Checkbox>
      <Checkbox size='md'>md</Checkbox>
      <Checkbox size='lg'>lg</Checkbox>
      <Checkbox size='xl'>xl</Checkbox>
    </div>
  );
};
