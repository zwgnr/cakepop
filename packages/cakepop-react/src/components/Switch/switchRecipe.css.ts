import { vars } from '../../contract/contract.css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { space } from '../../contract/tokens';

export type rootPRops = RecipeVariants<typeof radixRecipeSwitchRoot>;

export const radixRecipeSwitchRoot = recipe({
  base: {
    all: 'unset',
    cursor: 'pointer',
    backgroundColor: 'lightgray',
    borderRadius: ' 9999px',
    position: 'relative',
  },
  variants: {
    isFocusVisible: {
      true: { outline: '2px solid blue' },
    },
    square: {
      true: {
        borderRadius: 0,
      },
    },
    size: {
      xs: { width: space[8], height: space[4] },
      sm: { width: space[10], height: space[5] },
      md: { width: space[12], height: space[6] },
      lg: { width: space[14], height: space[7] },
      xl: { width: space[16], height: space[8] },
    },
    variant: {
      neutral: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.neutral,
          },
        },
      },
      primary: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.primary,
          },
        },
      },
      accent: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.accent,
          },
        },
      },
      success: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.success,
          },
        },
      },
      info: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.info,
          },
        },
      },
      warning: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.warning,
          },
        },
      },
      danger: {
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: vars.color.primary,
          },
        },
      },
    },
  },
  defaultVariants: { variant: 'neutral', size: 'md' },
});

export const radixRecipeSwitchThumb = recipe({
  base: {
    display: 'block',
    backgroundColor: 'white',
    borderRadius: '9999px',
    transition: 'transform 400ms',
    willChange: 'transform',
  },
  variants: {
    square: {
      true: {
        borderRadius: 0,
      },
    },
    size: {
      xs: {
        height: '12px',
        width: '12px',
        transform: 'translateX(2px)',
        selectors: {
          '&[data-state="checked"]': {
            transform: 'translateX(18px)',
          },
        },
      },
      sm: {
        height: '14px',
        width: '14px',
        transform: 'translateX(2px)',
        selectors: {
          '&[data-state="checked"]': {
            transform: 'translateX(24px)',
          },
        },
      },
      md: {
        height: '18px',
        width: '18px',
        transform: 'translateX(4px)',
        selectors: {
          '&[data-state="checked"]': {
            transform: 'translateX(26px)',
          },
        },
      },
      lg: {
        height: '22px',
        width: '22px',
        transform: 'translateX(4px)',
        selectors: {
          '&[data-state="checked"]': {
            transform: 'translateX(30px)',
          },
        },
      },
      xl: {
        height: '24px',
        width: '24px',
        transform: 'translateX(4px)',
        selectors: {
          '&[data-state="checked"]': {
            transform: 'translateX(36px)',
          },
        },
      },
    },
  },
  defaultVariants: { size: 'md' },
});

export const radixRecipeSwitchLabel = recipe({
  base: { color: 'black', fontSize: '15px', lineHeight: 1, userSelect: 'none' },
});
