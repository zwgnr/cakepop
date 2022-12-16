import * as React from 'react';
import { Nav, Seperator, Button } from '@cakepop/react';

export const SideNav = () => {
  return (
    <Nav backgroundColor={'red'} orientation='vertical'>
      <Nav.Title>CakepopUI</Nav.Title>
      <Button backgroundColor={'red'}>PressME!</Button>
      <Seperator orientation='horizontal' />
      <h3 style={{ margin: '0px 12px' }}>Overview</h3>
      <Nav.List orientation='vertical'>
        <Nav.Item>
          <Nav.Link href='test'>Install</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='test'>Use</Nav.Link>
        </Nav.Item>
      </Nav.List>
      <Seperator orientation='horizontal' />
      <h3 style={{ margin: '0px 12px' }}>Components</h3>
      <h4 style={{ margin: '12px 0 6px 12px', color: 'lightgrey' }}>Interactions</h4>
      <Nav.List orientation='vertical'>
        <Nav.Item>
          <Nav.Link href='test'>Button</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='test'>Checkbox</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='test'>Switch</Nav.Link>
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
};
