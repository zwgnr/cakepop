import * as React from 'react'

import {
  NavigationMenuViewport,
  NavigationMenuViewportProps,
} from '@radix-ui/react-navigation-menu';

export const NavViewport = (props: NavigationMenuViewportProps) => (
  <NavigationMenuViewport className='test' {...props} />
);
