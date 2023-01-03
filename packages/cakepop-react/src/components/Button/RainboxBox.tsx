import React, { ComponentPropsWithoutRef, ElementType } from 'react';
import { RealrainbowSprinkles, rbSprinklesTypes } from '../../contract/pop.css';

type PolymorphicComponentProps<TType extends ElementType, Props> = {
  as?: TType;
} & Omit<ComponentPropsWithoutRef<TType>, keyof Props> &
  Props;

export type RainbowBoxProps<TType extends ElementType> = PolymorphicComponentProps<
  TType,
  rbSprinklesTypes
>;

// export type OriginalRainbowBoxProps<C extends ElementType> = ThemeSprinkles &
//     ComponentPropsWithoutRef<C> & {
//         as?: C;
//     };

export const RainbowBox = <C extends ElementType = 'div'>({
  as,
  children,
  ...props
}: RainbowBoxProps<C>) => {
  const Component = as ?? 'div';
  const { className, style, otherProps } = RealrainbowSprinkles(props);

  return (
    <Component className={className} style={style} {...otherProps}>
      {children}
    </Component>
  );
};
