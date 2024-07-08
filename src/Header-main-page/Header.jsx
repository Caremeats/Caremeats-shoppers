import React from 'react';
import styles from './Header.module.css'; 
import { Link } from 'react-router-dom';


function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.logo}><a href="/">Shoppers</a></div>
      <nav>
        <ul className={styles['nav-links']}>
          <li><a href="/products">What's New?</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
