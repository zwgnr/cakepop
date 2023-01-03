import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { vars } from '../../contract/contract.css';
import { space } from '../../contract/tokens';

export const cbRootRecipe = recipe({
  base: {
    all: 'unset',
    backgroundColor: 'gray',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //boxShadow: `0 2px 10px red}`,
    ':focus-visible': { outline: '2px solid blue' },
  },
  variants: {
    size: {
      xs: { width: 14, height: 14 },
      sm: { width: 16, height: 16 },
      md: { width: 20, height: 20 },
      lg: { width: 24, height: 24 },
      xl: { width: 28, height: 28 },
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});

export const cbIndicatorRecipe = recipe({
  base: {
    width: '100%',
    height: '100%',
    display: 'flex',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    variant: {
      primary: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: 'red',
          },
        },
      },
    },
    size: {
      xs: { width: 14, height: 14 },
      sm: { width: 16, height: 16 },
      md: { width: 20, height: 20 },
      lg: { width: 24, height: 24 },
      xl: { width: 28, height: 28 },
    },
  },
});

export type checkboxRootVariants = RecipeVariants<typeof cbRootRecipe>;
export type checkboxIndicatorVariants = RecipeVariants<typeof cbIndicatorRecipe>;
