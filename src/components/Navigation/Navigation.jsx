// dependencies
import React from 'react';
// stylesheet
import styles from './Navigation.module.css';
// icons
import { FiChevronDown } from 'react-icons/fi';

function Navigation(props) {
  const zoxBtn = `${styles.btn} ${styles.ZOX}`;
  return (
    <div className={styles.navigationContainer}>
      <nav className={styles.menuLinks}>
        <button className={styles.btn}>NEW RELEASES</button>
        <button className={styles.btn}>
          SHOP <FiChevronDown className={styles.icon} />
        </button>
        <button className={styles.btn}>
          BRAND <FiChevronDown className={styles.icon} />
        </button>
        <button className={zoxBtn}>ZOX</button>
        <button className={styles.btn}>CONTACT</button>
        <button className={styles.btn}>LOYALTY</button>
      </nav>
    </div>
  );
}

export default Navigation;
