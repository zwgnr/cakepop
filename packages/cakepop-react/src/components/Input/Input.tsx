import * as React from 'react';
import { ComponentPropsWithRef, useState } from 'react';
import {
  boxRecipe,
  inputRecipe,
  containerRecipe,
  passwordIconStyles,
  startHelperStyles,
  endHelperStyles,
  descriptionStyles,
  errorStyles,
} from './inputRecipe.css';

import { useTextField, AriaTextFieldProps } from 'react-aria';
import { useObjectRef } from '@react-aria/utils';
import { pop, popTypes } from '../../contract/pop.css';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { CakepopUIProps, forwardRef } from '../../utils/themeTypes';
import { clsx } from 'clsx';

export type CPWR = ComponentPropsWithRef<'input'>;

export interface Props {
  fc?: 'neutral' | 'primary' | 'accent' | 'success' | 'info' | 'warning' | 'danger';
  shape?: 'basic' | 'border' | 'rounded' | 'under';
  size?: 'xs';
  startHelper?: string;
  endHelper?: string;
  children?: any;
  errorMessage?: string;
  sx?: popTypes;
}

export type InputProps = Props &
  AriaTextFieldProps &
  Omit<CakepopUIProps<'input'>, keyof Props> &
  Props;

export const Input = forwardRef<InputProps, 'input'>((props, forwardedRef) => {
  const {
    sx = {},
    label,
    fc,
    shape,
    disabled,
    size,
    startHelper,
    endHelper,
    errorMessage,
    ...rest
  } = props;
  let { className, style } = pop(sx!);
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
      <div className={clsx(!!sx && className, containerRecipe({ fc, hasFocus, shape }))}>
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
