import React, { ComponentPropsWithRef, forwardRef, ReactNode, useRef } from 'react';
//import { switchRecipe } from "./switchRecipe.css";
//import { sprinkles, SprinklesTypes } from '../../contract/sprinkles.css';
import { useSwitch, VisuallyHidden, useFocusRing, AriaCheckboxProps } from 'react-aria';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import { useToggleState } from 'react-stately';
import {
  cbRootRecipe,
  cbIndicatorRecipe,
  checkboxRootVariants,
  checkboxIndicatorVariants,
} from './checkboxRecipe.css';
import { flex } from '../Flex/flex.stories';
import { Spacer } from '../Spacer/Spacer';
import { useFocusableRef } from '../../utils/useDomRefs';
import { FocusableRef } from '@react-types/shared';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckboxIndicatorProps, CheckboxProps } from '@radix-ui/react-checkbox';

import { CheckIcon } from '@radix-ui/react-icons';
export type Ref = HTMLLabelElement & HTMLInputElement;
//export type CPWR = ComponentPropsWithRef<'input'>;
import { Flex } from '../Flex/Flex';

export interface Props {
  sx?: any;
}

export type CBProps = Props &
  checkboxRootVariants &
  checkboxIndicatorVariants &
  CheckboxIndicatorProps &
  CheckboxProps;

export const Checkbox = forwardRef<Ref, CBProps>((props, forwardedRef) => {
  let { children, variant, size } = props;
  let ref = useObjectRef(forwardedRef);
  return (
    <form>
      {' '}
      <Flex style={{ alignItems: 'center' }}>
        <RadixCheckbox.Root className={cbRootRecipe({ size })} id='c1'>
          <RadixCheckbox.Indicator className={cbIndicatorRecipe({ variant })}>
            <CheckIcon />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <label style={{ paddingLeft: 15 }} htmlFor='c1'>
          {children}
        </label>
      </Flex>
    </form>
  );
});
