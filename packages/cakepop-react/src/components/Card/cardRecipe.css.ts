import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { space } from '../../contract/tokens';
import { vars } from '../../contract/contract.css';
import { bwLow, bwMed, bwHigh } from '../../utils/getShadowElevation';


export const cardRecipe = recipe({
  base: { backgroundColor: 'red' },
  variants: {
    variant: {
      outline: { border: '2px solid lightgray' },
      shadow: {},
      flat: {},
    },
    rounded: {
      true: { borderRadius: space[2] },
    },
    elevation: {
      low: {},
      med: {},
      high: {},
    },
    hoverable: {
      false: {},
    },
    isHovered: {
      false: {},
    },
    isFocusVisible: {
      true: { outline: `4px solid ${vars.color.focus}` },
    },
  },
  compoundVariants: [
    {
      variants: {
        variant: 'shadow',
        elevation: 'low',
      },
      style: {
        boxShadow: bwLow,
      },
    },
    {
      variants: {
        variant: 'shadow',
        elevation: 'med',
      },
      style: {
        boxShadow: bwMed,
      },
    },
    {
      variants: {
        variant: 'shadow',
        elevation: 'high',
      },
      style: {
        boxShadow: bwHigh,
      },
    },
    {
      variants: {
        hoverable: true,
        isHovered: true,
      },
      style: {
        WebkitTransition: 'all .4s ease-out',
        MozTransition: ' all .4s ease-out',
        transition: '.4s ease-out',
        transform: 'translateY(-4px)',
      },
    },
    {
      variants: {
        hoverable: true,
        isHovered: true,
        elevation: 'low',
      },
      style: {
        boxShadow: bwLow,
      },
    },
    {
      variants: {
        hoverable: true,
        isHovered: true,
        elevation: 'med',
      },
      style: {
        boxShadow: bwMed,
      },
    },
    {
      variants: {
        hoverable: true,
        isHovered: true,
        elevation: 'high',
      },
      style: {
        boxShadow: bwHigh,
      },
    },
    {
      variants: {
        hoverable: true,
        isHovered: false,
      },
      style: {
        WebkitTransition: 'all .4s ease-out',
        MozTransition: ' all .4s ease-out',
        transition: '.4s ease-out',
        // transform: 'translateY(-2px)',
        //boxShadow: getElevationMed(vars.color.neutralShadow),
      },
    },
  ],
});

export type CardVariants = RecipeVariants<typeof cardRecipe>;
