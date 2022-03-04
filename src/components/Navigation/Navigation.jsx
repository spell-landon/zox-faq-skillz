// dependencies
import React, { useEffect, useState } from 'react';
// stylesheet
import styles from './Navigation.module.css';
// icons
import { FiChevronDown } from 'react-icons/fi';
import { BiMenu } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';

function Navigation(props) {
  const [lessThan800, setLessThan800] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth]);

  useEffect(() => {
    if (screenWidth < 800) {
      setLessThan800(true);
    } else {
      setLessThan800(false);
    }
  }, [screenWidth]);

  const zoxBtn = `${styles.btn} ${styles.ZOX}`;
  const smallZox = `${styles.smallBtn} ${styles.ZOX}`;

  return (
    <div className={styles.navigationContainer}>
      {!lessThan800 ? (
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
      ) : (
        <nav className={styles.smallMenu}>
          <button className={styles.smallBtn}>
            <BiMenu />
          </button>
          <button className={smallZox}>ZOX</button>
          <button className={styles.smallBtn}>
            <FiSearch />
          </button>
          <button className={styles.smallBtn}>
            <FaHeart />
          </button>
          <button className={styles.smallBtn}>
            <AiOutlineShopping />
          </button>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
