import * as React from 'react';

import { NavigationMenuList, NavigationMenuListProps } from '@radix-ui/react-navigation-menu';
import { navListRecipe } from './navRecipe';

export interface NavlistProps extends NavigationMenuListProps {
  orientation?: 'horizontal' | 'vertical';
}

export const NavList = (props: NavlistProps) => {
  let { orientation } = props;
  return (
    <NavigationMenuList className={navListRecipe({ orientation })} {...props}>
      {props.children}
    </NavigationMenuList>
  );
};
