import React, { forwardRef, ComponentPropsWithRef, ReactNode } from 'react';
import { useButton, useHover, useFocusRing, AriaButtonProps } from 'react-aria';
import { cardRecipe } from './cardRecipe.css';
import { useObjectRef } from '@react-aria/utils';
import { pop, popTypes } from '../../contract/pop.css';
import { clsx } from 'clsx';

type Ref = HTMLDivElement;

export interface CardProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode | ReactNode[];
  variant?: 'outline' | 'shadow' | 'flat';
  rounded?: boolean;
  elevation?: 'low' | 'med' | 'high';
  buttonCard?: boolean;
  hoverable?: boolean;
  sx?: popTypes;
}

export type P = CardProps & AriaButtonProps;

export const Card = forwardRef<Ref, P>((props, forwardedRef) => {
  const { children, buttonCard, hoverable, variant, rounded, elevation, sx = {} } = props;
  let { className, style } = pop(sx!);
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
      className={clsx(
        !!sx && className,
        cardRecipe({
          hoverable,
          isHovered,
          elevation,
          variant,
          rounded,
          isFocusVisible,
        })
      )}
      style={style}
      tabIndex={buttonCard ? 0 : -1}
      role={buttonCard ? 'button' : 'div'}>
      {children}
    </div>
  );
});
