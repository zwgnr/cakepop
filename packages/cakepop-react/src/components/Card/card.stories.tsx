import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { defaultTheme } from '../../themes/defaultTheme.css';
import { Card } from './index';
import { Container } from '../Container/Container';

export default {
  title: 'Card',
  component: Card,
} as Meta<typeof Card>;

export const card: StoryFn<typeof Card> = (args) => {
  return (
    <div className={defaultTheme}>
      <Card {...args}>
        <button>button</button>
      </Card>
    </div>
  );
};

/* <Card.Image rounded>
            <img
              style={{ objectFit: 'cover' }}
              width='100%'
              height='100px'
              src='https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80'
            ></img>
          </Card.Image>
          <Card.Header>Card header</Card.Header>
          <Card.Footer>{''}</Card.Footer>
          */
