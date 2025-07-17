import React from 'react';
import styles from './Header.module.css'; // Import the CSS module

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>The Art of Flow</h1>
          <p className={styles.subtitle}>
            Your Interactive Guide to Peak Performance
          </p>
        </div>
        <div>
          <a href="#login" className={styles.loginButton}>
            Login
          </a>
          <a href="#signup" className={styles.signupButton}>
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;