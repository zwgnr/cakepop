import * as React from 'react'

import { NavigationMenuContent, NavigationMenuContentProps } from '@radix-ui/react-navigation-menu';

export const NavContent = (props: NavigationMenuContentProps) => (
  <NavigationMenuContent className='test' {...props}>
    {props.children}
  </NavigationMenuContent>
);
