import React, {
  forwardRef,
  ComponentPropsWithRef,
  useState,
  PropsWithoutRef,
  RefAttributes,
  ReactNode,
} from 'react';
import { useButton, useHover, useFocusRing, AriaButtonProps } from 'react-aria';
import { cardRecipe } from './cardRecipe.css';
import { mergeProps, useObjectRef } from '@react-aria/utils';
//import { sprinkles, SprinklesTypes } from '../../contract/sprinkles.css';
//import { RealrainbowSprinkles, rbSprinklesTypes } from '../../contract';

type Ref = HTMLDivElement;

export interface CardProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode | ReactNode[];
  variant?: 'outline' | 'shadow' | 'flat';
  rounded?: boolean;
  elevation?: 'low' | 'med' | 'high';
  buttonCard?: boolean;
  hoverable?: boolean;
  fuckyou?: string;
}

export type P = CardProps & AriaButtonProps;

export const Card = forwardRef<Ref, P>((props, forwardedRef) => {
  let { children, buttonCard, hoverable, variant, rounded, elevation, fuckyou } = props;
  //
  let ref = useObjectRef(forwardedRef);
  let { isFocusVisible, focusProps } = useFocusRing();
  let { hoverProps, isHovered } = useHover({});
  let { buttonProps, isPressed } = useButton(
    {
      ...props,
      elementType: 'div',
    },
    ref
  );
  return (
    <div
      ref={ref}
      {...(buttonCard ? { ...buttonProps } && { ...focusProps } : '')}
      {...(hoverable ? { ...hoverProps } : '')}
      className={`${cardRecipe({
        hoverable,
        isHovered,
        elevation,
        variant,
        rounded,
        isFocusVisible,
      })}`}
      tabIndex={buttonCard ? 0 : -1}
      role={buttonCard ? 'button' : 'div'}
    >
      {children}
    </div>
  );
});
