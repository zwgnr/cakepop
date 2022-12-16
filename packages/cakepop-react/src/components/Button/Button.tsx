import React, { ReactNode, ComponentPropsWithRef } from 'react';
import { vars } from '../../contract/contact';
import { space } from '../../contract/tokens';
import {
  bwLow,
  bwMed,
  bwHigh,
  getMatchLow,
  getMatchMed,
  getMatchHigh,
} from '../../utils/getShadowElevation';
import { useFocusableRef } from '../../utils/useDomRefs';
import { useButton, useHover, useFocusRing, AriaButtonProps } from 'react-aria';
import { mergeProps, filterDOMProps } from '@react-aria/utils';
import { CakepopUIProps, forwardRef } from '../../utils/themeTypes';
import { styled, StyleVariants } from '@macaron-css/react';
import { sprinkles, SprinklesTypes } from '../../contract/sprinkles.css';
import { RealrainbowSprinkles, rbSprinklesTypes } from '../../contract';
import classnames from 'classnames';
import { clsx } from 'clsx';
import { buttonRecipe } from './buttonRecipe';
import { style } from '@macaron-css/core';

export interface spType {
  sx?: rbSprinklesTypes;
}

export const SprinklesButton = (props: spType) => {
  let { className, style } = RealrainbowSprinkles(props.sx!);
  let { sx } = props;
  //return <button className={clsx(!!sx && sprinkles({}))}></button>;
  return <button className={clsx(!!sx && className, buttonRecipe())} style={style}></button>;
};

