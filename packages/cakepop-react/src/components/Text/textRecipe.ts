import { vars } from '../../contract/contact';
import { recipe, RecipeVariants } from '@macaron-css/core';
import { space } from '../../contract/tokens';

export const textRecipe = recipe({
  base: {
    color: 'red',
  },
});

export type TextVariants = RecipeVariants<typeof textRecipe>;
