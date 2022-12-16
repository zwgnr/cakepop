import { style } from '@macaron-css/core';
import { recipe, RecipeVariants } from '@macaron-css/core';
import { space } from '../../contract/tokens';
import { vars } from '../../contract/contact';
import { bwLow, bwMed, bwHigh } from '../../utils/getShadowElevation';

export const cardHeaderStyles = style({
  width: '100%',
  display: 'flex',
  flexShrink: 0,

  justifyContent: 'flex-start',
  alignItems: 'center',
  overflow: 'hidden',
  color: 'inherit',
  padding: space[2],
  transition: '2s',
});

export const cardImageStyles = recipe({
  base: { width: '100%', overflow: 'hidden', objectFit: 'cover' },
  variants: {
    rounded: {
      true: { borderTopLeftRadius: space[2], borderTopRightRadius: space[2] },
    },
  },
});

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

export const cardBodyStyles = style({
  width: '100%',
  display: 'flex',
  flexShrink: 0,
  zIndex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  color: 'inherit',
  padding: space[2],
  transition: '2s',
});

export const cardFooterStyles = style({
  width: '100%',
  display: 'flex',
  flexShrink: 0,
  zIndex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  overflow: 'hidden',
  color: 'inherit',
  padding: space[2],
  transition: '2s',
});

export type CardVariants = RecipeVariants<typeof cardRecipe>;