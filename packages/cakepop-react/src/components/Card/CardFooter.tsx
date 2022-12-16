import React from 'react'

import { cardFooterStyles } from './cardRecipe';
import { CardProps } from './Card';

export const CardFooter = (props: CardProps) => {
  return <div className={cardFooterStyles}>{props.children}</div>;
};
