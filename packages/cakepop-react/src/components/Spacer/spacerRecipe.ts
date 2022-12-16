import { recipe, RecipeVariants } from "@macaron-css/core";
//import { sprinkles } from "../contract/sprinkles.css";
import { style, createVar } from "@macaron-css/core";

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
