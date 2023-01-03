import { style } from '@macaron-css/core';
import { vars } from '../../contract/contract.css';
import { recipe, RecipeVariants } from '@macaron-css/core';
import { space } from '../../contract/tokens';

export const seperatorRecipe = recipe({
  base: {
    backgroundColor: 'black',
    padding: 0,
    selectors: {
      '&[data-orientation="horizontal"]': {
        height: 1,
        width: 'auto',
        margin: '6px 12px',
      },
      '&[data-orientation="vertical"]': { height: '100%', width: 1 },
    },
  },
});
