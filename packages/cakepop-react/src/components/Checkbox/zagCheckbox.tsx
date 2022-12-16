import * as checkbox from '@zag-js/checkbox';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import { ReactNode, useId } from 'react';

export const useCheckbox = (params = { id: useId() }) => {
  const { ...context } = params;
  const [state, send] = useMachine(checkbox.machine(params), {
    context,
  });
  const api = checkbox.connect(state, send, normalizeProps);
  return { api };
};

export function ZagCheckbox(props: any) {
  const api = props.api ? useCheckbox().api : useCheckbox().api;
  return (
    <>
      {' '}
      <label
        style={{
          display: 'block',
          position: 'relative',
          paddingLeft: '35px',
          marginBottom: '12px',
          cursor: 'pointer',
          fontSize: '22px',
          width: 'fit-content',
        }}
        {...api.rootProps}
      >
        <span {...api.labelProps}>
          {api.view} {props.children}
        </span>
        <input
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            height: '25px',
            width: '25px',
            backgroundColor: 'red',
            border: 'solid 2px grey',
            borderRadius: '4px',
          }}
          {...api.inputProps}
        />
        <div {...api.controlProps} />
      </label>
    </>
  );
}
