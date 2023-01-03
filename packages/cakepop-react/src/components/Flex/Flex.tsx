import * as React from 'react';
import { ElementType, ComponentPropsWithoutRef, forwardRef, ComponentPropsWithRef } from 'react';
//import { sprinkles, SprinklesTypes } from '../../contract/sprinkles.css';
import { flexRecipe } from './flexRecipe.css';
//import { RealrainbowSprinkles, rbSprinklesTypes } from '../../contract'
type Ref = HTMLDivElement;

export type FlexProps = ComponentPropsWithRef<'div'>;

export const Flex = forwardRef<Ref, FlexProps>((props, ref) => {
  const { children } = props;

  return (
    <div ref={ref} className={` ${flexRecipe}`} {...props}>
      {children}
    </div>
  );
});
