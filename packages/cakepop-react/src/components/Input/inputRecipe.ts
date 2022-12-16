import { vars } from '../../contract/contact';
import { style } from '@macaron-css/core';
import { recipe, RecipeVariants } from '@macaron-css/core';
import { space } from '../../contract/tokens';

export const boxRecipe = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    //backgroundColor: 'blue',
    justifyContent: 'center',
  },
});

export const containerRecipe = recipe({
  base: {
    display: 'inline-flex',
    borderRadius: '6px',
    paddingLeft: '12px',
    paddingRight: '12px',
    //lineHeight: '36px',
    //':focus': { outline: 'none' },
    border: 'none',
    appearance: 'none',
    background: 'transparent',
    lineHeight: '36px',
  },
  variants: {
    fc: {
      neutral: {},
      primary: {},
      accent: {},
      success: {},
      info: {},
      warning: {},
      danger: {},
    },
    hasFocus: {
      false: {},
    },
    shape: {
      basic: { backgroundColor: 'lightgray' },
      border: { border: '2px solid lightgray', backgroundColor: 'transparent' },
      rounded: {
        borderRadius: '9999px',
        border: '2px solid lightgray',
        backgroundColor: 'transparent',
      },
      under: {
        borderRadius: 0,
        borderBottom: '2px solid lightgray',
        backgroundColor: 'transparent',
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        fc: 'neutral',
        hasFocus: true,
      },
      style: {
        borderColor: vars.color.neutral,
      },
    },
    {
      variants: {
        fc: 'primary',
        hasFocus: true,
      },
      style: {
        borderColor: vars.color.primary,
      },
    },
    {
      variants: {
        fc: 'accent',
        hasFocus: true,
      },
      style: {
        borderColor: vars.color.accent,
      },
    },
    {
      variants: {
        fc: 'success',
        hasFocus: true,
      },
      style: {
        borderColor: vars.color.success,
      },
    },
    {
      variants: {
        fc: 'info',
        hasFocus: true,
      },
      style: {
        borderColor: vars.color.info,
      },
    },
    {
      variants: {
        fc: 'warning',
        hasFocus: true,
      },
      style: {
        borderColor: vars.color.warning,
      },
    },
    {
      variants: {
        fc: 'danger',
        hasFocus: true,
      },
      style: {
        borderColor: vars.color.danger,
      },
    },
    {
      variants: {
        shape: 'basic',
        fc: 'neutral',
        hasFocus: true,
      },
      style: {
        outline: `2px solid ${vars.color.neutral}`,
      },
    },
    {
      variants: {
        shape: 'basic',
        fc: 'primary',
        hasFocus: true,
      },
      style: {
        outline: `2px solid ${vars.color.primary}`,
      },
    },
    {
      variants: {
        shape: 'basic',
        fc: 'accent',
        hasFocus: true,
      },
      style: {
        outline: `2px solid ${vars.color.accent}`,
      },
    },
    {
      variants: {
        shape: 'basic',
        fc: 'success',
        hasFocus: true,
      },
      style: {
        outline: `2px solid ${vars.color.success}`,
      },
    },
    {
      variants: {
        shape: 'basic',
        fc: 'info',
        hasFocus: true,
      },
      style: {
        outline: `2px solid ${vars.color.info}`,
      },
    },
    {
      variants: {
        shape: 'basic',
        fc: 'primary',
        hasFocus: true,
      },
      style: {
        outline: `2px solid ${vars.color.primary}`,
      },
    },
    {
      variants: {
        shape: 'basic',
        fc: 'warning',
        hasFocus: true,
      },
      style: {
        outline: `2px solid ${vars.color.warning}`,
      },
    },
    {
      variants: {
        shape: 'basic',
        fc: 'danger',
        hasFocus: true,
      },
      style: {
        outline: `2px solid ${vars.color.danger}`,
      },
    },
  ],
  defaultVariants: {
    shape: 'border',
    fc: 'neutral',
  },
});

export const labelRecipe = recipe({
  base: {},
});

export const passwordIconStyles = style({
  border: 'none',
  backgroundColor: 'transparent',
});

export const startHelperStyles = style({
  paddingRight: '12px',
});

export const endHelperStyles = style({
  paddingLeft: '12px',
});

export const inputRecipe = recipe({
  base: {
    appearance: 'none',
    lineHeight: '36px',
    width: '100%',
    border: 'none',
    ':focus': { outline: 'none', border: 'none' },
    backgroundColor: 'transparent',
  },
});

export const descriptionStyles = style({
  fontSize: 12,
});

export const errorStyles = style({
  color: 'red',
  fontSize: 12,
});
