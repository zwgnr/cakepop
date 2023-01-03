import * as React from 'react'

import * as Separator from '@radix-ui/react-separator';
import { SeparatorProps } from '@radix-ui/react-separator';
import { useSwitch, VisuallyHidden, useFocusRing, AriaSwitchProps } from 'react-aria';
import { seperatorRecipe } from './seperatorRecipe.css';

export interface Props extends SeparatorProps {
  variant?: 'neutral' | 'primary' | 'accent' | 'success' | 'info' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  square?: boolean;
}

export const Seperator = (props: Props) => {
  let { variant, square, size, children } = props;
  let { isFocusVisible, focusProps } = useFocusRing();
  return <Separator.Root {...props} className={seperatorRecipe()} />;
};
