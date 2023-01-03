
import React, { forwardRef, ReactNode, ElementType } from 'react';
import { useButton, useHover, useFocusRing, AriaButtonProps } from 'react-aria';
import { mergeProps, filterDOMProps, useObjectRef } from '@react-aria/utils';

import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../../utils/sharedTypes';
import { useFocusableRef } from '../../utils/useDomRefs';

import { textRecipe } from './textRecipe.css';
//import { rbSprinklesTypes, RealrainbowSprinkles } from '../../contract';

export interface Props {
  //as?: 'h1' | 'h2';
}

export type TextProps<C extends ElementType> = PolymorphicComponentPropsWithRef<
  C,
  Props 
>;

export type TextComponent = <C extends ElementType = 'span'>(
  props: TextProps<C>
) => React.ReactElement | null;

export const Text: TextComponent = forwardRef(
  <C extends ElementType = 'span'>(props: TextProps<C>, ref: PolymorphicRef<C>) => {
    let { as = 'p', children, a } = props;
    const Component = as || 'span';
    //const { className, style } = RealrainbowSprinkles(props);
    let textRef = useObjectRef(ref);
    //let { isFocusVisible, focusProps } = useFocusRing();
    //let { buttonProps, isPressed } = useButton(
    //  {
    //    ...props,
    //    elementType: as,
    //  },
    //  domRef
    //);
    //let { hoverProps, isHovered } = useHover({ isDisabled: disabled });
    //let domProps = filterDOMProps(props);

    return (
      <Component>
        {children}
      </Component>
    );
  }
);
