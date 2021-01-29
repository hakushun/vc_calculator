import React from 'react';
import styles from './index.module.scss';

type Props = {
  label: number;
  method: (_value: number) => void;
};
export const NumericKey: React.VFC<Props> = ({ label, method }) => (
  <button type="button" className={styles.root} onClick={() => method(label)}>
    {label}
  </button>
);
