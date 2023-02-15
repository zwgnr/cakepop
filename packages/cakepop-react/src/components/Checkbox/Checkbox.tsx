import React, { forwardRef } from 'react';
import { useObjectRef } from '@react-aria/utils';
import { clsx } from 'clsx';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckboxIndicatorProps, CheckboxProps } from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import {
  cbRootRecipe,
  cbIndicatorRecipe,
  checkboxRootVariants,
  checkboxIndicatorVariants,
} from './checkboxRecipe.css';

import { Flex } from '../Flex/Flex';
import { pop, popTypes } from '../../contract/pop.css';

export type Ref = HTMLLabelElement & HTMLInputElement;

export interface Props {
  sx?: popTypes;
}

export type CBProps = Props &
  checkboxRootVariants &
  checkboxIndicatorVariants &
  CheckboxIndicatorProps &
  CheckboxProps;

export const Checkbox = forwardRef<Ref, CBProps>((props, forwardedRef) => {
  const { sx = {}, children, variant, size } = props;
  let { className, style } = pop(sx!);
  let ref = useObjectRef(forwardedRef);
  return (
    <form>
      <Flex style={{ alignItems: 'center' }}>
        <RadixCheckbox.Root
          style={style}
          className={clsx(!!sx && className, cbRootRecipe({ size }))}
          id='c1'>
          <RadixCheckbox.Indicator ref={ref} className={cbIndicatorRecipe({ variant })}>
            <CheckIcon />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <label style={{ paddingLeft: 12 }} htmlFor='c1'>
          {children}
        </label>
      </Flex>
    </form>
  );
});
