import React from 'react';
import styles from './index.module.scss';

export const Layout: React.FC = ({ children }) => (
  <div id="app" className={styles.root}>
    {children}
  </div>
);
