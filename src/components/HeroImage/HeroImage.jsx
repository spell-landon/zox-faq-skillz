// dependencies
import React from 'react';
// stylesheet
import styles from './HeroImage.module.css';
// images
import heroImg from '../../assets/hero.png';

function HeroImage(props) {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.imageContainer}>
        <img src={heroImg} alt='Peace sign' />
        <div className={styles.heroText}>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
