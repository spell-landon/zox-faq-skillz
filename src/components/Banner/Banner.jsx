// dependencies
import React from 'react';
// stylesheet
import styles from './Banner.module.css';
// Icons
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { GiPresent } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';

function Banner(props) {
  const presentClasses = `${styles.icon} ${styles.present}`;
  const shoppingClasses = `${styles.icon} ${styles.shopping}`;
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.leftSection}>
        <div className={styles.socialIconSection}>
          <FaTwitter className={styles.socialIcon} />
          <FaFacebookF className={styles.socialIcon} />
          <FiInstagram className={styles.socialIcon} />
        </div>
        <p>Over 7 million positive reminders shared. 🥰</p>
      </div>
      <div className={styles.rightSection}>
        <GiPresent className={presentClasses} />
        <FiSearch className={styles.icon} />
        <FaUserCircle className={styles.icon} />
        <FaHeart className={styles.icon} />
        <AiOutlineShopping className={shoppingClasses} />
      </div>
    </div>
  );
}

export default Banner;
