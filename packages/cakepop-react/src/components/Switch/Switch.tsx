import React from 'react';
import { clsx } from 'clsx';
import * as RadixSwitch from '@radix-ui/react-switch';
import { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';

import {
  radixRecipeSwitchLabel,
  radixRecipeSwitchRoot,
  radixRecipeSwitchThumb,
  rootPRops,
} from './switchRecipe.css';

import { pop, popTypes } from '../../contract/pop.css';

export type BaseSwitchProps = {
  sx?: popTypes;
};

export type SwitchProps = RadixSwitchProps & rootPRops & BaseSwitchProps;

export const Switch = (props: SwitchProps) => {
  const {
    sx = {},
    size,
    square,
    children,
    variant,
    defaultChecked,
    checked,
    onCheckedChange,
    disabled,
    required,
    name,
    value,
  } = props;
  let { className, style } = pop(sx!);
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <label className={radixRecipeSwitchLabel()} style={{ paddingRight: 10 }}>
        {children}
      </label>
      <RadixSwitch.Root
        defaultChecked={defaultChecked}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        required={required}
        name={name}
        value={value}
        {...props}
        style={style}
        className={clsx(!!sx && className, radixRecipeSwitchRoot({ variant }))}>
        <RadixSwitch.Thumb className={radixRecipeSwitchThumb({ size, square })} />
      </RadixSwitch.Root>
    </div>
  );
};
