import * as React from 'react'

import { NavigationMenuLink, NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';
import { useObjectRef } from '@react-aria/utils';
import { navListItemRecipe,navLinkRecipe } from './navRecipe.css';

export const NavLink = (props: NavigationMenuLinkProps) => (
    <NavigationMenuLink className={navLinkRecipe()} {...props}>
      {props.children}
    </NavigationMenuLink>
);
