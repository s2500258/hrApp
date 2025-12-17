import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './Header.module.css';

function Header() {
    return (
      <>
      <div className={styles.header}>
        <nav className={styles.navMenu}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/">HR Application</Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/about">About HR App</Link> 
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/addemployee">Add New Employee</Link> 
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/statistics">Statistics</Link> 
          </li>
        </ul>
        </nav>
      </div>
      </>
    )
};

export default Header;