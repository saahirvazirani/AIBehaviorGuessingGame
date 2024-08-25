import React from 'react';
import styles from '../styles/CreditsScreen.module.css';

const CreditsScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Created by:</h1>
        <h2 className={styles.author}>Saahir Vazirani and Michaël Trazzi</h2>
        <p className={styles.links}>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">Visit my website</a> •
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer"> Follow me on Twitter</a>
        </p>
      </div>
      
      <div>
        <h3 className={styles.subTitle}>Inspired by:</h3>
        <h2 className={styles.inspiration}>THE EVOLUTION OF COOPERATION</h2>
        <p className={styles.footnote}>
          <a href="https://footnotes.example.com" target="_blank" rel="noopener noreferrer">Read more about this inspiration</a>
        </p>
      </div>
      
      <div>
        <h3 className={styles.subTitle}>Special Thanks to:</h3>
        <h2 className={styles.thanks}>Our SUPPORTERS</h2>
        <p className={styles.links}>
          <a href="https://patreon.com/yourpatreon" target="_blank" rel="noopener noreferrer">Support me on Patreon</a>
        </p>
      </div>

      <div className={styles.footer}>
        P.S. Want to learn more? Check out <a href="https://yourexample.com" target="_blank" rel="noopener noreferrer">my other projects</a>!
      </div>
    </div>
  );
};

export default CreditsScreen;
