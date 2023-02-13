import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { defaultTheme } from '../../themes/defaultTheme.css';
import { Checkbox } from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const checkbox: StoryFn<typeof Checkbox> = (args) => {
  let [selected, setSelected] = useState(false);
  //const handleChecked = {isChecked ? 'checked' : 'unchecked'}
  return (
    <div className={defaultTheme}>
      <Checkbox variant='neutral' size='xs'>xs</Checkbox>
      <Checkbox variant='primary' size='sm'>sm</Checkbox>
      <Checkbox variant='neutral' size='md'>md</Checkbox>
      <Checkbox variant='neutral' size='lg'>lg</Checkbox>
      <Checkbox  variant='neutral'size='xl'>xl</Checkbox>
    </div>
  );
};
