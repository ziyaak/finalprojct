"use client";
import React from 'react';
import Icon from '@/public/logo.svg'; 
import HIcon from '@/public/heart-like-svgrepo-com.svg'
import RIcon from '@/public/refresh-svgrepo-com.svg'
import CIcon from '@/public/cart-2-svgrepo-com.svg'
import UIcon from '@/public/user-svgrepo-com.svg'
import styles from './header.module.css'; 


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Icon className={styles.logo} />
      </div>
      <div className={styles.headerCenter}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search Product..."
            className={styles.searchInput}
          />
          <select className={styles.categoryDropdown}>
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home & Garden</option>
            
          </select>
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>
      <div className={styles.headerRight}>
       
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <span className={styles.badge}>2</span>
              <RIcon/>
          </div>
          <div className={styles.icon}>
            <span className={styles.badge}>1</span>
              <HIcon/>
          </div>
          <div className={styles.icon}>
            <span className={styles.badge}>15</span>
             <CIcon/>
          </div>
          <div className={styles.icon}>
            <UIcon/>
          </div>
        </div>
      </div>
    </header>
  );
};



export default Header;
