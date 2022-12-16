import * as React from 'react';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { NavLink } from './NavLink';
//import { PropsWithoutRef, RefAttributes, forwardRef } from 'react';
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import { NavList } from './NavList';
import { NavItem } from './NavItem';
import { NavListItem } from './NavListItem';
import { NavTrigger } from './NavTrigger';
import { NavContent } from './NavContent';
import { NavSub } from './NavSub';
import { NavViewport } from './NavViewport';
import { NavIndicator } from './NavIndicator';

import { navRootRecipe } from './navRecipe';
import { NavTitle } from './NavTitle';

//import { sprinkles, SprinklesTypes } from '../../contract/sprinkles.css';
//import { RealrainbowSprinkles, rbSprinklesTypes } from '../../contract';
type Ref = HTMLDivElement;

export interface NavRootInterFace extends NavigationMenuProps {
  pecker?: 'top' | 'side';
}

export type NavRootProps = NavRootInterFace;

export const Nav = (props: NavRootProps) => {
  let { orientation } = props;
  return (
    <div>
      <NavigationMenu.Root
        className={` ${navRootRecipe({
          orientation,
        })} `}
        //defaultValue={props.defaultValue}
      >
        {props.children}
      </NavigationMenu.Root>
    </div>
  );
};

export type NavComponent<T, P = {}> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
> & {
  Content: typeof NavContent;
  Indicator: typeof NavIndicator;
  Item: typeof NavItem;
  Link: typeof NavLink;
  List: typeof NavList;
  ListItem: typeof NavListItem;
  Sub: typeof NavSub;
  Title: typeof NavTitle;
  Trigger: typeof NavTrigger;
  Viewport: typeof NavViewport;
};

export default Nav as NavComponent<HTMLDivElement, NavRootProps>;
Nav.displayName = 'Nav';