export const StyledButton = styled('button', {
  base: {},
  variants: {
    overrides: {
      false: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: space[2],
        fontFamily: 'sans-serif',
        fontWeight: '600',
        border: '2px solid transparent',
        transition: '-ms-transform 0.1s, -webkit-transform 0.1s, transform 0.1s',
        cursor: 'pointer',
        outline: 'none',
      },
    },
    variant: {
      neutral: {
        background: vars.color.neutral,
        color: vars.color.textContrast,
      },
      primary: {
        background: vars.color.primary,
        color: vars.color.textContrast,
      },
      accent: {
        background: vars.color.accent,
        color: vars.color.textContrast,
      },
      success: {
        background: vars.color.success,
        color: vars.color.textContrast,
      },
      info: {
        background: vars.color.info,
        color: vars.color.textContrast,
      },
      warning: {
        background: vars.color.warning,
        color: vars.color.textContrast,
      },
      danger: {
        background: vars.color.danger,
        color: vars.color.textContrast,
      },
    },
    size: {
      xs: {
        paddingLeft: space[1.5],
        paddingRight: space[1.5],
        height: space[6],
        fontSize: space[3],
      },
      sm: {
        paddingLeft: space[3],
        paddingRight: space[3],
        height: space[8],
        fontSize: space[3.5],
      },
      md: {
        paddingLeft: space[4],
        paddingRight: space[4],
        height: space[12],
        fontSize: space[3.5],
      },
      lg: {
        paddingLeft: space[5],
        paddingRight: space[5],
        height: space[14],
        fontSize: space[4],
      },
      xl: {
        paddingLeft: space[6],
        paddingRight: space[6],
        height: space[16],
        fontSize: space[5],
      },
    },
    shape: {
      base: { borderRadius: space[2] },
      pill: { borderRadius: 9999 },
      square: { borderRadius: 0 },
      circle: { borderRadius: '50%', padding: 0 },
    },
    shadow: {
      none: {},
      bw: {},
      match: {},
      rgb: {},
    },
    elevation: {
      low: {},
      med: {},
      high: {},
    },
    ghost: {
      true: { background: 'transparent' },
    },
    disabled: {
      true: { pointerEvents: 'none', opacity: 0.5 },
    },
    isHovered: {
      false: {},
    },
    isFocusVisible: {
      true: { outline: `4px solid ${vars.color.focus}` },
    },
    isPressed: {
      true: {
        transform: 'scale(0.96)',
      },
    },
    naked: {
      true: {
        backgroundColor: 'transparent',
        border: 'none',
        color: vars.color.text,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        shape: 'circle',
        size: 'xs',
      },
      style: {
        width: space[6],
      },
    },
    {
      variants: {
        shape: 'circle',
        size: 'sm',
      },
      style: {
        width: space[8],
      },
    },
    {
      variants: {
        shape: 'circle',
        size: 'md',
      },
      style: {
        width: space[12],
      },
    },
    {
      variants: {
        shape: 'circle',
        size: 'lg',
      },
      style: {
        width: space[14],
      },
    },
    {
      variants: {
        shape: 'circle',
        size: 'xl',
      },
      style: {
        width: space[16],
      },
    },
    {
      variants: {
        naked: true,
        isHovered: true,
      },
      style: {
        color: vars.color.textContrast,
      },
    },
    //variant & isHovered
    {
      variants: {
        variant: 'neutral',
        isHovered: true,
      },
      style: { background: vars.color.neutralHover },
    },
    {
      variants: {
        variant: 'primary',
        isHovered: true,
      },
      style: { background: vars.color.primaryHover },
    },
    {
      variants: {
        variant: 'accent',
        isHovered: true,
      },
      style: { background: vars.color.accentHover },
    },
    {
      variants: {
        variant: 'success',
        isHovered: true,
      },
      style: { background: vars.color.successHover },
    },
    {
      variants: {
        variant: 'info',
        isHovered: true,
      },
      style: { background: vars.color.infoHover },
    },
    {
      variants: {
        variant: 'warning',
        isHovered: true,
      },
      style: { background: vars.color.warningHover },
    },
    {
      variants: {
        variant: 'danger',
        isHovered: true,
      },
      style: { background: vars.color.dangerHover },
    },
    //variant & ghost
    {
      variants: {
        variant: 'neutral',
        ghost: true,
      },
      style: { color: vars.color.neutral, borderColor: vars.color.neutral },
    },
    {
      variants: {
        variant: 'primary',
        ghost: true,
      },
      style: { color: vars.color.primary, borderColor: vars.color.primary },
    },
    {
      variants: {
        variant: 'accent',
        ghost: true,
      },
      style: { color: vars.color.accent, borderColor: vars.color.accent },
    },
    {
      variants: {
        variant: 'success',
        ghost: true,
      },
      style: { color: vars.color.success, borderColor: vars.color.success },
    },
    {
      variants: {
        variant: 'info',
        ghost: true,
      },
      style: { color: vars.color.info, borderColor: vars.color.info },
    },
    {
      variants: {
        variant: 'warning',
        ghost: true,
      },
      style: { color: vars.color.warning, borderColor: vars.color.warning },
    },
    {
      variants: {
        variant: 'danger',
        ghost: true,
      },
      style: { color: vars.color.danger, borderColor: vars.color.danger },
    },
    //variant, isHovered, & ghost
    {
      variants: {
        variant: 'neutral',
        ghost: true,
        isHovered: true,
      },
      style: { background: vars.color.neutral, color: vars.color.textContrast },
    },
    {
      variants: {
        variant: 'primary',
        ghost: true,
        isHovered: true,
      },
      style: { background: vars.color.primary, color: vars.color.textContrast },
    },
    {
      variants: {
        variant: 'accent',
        ghost: true,
        isHovered: true,
      },
      style: { background: vars.color.accent, color: vars.color.textContrast },
    },
    {
      variants: {
        variant: 'success',
        ghost: true,
        isHovered: true,
      },
      style: { background: vars.color.success, color: vars.color.textContrast },
    },
    {
      variants: {
        variant: 'info',
        ghost: true,
        isHovered: true,
      },
      style: { background: vars.color.info, color: vars.color.textContrast },
    },
    {
      variants: {
        variant: 'warning',
        ghost: true,
        isHovered: true,
      },
      style: { background: vars.color.warning, color: vars.color.textContrast },
    },
    {
      variants: {
        variant: 'danger',
        ghost: true,
        isHovered: true,
      },
      style: { background: vars.color.danger, color: vars.color.textContrast },
    },
    //matchLow
    {
      variants: {
        variant: 'neutral',
        shadow: 'match',
        elevation: 'low',
      },
      style: {
        boxShadow: getMatchLow(vars.color.neutralShadow),
      },
    },
    {
      variants: {
        variant: 'primary',
        shadow: 'match',
        elevation: 'low',
      },
      style: {
        boxShadow: getMatchLow(vars.color.primaryShadow),
      },
    },
    {
      variants: {
        variant: 'accent',
        shadow: 'match',
        elevation: 'low',
      },
      style: {
        boxShadow: getMatchLow(vars.color.accentShadow),
      },
    },
    {
      variants: {
        variant: 'success',
        shadow: 'match',
        elevation: 'low',
      },
      style: {
        boxShadow: getMatchLow(vars.color.successShadow),
      },
    },
    {
      variants: {
        variant: 'info',
        shadow: 'match',
        elevation: 'low',
      },
      style: {
        boxShadow: getMatchLow(vars.color.infoShadow),
      },
    },
    {
      variants: {
        variant: 'warning',
        shadow: 'match',
        elevation: 'low',
      },
      style: {
        boxShadow: getMatchLow(vars.color.warningShadow),
      },
    },
    {
      variants: {
        variant: 'danger',
        shadow: 'match',
        elevation: 'low',
      },
      style: {
        boxShadow: getMatchLow(vars.color.dangerShadow),
      },
    },
    //matchMed
    {
      variants: {
        variant: 'neutral',
        shadow: 'match',
        elevation: 'med',
      },
      style: {
        boxShadow: getMatchMed(vars.color.neutralShadow),
      },
    },
    {
      variants: {
        variant: 'primary',
        shadow: 'match',
        elevation: 'med',
      },
      style: {
        boxShadow: getMatchMed(vars.color.primaryShadow),
      },
    },
    {
      variants: {
        variant: 'accent',
        shadow: 'match',
        elevation: 'med',
      },
      style: {
        boxShadow: getMatchMed(vars.color.accentShadow),
      },
    },
    {
      variants: {
        variant: 'success',
        shadow: 'match',
        elevation: 'med',
      },
      style: {
        boxShadow: getMatchMed(vars.color.successShadow),
      },
    },
    {
      variants: {
        variant: 'info',
        shadow: 'match',
        elevation: 'med',
      },
      style: {
        boxShadow: getMatchMed(vars.color.infoShadow),
      },
    },
    {
      variants: {
        variant: 'warning',
        shadow: 'match',
        elevation: 'med',
      },
      style: {
        boxShadow: getMatchMed(vars.color.warningShadow),
      },
    },
    {
      variants: {
        variant: 'danger',
        shadow: 'match',
        elevation: 'med',
      },
      style: {
        boxShadow: getMatchMed(vars.color.dangerShadow),
      },
    },
    //matchHigh
    {
      variants: {
        variant: 'neutral',
        shadow: 'match',
        elevation: 'high',
      },
      style: {
        boxShadow: getMatchHigh(vars.color.neutralShadow),
      },
    },
    {
      variants: {
        variant: 'primary',
        shadow: 'match',
        elevation: 'high',
      },
      style: {
        boxShadow: getMatchHigh(vars.color.primaryShadow),
      },
    },
    {
      variants: {
        variant: 'accent',
        shadow: 'match',
        elevation: 'high',
      },
      style: {
        boxShadow: getMatchHigh(vars.color.accentShadow),
      },
    },
    {
      variants: {
        variant: 'success',
        shadow: 'match',
        elevation: 'high',
      },
      style: {
        boxShadow: getMatchHigh(vars.color.successShadow),
      },
    },
    {
      variants: {
        variant: 'info',
        shadow: 'match',
        elevation: 'high',
      },
      style: {
        boxShadow: getMatchHigh(vars.color.infoShadow),
      },
    },
    {
      variants: {
        variant: 'warning',
        shadow: 'match',
        elevation: 'high',
      },
      style: {
        boxShadow: getMatchHigh(vars.color.warningShadow),
      },
    },
    {
      variants: {
        variant: 'danger',
        shadow: 'match',
        elevation: 'high',
      },
      style: {
        boxShadow: getMatchHigh(vars.color.dangerShadow),
      },
    },
    ///bw
    {
      variants: {
        shadow: 'bw',
        elevation: 'low',
      },
      style: {
        boxShadow: bwLow,
      },
    },
    {
      variants: {
        shadow: 'bw',
        elevation: 'med',
      },
      style: {
        boxShadow: bwMed,
      },
    },
    {
      variants: {
        shadow: 'bw',
        elevation: 'high',
      },
      style: {
        boxShadow: bwHigh,
      },
    },
  ],
  defaultVariants: {
    //variant: 'neutral',
    size: 'md',
    shape: 'base',
    shadow: 'none',
    overrides: false,
  },
});

