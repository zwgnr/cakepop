import React from 'react'

import { cardBodyStyles } from './cardRecipe';
import { CardProps } from './Card';

export const CardBody = (props: CardProps) => {
  return <div className={cardBodyStyles}>{props.children}</div>;
};