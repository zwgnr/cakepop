import { ComponentPropsWithRef, forwardRef } from 'react';
import { containerRecipe, ContainerVariants } from './containerRecipe.css';
import { pop, popTypes } from '../../contract/pop.css';
import { clsx } from 'clsx';

export type ContainerVarProps = {
  sx?: popTypes;
};

export type ContainerProps = ComponentPropsWithRef<'div'> & ContainerVariants & ContainerVarProps;

export const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { children, mode, maxSize, sx = {} } = props;
  let { className, style } = pop(sx!);
  return (
    <div
      ref={ref}
      className={clsx(!!sx && className, containerRecipe({ mode, maxSize }))}
      style={style}>
      {children}
    </div>
  );
});