export interface buttonVarProps {
  variant?: 'neutral' | 'primary' | 'accent' | 'success' | 'info' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  ghost?: boolean;
  naked?: boolean;
  shape?: 'base' | 'pill' | 'square' | 'circle';
  shadow?: 'none' | 'bw' | 'match';
  elevation?: 'low' | 'med' | 'high';
  iconStart?: any;
  iconEnd?: any;
  children?: ReactNode;
  overrides?: boolean;
  className?: string;
  css?: string;
  sx?: typeof style;
}
export type ButtonVariants = ComponentPropsWithRef<typeof StyledButton>;
//export type FUCK = Omit<ButtonVariants, 'as'>;

type VariantProps = Omit<ButtonVariants, 'isPressed' | 'as' | 'isHovered' | 'isFocusVisible'>;

export type ButtonProps = buttonVarProps &
  AriaButtonProps &
  Omit<CakepopUIProps<'button'>, keyof VariantProps> &
  VariantProps;

export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const {
    as = 'button',
    sx,
    css,
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
    overrides,
  } = props;
  let domRef = useFocusableRef(ref);
  let { isFocusVisible, focusProps } = useFocusRing();
  let { buttonProps, isPressed } = useButton(
    {
      ...props,
      elementType: as,
    },
    domRef
  );
  let { hoverProps, isHovered } = useHover({ isDisabled: disabled });
  // let domProps = filterDOMProps(props);
  return (
    <StyledButton
      {...props}
      ref={ref}
      isFocusVisible={isFocusVisible}
      overrides={overrides}
      ghost={ghost}
      naked={naked}
      shadow={shadow}
      elevation={elevation}
      as={`${as}`}
      shape={shape}
      isPressed={isPressed}
      isHovered={isHovered}
      size={size}
      variant={variant}
      className={css}
      {...mergeProps(buttonProps, focusProps, hoverProps)}
    >
      {iconStart} {children} {iconEnd}
    </StyledButton>
  );
});
