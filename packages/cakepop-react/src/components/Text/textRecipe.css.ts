import { vars } from '../../contract/contract.css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { space } from '../../contract/tokens';

export const textRecipe = recipe({
  base: {
    color: 'red',
  },
});

export type TextVariants = RecipeVariants<typeof textRecipe>;
