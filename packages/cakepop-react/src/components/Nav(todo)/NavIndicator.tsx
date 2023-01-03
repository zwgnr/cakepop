import * as React from 'react'

import {
  NavigationMenuIndicator,
  NavigationMenuIndicatorProps,
} from '@radix-ui/react-navigation-menu';

export const NavIndicator = (props: NavigationMenuIndicatorProps) => (
  <NavigationMenuIndicator className='test' {...props}>
    {props.children}
  </NavigationMenuIndicator>
);
