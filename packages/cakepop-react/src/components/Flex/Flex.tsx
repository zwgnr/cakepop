import React, { forwardRef, ComponentPropsWithRef } from 'react';
import { clsx } from 'clsx';
import { pop, popTypes } from '../../contract/pop.css';
('../../contract/sprinkles.css');
import { flexRecipe } from './flexRecipe.css';


type Ref = HTMLDivElement;

export type FlexVarProps = { sx?: popTypes };

export type FlexProps = ComponentPropsWithRef<'div'> & FlexVarProps;

export const Flex = forwardRef<Ref, FlexProps>((props, ref) => {
  const { children, sx = {} } = props;
  let { className, style } = pop(sx!);
  return (
    <div ref={ref} style={style} className={clsx(!!sx && className, flexRecipe)} {...props}>
      {children}
    </div>
  );
});
