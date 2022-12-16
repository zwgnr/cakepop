import * as React from 'react'

import { NavigationMenuLink, NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';
import { navListItemRecipe } from './navRecipe';

export const NavListItem = (props: NavigationMenuLinkProps) => (
  <li>
    <NavigationMenuLink asChild {...props}>
      <a className={navListItemRecipe()}>{props.children} </a>
    </NavigationMenuLink>
  </li>
);
