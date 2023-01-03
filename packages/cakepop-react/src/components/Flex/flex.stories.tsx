import { StoryFn, Meta } from '@storybook/react';

import { defaultTheme } from '../../themes/defaultTheme.css';

import { Flex } from '../Flex/Flex';

export default {
  title: 'Flex',
  component: Flex,
} as Meta<typeof Flex>;

export const flex: StoryFn<typeof Flex> = (args) => {
  return (
    <div className={defaultTheme}>
      <Flex></Flex>
    </div>
  );
};
