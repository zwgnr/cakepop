import { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { defaultTheme } from '../../themes/defaultTheme.css';

import { Flex } from '../Flex/Flex';
import { Container } from './Container';


export default {
  title: 'Container',
  component: Container,
} as Meta<typeof Container>;

export const container: StoryFn<typeof Container> = (args) => {
  return (
    <div className={defaultTheme}>
      <Container {...args}>
        <Flex >

        </Flex>
      </Container>
    </div>
  );
};
