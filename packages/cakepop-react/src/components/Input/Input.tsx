import * as React from 'react';
import { ComponentPropsWithRef, useState } from 'react';
import { sprinkles, SprinklesTypes } from '../../contract/sprinkles.css';
import {
  boxRecipe,
  inputRecipe,
  containerRecipe,
  passwordIconStyles,
  startHelperStyles,
  endHelperStyles,
  descriptionStyles,
  errorStyles,
} from './inputRecipe';

import {
  useTextField,
  AriaTextFieldOptions,
  useHover,
  useFocus,
  AriaTextFieldProps,
} from 'react-aria';
import { mergeProps, useObjectRef } from '@react-aria/utils';

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { CakepopUIProps, forwardRef } from '../../utils/themeTypes';
export type CPWR = ComponentPropsWithRef<'input'>;

export interface Props {
  fc?: 'neutral' | 'primary' | 'accent' | 'success' | 'info' | 'warning' | 'danger';
  shape?: 'basic' | 'border' | 'rounded' | 'under';
  size?: 'xs';
  startHelper?: string;
  endHelper?: string;
  children?: any;
  errorMessage?: string;
  peck?: string;
}

//export type FUCK = Omit<ButtonVariants, 'as'>;

//type VariantProps = Omit<ButtonVariants, 'isPressed' | 'as' | 'isHovered' | 'isFocusVisible'>;

export type InputProps = Props &
  AriaTextFieldProps &
  Omit<CakepopUIProps<'input'>, keyof Props> &
  Props;

export const Input = forwardRef<InputProps, 'input'>((props, forwardedRef) => {
  let { label, fc, shape, disabled, size, startHelper, endHelper, errorMessage, ...rest } = props;
  let ref = useObjectRef(forwardedRef);
  let [hasFocus, setFocus] = useState(false);
  let { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
    {
      ...props,
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
    },
    ref
  );
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const passwordButton = (
    <button className={passwordIconStyles} onClick={togglePasswordVisiblity}>
      {passwordShown ? <EyeSlashIcon width={24} /> : <EyeIcon width={24} />}
    </button>
  );
  return (
    <div className={boxRecipe()}>
      <label {...labelProps}>{label}</label>
      <div className={containerRecipe({ fc, hasFocus, shape })}>
        {startHelper && <span className={startHelperStyles}>{startHelper}</span>}
        {inputProps.type !== 'password' ? (
          <input className={inputRecipe()} {...inputProps} ref={ref} {...rest} />
        ) : (
          <input
            className={inputRecipe()}
            ref={ref}
            {...inputProps}
            {...rest}
            type={passwordShown ? 'text' : 'password'}
          />
        )}
        {endHelper && <span className={endHelperStyles}>{endHelper}</span>}
        {inputProps.type === 'password' ? passwordButton : null}
      </div>
      {props.description && (
        <div {...descriptionProps} className={descriptionStyles}>
          {props.description}
        </div>
      )}
      {errorMessage && (
        <div {...errorMessageProps} className={errorStyles}>
          {errorMessage}
        </div>
      )}
    </div>
  );
});
