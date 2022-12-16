import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { defaultTheme } from '../../themes/defaultTheme';
import { Tabs } from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
} as Meta<typeof Tabs>;

export const tabs: StoryFn<typeof Tabs> = (args) => {
  let [selected, setSelected] = useState(false);
  return (
    <div className={defaultTheme}>
      <Tabs />
    </div>
  );
};
