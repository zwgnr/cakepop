import * as React from 'react'

import { NavigationMenuTrigger, NavigationMenuTriggerProps } from '@radix-ui/react-navigation-menu';

export const NavTrigger = (props: NavigationMenuTriggerProps) => (
  <NavigationMenuTrigger className='test' {...props}>
    {props.children}
  </NavigationMenuTrigger>
);
