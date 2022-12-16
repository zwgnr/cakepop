import { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { defaultTheme } from '../../themes/defaultTheme';
import { pop } from '../../index';
import { Button } from '../Button';

import { Flex } from '../Flex/Flex';
import { Container } from '../../index';
import { pallete } from '../../contract/tokens';

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
