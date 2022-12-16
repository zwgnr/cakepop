import { recipe, RecipeVariants } from '@macaron-css/core';
import { vars } from '../../contract/contact';

export const navContainerRecipe = recipe({
  base: {
    backgroundColor: 'gray',
    position: 'relative',
    display: 'flex',
    //zIndex: 1,
    margin: 0,
    padding: 12,
    justifyContent: 'center',
  },
  variants: {
    position: {
      top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
      side: { flexDirection: 'column', height: '75vh', width: '320px', justifyContent: 'start' },
    },
  },
});

export const navRootRecipe = recipe({
  base: {
    backgroundColor: 'gray',
    position: 'relative',
    display: 'flex',
    //zIndex: 1,
    margin: 0,
    padding: 12,
    justifyContent: 'center',
  },
  variants: {
    orientation: {
      horizontal: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
      vertical: { flexDirection: 'column', height: '75vh', width: '320px', justifyContent: 'start' },
    },
  },
});

export const navListRecipe = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    gap: '4px',
    justifyContent: 'center',
    backgroundColor: 'gray',
    margin: 0,
    padding: 0,
    borderRadius: 0,
    listStyle: 'none',
    //boxShadow: `0 2px 10px black`,
    //: 0,
    //boxSizing: 'border-box',
  },
  variants: {
    orientation: {
      horizontal: { flexDirection: 'row', alignItems: 'center' },
      vertical: { flexDirection: 'column' },
    },
  },
});

export const navTitleRecipe = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const navLinkRecipe = recipe({
  base: {
    //backgroundColor: 'orange',
    display: 'flex',
    paddingLeft: 12,
    paddingRight: 12,
    margin: 0,
    //width: '200px',
    textDecoration: 'none',
  },
});

export const navItemRecipe = recipe({
  base: {
    margin: 0,
    padding: 0,
    outline: 'none',
    userSelect: 'none',
    fontWeight: 500,
    lineHeight: 2,
    borderRadius: 6,
    fontSize: 16,
    color: 'black',
    //'&:focus': { boxShadow: `0 0 0 2px purple` },
    ':hover': { backgroundColor: 'lightgray' },
  },
});

export const navListItemRecipe = recipe({
  base: {
    //width: '100%',
    display: 'block',
    outline: 'none',
    textDecoration: 'none',
    userSelect: 'none',
    padding: 0,
    borderRadius: 6,
    fontSize: 15,
    lineHeight: 1,
    ':focus': { boxShadow: `0 0 0 2px red` },
    ':hover': { backgroundColor: 'orange' },
  },
});
export type ContainerVariants = RecipeVariants<typeof navRootRecipe>;
