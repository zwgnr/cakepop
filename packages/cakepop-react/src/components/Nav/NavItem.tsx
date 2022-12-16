import * as React from 'react'

import { NavigationMenuItem, NavigationMenuItemProps } from '@radix-ui/react-navigation-menu';
import { navItemRecipe } from './navRecipe';

export const NavItem = (props: NavigationMenuItemProps) => (
  <NavigationMenuItem className={navItemRecipe()} {...props}>
    {props.children}
  </NavigationMenuItem>
);
