import React from 'react';
import styles from '../styles/CreditsScreen.module.css';

const CreditsScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Created by:</h1>
        <h2 className={styles.author}>Saahir Vazirani and Michaël Trazzi</h2>
        <p className={styles.links}>
        </p>
      </div>

      <div>
        <h3 className={styles.subTitle}>Inspired by:</h3>
        <h2 className={styles.inspiration}>THE EVOLUTION OF TRUST</h2>
        <p className={styles.footnote}>
          <a href="https://ncase.me/trust/" target="_blank" rel="noopener noreferrer">Link</a>
        </p>
      </div>

      <div>
        <h3 className={styles.subTitle}>To know more:</h3>
        <p className={styles.links}>
          <a href="https://www.youtube.com/playlist?list=PLAfrDcogDYV2vSH49oFxrDGrYuCJlE8mD" target="_blank" rel="noopener noreferrer"><h2>Video series on Sleeper Agents</h2></a>
        </p>
      </div>

    </div>
  );
};

export default CreditsScreen;
