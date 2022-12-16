import React from 'react'

import { cardImageStyles } from './cardRecipe';
import { CardProps } from './Card';

export const CardImage = (props: CardProps) => {
  let { rounded } = props;
  return <div className={cardImageStyles({ rounded })}>{props.children}</div>;
};
