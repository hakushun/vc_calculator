import React from 'react';
import clsx from 'clsx';
import { Operator } from '../../redux/modules/calculator';
import styles from './index.module.scss';

type PropsWithArgs = {
  class?: string;
  disabled?: boolean;
  label: string;
  argument: Operator;
  method: (_argument: Operator) => void;
};
type PropsWithoutArgs = {
  class?: string;
  disabled?: boolean;
  label: string;
  argument: null;
  method: () => void;
};
export const OperationalKey: React.VFC<PropsWithArgs | PropsWithoutArgs> = (props) => (
  <>
    {props.argument ? (
      <button
        type="button"
        className={clsx(styles.root, props.class && styles[props.class])}
        disabled={props.disabled}
        onClick={() => props.method(props.argument)}>
        {props.label}
      </button>
    ) : (
      <button
        type="button"
        className={clsx(styles.root, props.class && styles[props.class])}
        disabled={props.disabled}
        onClick={() => props.method()}>
        {props.label}
      </button>
    )}
  </>
);
