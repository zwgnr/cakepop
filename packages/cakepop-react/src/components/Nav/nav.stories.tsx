import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { defaultTheme } from '../../themes/defaultTheme';

import { Button } from '../Button';
import { Flex } from '../Flex/Flex';
import Nav from './index';
//import { NavLink } from './index';
import { Container } from '../Container/Container';
import { Seperator } from '../Seperator/Seperator';

export default {
  title: 'Nav',
  component: Nav,
} as Meta<typeof Nav>;

export const nav: StoryFn<typeof Nav> = (args) => {
  let [selected, setSelected] = useState(false);
  return (
    <div className={defaultTheme}>
      <Nav {...args} orientation='vertical'>
        <Nav.Title>BRANDNAME</Nav.Title>
        <Seperator orientation='horizontal' />
        <h2 style={{ margin: '0px 12px' }}>Overview</h2>
        <Nav.List orientation='vertical'>
          <Nav.Item>
            <Nav.Link href='test'>Install</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='test'>Use</Nav.Link>
          </Nav.Item>
        </Nav.List>
        <Seperator orientation='horizontal' />
        <h2 style={{ margin: '0px 12px' }}>Components</h2>
        <h3 style={{ margin: '12px 0 6px 12px', color: 'lightgrey' }}>Interactions</h3>
        <Nav.List orientation='vertical'>
          <Nav.Item>
            <Nav.Link href='test'>Button</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='test'>CheckBox</Nav.Link>
          </Nav.Item>
        </Nav.List>
      </Nav>
    </div>
  );
};

/*


<Nav.Item>
  <Nav.Link href='test'>Switch</Nav.Link>
</Nav.Item>
<Seperator orientation='horizontal' />
<h4 style={{ margin: '12px 0 0 12px', color: 'lightgrey' }}>Navigation</h4>
<Nav.Item>
  <Nav.Link href='test'>Flex</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link href='test'>Nav</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link href='test'>Switch</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link href='test'>Tabs</Nav.Link>
</Nav.Item>
<Seperator orientation='horizontal' />
<Nav.Item>
  <Nav.Trigger>Sub</Nav.Trigger>
  <Nav.Content>
    <Nav.Sub>
      <Nav.List position='side'>
        <Nav.Item>
          <Nav.Trigger>test2</Nav.Trigger>
          <Nav.Content>
            <Nav.ListItem>testing123</Nav.ListItem>
          </Nav.Content>
        </Nav.Item>
        <Nav.Viewport />
      </Nav.List>
    </Nav.Sub>
  </Nav.Content>
</Nav.Item>
<Nav.Item>
  <Nav.Trigger>test</Nav.Trigger>
  <Nav.Content>
    <Nav.ListItem>testing123</Nav.ListItem>
  </Nav.Content>
</Nav.Item>
<Nav.Indicator />
*/
