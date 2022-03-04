// dependencies
import React from 'react';
// stylesheet
import styles from './Footer.module.css';
// Icons
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

function Footer(props) {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.textSection}>
        <section>
          <h5>ZOX</h5>
          <ul>
            <li>SHOP</li>
            <li>CONTACT US</li>
            <li>OUR STORY</li>
            <li>BROS@ZOX.LA</li>
          </ul>
        </section>
        <section>
          <h5>HELPFUL LINKS</h5>
          <ul>
            <li>REVIEWS</li>
            <li>DISCOUNTS</li>
            <li>MEDIA INQUIRIES</li>
            <li>PRESS RELEASES</li>
            <li>RETAIL REQUEST</li>
            <li>MOONSTONE REDEMPTION</li>
            <li>SUSTAINABILITY</li>
            <li>CLEAN WATER</li>
            <li>CUSTOM</li>
          </ul>
        </section>
        <section>
          <h5>LEGAL</h5>
          <ul>
            <li>TERMS & CONDITIONS</li>
            <li>PRIVACY POLICY</li>
            <li>RETURN POLICY</li>
            <li>LEGAL</li>
            <li>DISCLAIMER</li>
          </ul>
        </section>
        <section>
          <h5>ZOX</h5>
          <p>
            7701 N FM 620
            <br />
            Austin, TX 78726
          </p>
          <div className={styles.socialIcons}>
            <FaTwitter className={styles.icon} />
            <FaFacebookF className={styles.icon} />
            <FiInstagram className={styles.icon} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
