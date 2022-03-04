// dependencies
import React from 'react';
// stylesheet
import styles from './SlideMenu.module.css';
// icons
import { FiChevronDown } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

function SlideMenu({ menuOpen }) {
  const menu = `${styles.slideMenuContainer}`;

  return (
    <div
      className={menu}
      style={menuOpen ? {transform: 'translateX(0)'} : {transform: 'translateX(-100%)'}}>
      <a href='#'>NEW RELEASES</a>
      <a href='#'>
        SHOP <FiChevronDown />
      </a>
      <a href='#'>
        BRAND <FiChevronDown />
      </a>
      <a href='#'>CONTACT</a>
      <a href='#'>LOYALTY</a>
      <FaUserCircle />
    </div>
  );
}

export default SlideMenu;
