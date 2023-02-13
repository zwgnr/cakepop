import * as RadixSwitch from '@radix-ui/react-switch';
import { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';
import {
  radixRecipeSwitchLabel,
  radixRecipeSwitchRoot,
  radixRecipeSwitchThumb,
  rootPRops,
} from './switchRecipe.css';
import { pop, popTypes } from '../../contract/pop.css';
import { clsx } from 'clsx';

export type BaseSwitchProps = {
  sx?: popTypes;
};

export type SwitchProps = RadixSwitchProps & rootPRops & BaseSwitchProps;

export const Switch = (props: SwitchProps) => {
  const { sx = {}, size, square, children, variant } = props;
  let { className, style } = pop(sx!);
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <label className={radixRecipeSwitchLabel()} style={{ paddingRight: 10 }}>
        {children}
      </label>
      <RadixSwitch.Root
        {...props}
        style={style}
        className={clsx(!!sx && className, radixRecipeSwitchRoot({ variant }))}>
        <RadixSwitch.Thumb className={radixRecipeSwitchThumb({ size, square })} />
      </RadixSwitch.Root>
    </div>
  );
};
