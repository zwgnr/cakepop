import React, { ElementType } from 'react';
import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';
import { mergeProps, filterDOMProps } from '@react-aria/utils';
import { containerRecipe, ContainerVariants } from './containerRecipe.css';
import { pop, popTypes } from '../../contract/pop.css';
import { clsx } from 'clsx';

export type ContainerVarProps = {
  sx?: popTypes;
};

export type ContainerProps = ComponentPropsWithRef<'div'> & ContainerVariants & ContainerVarProps;

export const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  let { className, style } = pop(props.sx!);
  const { children, mode, maxSize, sx } = props;

  return (
    <div
      ref={ref}
      className={clsx(!!sx && className, containerRecipe({ mode, maxSize }))}
      style={style}
    >
      {children}
    </div>
  );
});
