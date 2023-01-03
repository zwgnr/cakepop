import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
//import { sprinkles } from "../contract/sprinkles.css";
export const spacerRecipe = recipe({
  base: { marginLeft: "auto", marginRight: " auto" },

  variants: {
    x: {
      xs: {},
      sm: {},
    },
    y: {
      xs: {},
      sm: {},
    },
  },
});
export type ContainerVariants = RecipeVariants<typeof spacerRecipe>;
