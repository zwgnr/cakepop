import { StoryFn, Meta } from '@storybook/react';

import { defaultTheme } from '../../themes/defaultTheme';

import { Button } from '../Button';
import { Container } from '../Container/Container';
import { Spacer } from '../Spacer/Spacer';

export default {
  title: 'Spacer',
  component: Spacer,
} as Meta<typeof Spacer>;

export const spacer: StoryFn<typeof Spacer> = (args) => {
  return (
    <div className={defaultTheme}>
      <Container>
        <p></p>
      </Container>
      <Spacer />
      <Container>
        <p></p>
      </Container>
      <Spacer />
      <Container mode='responsive' maxSize='lg'>
        <Container mode='responsive'>
 
        </Container>
        <Spacer />

      </Container>
    </div>
  );
};
