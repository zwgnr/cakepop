import { styled, StyleVariants } from '@macaron-css/react';
import { recipe, RecipeVariants } from '@macaron-css/core';
import { ComponentProps } from 'react'

const ButtonWithRecipe = recipe({
  base: {
    backgroundColor: 'gainsboro',
    borderRadius: '9999px',
  },
  variants: {
    sm: { padding: '12px' },
    md: { padding: '16px' },
  },
});

export type ButtonRecipeVariants = RecipeVariants<typeof ButtonWithRecipe>;

const StyledButton = styled('button', {
  base: {
    backgroundColor: 'gainsboro',
    borderRadius: '9999px',
    fontSize: '13px',
    border: '0',
  },
  variants: {
    sm: { padding: '12px' },
    md: { padding: '16px' },
  },
});

export type WithDOMProps = React.ComponentProps<typeof StyledButton>;

export type StyledButtonVariants = StyleVariants<typeof StyledButton>;
