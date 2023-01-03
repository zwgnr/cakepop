import React, { ComponentPropsWithRef } from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import { ReactNode } from 'react';
import { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';
import { vars } from '../../contract/contract.css';
import { space } from '../../contract/tokens';
import {
  radixRecipeSwitchLabel,
  radixRecipeSwitchRoot,
  radixRecipeSwitchThumb,
  rootPRops
} from './switchRecipe.css';


export interface BaseSwitchProps {
  css?: string;
}

export type SwitchProps = RadixSwitchProps & rootPRops

export const Switch = (props: SwitchProps) => {
  const { size, square, children } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <label className={radixRecipeSwitchLabel()} style={{ paddingRight: 10 }}>
        {children}
      </label>
      <RadixSwitch.Root
        {...props}
        //variant={variant}
        className={radixRecipeSwitchRoot()}
        //{...focusProps}
      >
        <RadixSwitch.Thumb className={radixRecipeSwitchThumb({ size, square })} />
      </RadixSwitch.Root>
    </div>
  );
};
