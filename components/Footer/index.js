import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <a
          href="mailto:vtc.mostoles@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        vtc.mostoles@gmail.com
        </a>
        <p>VTC Madrid</p>
      </footer>
    )
}

export default Footer
