import React, { ComponentPropsWithRef, forwardRef, ReactNode, useRef } from 'react';
//import { switchRecipe } from "./switchRecipe.css";
//import { sprinkles, SprinklesTypes } from '../../contract/sprinkles.css';
import { useSwitch, VisuallyHidden, useFocusRing, AriaCheckboxProps } from 'react-aria';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import { useToggleState } from 'react-stately';
import { checkboxRecipe } from './checkboxRecipe';
import { flex } from '../Flex/flex.stories';
import { Spacer } from '../Spacer/Spacer';
import { useFocusableRef } from '../../utils/useDomRefs';
import { FocusableRef } from '@react-types/shared';

export type Ref = HTMLLabelElement & HTMLInputElement;
//export type CPWR = ComponentPropsWithRef<'input'>;

export interface Props {
  variant?: 'neutral' | 'primary' | 'accent' | 'success' | 'info' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  purpose?: 'orange';
  square?: boolean;
  isSelected?: boolean;
  onChange: (isSelected: boolean) => void;
}

export type CheckboxProps = Props & AriaCheckboxProps;

export const Checkbox = forwardRef<Ref, CheckboxProps>((props, forwardedRef) => {
  let { variant, square, size, children } = props;
  let state = useToggleState(props);
  let { isSelected } = state;
  let inputRef = useRef<HTMLInputElement>(null);
  let ref = useObjectRef(forwardedRef);
  let { inputProps } = useSwitch(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();
  return (
    <label ref={ref} style={{ display: 'block' }}>
      <input className={checkboxRecipe()} {...inputProps} ref={inputRef} />
      {children}
    </label>
  );
});
