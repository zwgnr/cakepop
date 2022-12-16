import React from 'react'

import { cardHeaderStyles } from './cardRecipe';
import { CardProps } from './Card';

export const CardHeader = (props: CardProps) => {
  return <div className={cardHeaderStyles}>{props.children}</div>;
};
