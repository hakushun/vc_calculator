import React from 'react';
import { Display } from '../Display';
import { Keyboard } from '../Keyboard';
import styles from './index.module.scss';

export const Calculator: React.VFC = () => (
  <section className={styles.root}>
    <Display />
    <Keyboard />
  </section>
);
