import { StoryFn, Meta } from '@storybook/react';

import { defaultTheme } from '../../themes/defaultTheme.css';

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
      <Spacer />
    </div>
  );
};
