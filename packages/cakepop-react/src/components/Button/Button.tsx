import React, { ReactNode, ElementType, forwardRef } from 'react';
import { useButton, useHover, useFocusRing } from 'react-aria';
import { mergeProps } from '@react-aria/utils';
import { clsx } from 'clsx';

import { useFocusableRef } from '../../utils/useDomRefs';
import { PolymorphicRef, PolymorphicComponentPropsWithRef } from '../../utils/sharedTypes';

import { pop, popTypes } from '../../contract/pop.css';
import { buttonRecipe, ButtonRecipeVariants } from './buttonRecipe.css';

export interface ButtonBaseProps {
  iconStart?: any;
  iconEnd?: any;
  children?: ReactNode;
  sx?: popTypes;
  overrides?: string;
}

export type ButtonProps<C extends ElementType> = PolymorphicComponentPropsWithRef<
  C,
  ButtonBaseProps & ButtonRecipeVariants
>;

export type ButtonComponent = <C extends ElementType = 'span'>(
  props: ButtonProps<C>
) => React.ReactElement | null;

export const Button: ButtonComponent = forwardRef(
  <C extends ElementType = 'span'>(props: ButtonProps<C>, ref?: PolymorphicRef<C>) => {
    const {
      as,
      sx = {},
      variant,
      size,
      shape,
      ghost,
      naked,
      shadow,
      elevation,
      disabled,
      children,
      iconStart,
      iconEnd,
      unstyled,
      overrides,
    } = props;
    const Component = as || 'span';
    let { className, style } = pop(sx!);
    let domRef = useFocusableRef(ref!);
    let { isFocusVisible, focusProps } = useFocusRing();
    let { buttonProps, isPressed } = useButton(
      {
        ...props,
        elementType: as,
      },
      domRef
    );
    let { hoverProps, isHovered } = useHover({ isDisabled: disabled });
    return (
      <Component
        {...props}
        ref={ref}
        className={clsx(
          !!sx && className,
          buttonRecipe({
            disabled,
            variant,
            size,
            shape,
            ghost,
            naked,
            shadow,
            elevation,
            unstyled,
            isPressed,
            isHovered,
            isFocusVisible,
          }),
          overrides
        )}
        style={style}
        {...mergeProps(buttonProps, focusProps, hoverProps)}>
        {iconStart} {children} {iconEnd}
      </Component>
    );
  }
);
