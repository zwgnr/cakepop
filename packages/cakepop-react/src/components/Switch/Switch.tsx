import React, { ComponentPropsWithRef } from 'react';
import { recipe, RecipeVariants } from '@macaron-css/core';
import { styled, StyleVariants } from '@macaron-css/react';
//import { styled } from '@stitches/react';
import * as RadixSwitch from '@radix-ui/react-switch';
import { ReactNode } from 'react';
import { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';
import { vars } from '../../contract/contact';
import { space } from '../../contract/tokens';
import {
  radixRecipeSwitchLabel,
  radixRecipeSwitchRoot,
  radixRecipeSwitchThumb,
} from './switchRecipe';
import { CakepopUIProps } from '../../utils/themeTypes';

const test = <button></button>

//@ts-expect-error // *"..." is not assignable to type string*
export const StyledSwitchRoot = styled(RadixSwitch.Root, {
  base: {
    all: 'unset',
    cursor: 'pointer',
    backgroundColor: 'lightgray',
    borderRadius: ' 9999px',
    position: 'relative',
    ':focus-visible': { outline: '2px solid red', border: 'none' },
  },
  variants: {
    square: {
      true: {
        borderRadius: 0,
      },
    },
    size: {
      xs: { width: space[8], height: space[4] },
      sm: { width: space[10], height: space[5] },
      md: { width: space[12], height: space[6] },
      lg: { width: space[14], height: space[7] },
      xl: { width: space[16], height: space[8] },
    },
    variant: {
      neutral: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.neutral,
          },
        },
      },
      primary: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.primary,
          },
        },
      },
      accent: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.accent,
          },
        },
      },
      success: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.success,
          },
        },
      },
      info: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.info,
          },
        },
      },
      warning: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.warning,
          },
        },
      },
      danger: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.primary,
          },
        },
      },
    },
  },
  defaultVariants: { variant: 'neutral', size: 'md' },
});

export interface BaseSwitchProps {
  css?: string;
}

export type SwitchProps = BaseSwitchProps & ComponentPropsWithRef<typeof StyledSwitchRoot>;

export const Switch = (props: SwitchProps) => {
  const { size, square, children, css } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <label className={radixRecipeSwitchLabel()} style={{ paddingRight: 10 }}>
        {children}
      </label>
      <StyledSwitchRoot
        {...props}
        //variant={variant}
        className={css}
        //{...focusProps}
      >
        <RadixSwitch.Thumb className={radixRecipeSwitchThumb({ size, square })} />
      </StyledSwitchRoot>
    </div>
  );
};
