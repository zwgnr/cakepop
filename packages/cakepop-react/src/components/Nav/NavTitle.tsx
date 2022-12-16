import * as React from 'react'

import { NavigationMenuList, NavigationMenuListProps } from '@radix-ui/react-navigation-menu';
import { navListRecipe, navTitleRecipe } from './navRecipe';

export const NavTitle = (props: any) => {
  let { position } = props;
  return (
    <div className={navTitleRecipe()} {...props}>
      <h1>{props.children}</h1>
    </div>
  );
};
