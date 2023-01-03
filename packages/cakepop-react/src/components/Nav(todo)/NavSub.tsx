import * as React from 'react'

import { NavigationMenuSub, NavigationMenuSubProps } from '@radix-ui/react-navigation-menu';

export const NavSub = (props: NavigationMenuSubProps) => (
  <NavigationMenuSub className='test' {...props}>
    {props.children}
  </NavigationMenuSub>
);
