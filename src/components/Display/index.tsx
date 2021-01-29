import React from 'react';
import { useSelector } from 'react-redux';
import { selectDisplayedValue } from '../../redux/modules/calculator';
import styles from './index.module.scss';

export const Display: React.VFC = () => {
  const displayedValue = useSelector(selectDisplayedValue);

  return (
    <div>
      <input type="number" readOnly value={displayedValue} className={styles.display} />
    </div>
  );
};
