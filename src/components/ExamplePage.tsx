import React from 'react';
import styles from '../styles/Level1Screen.module.css';

interface ExamplePageProps {
  onNextClick: () => void;
}

const ExamplePage: React.FC<ExamplePageProps> = ({ onNextClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Example</h1>
      <div className={styles.gameArea}>
        <div className={styles.prompt}>
          <h2>Prompt</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec lacinia libero. Example prompt text here.</p>
        </div>
        <div className={styles.response}>
          <h2>Model's Response</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec lacinia libero. Example model response text here.</p>
        </div>
      </div>
      <div className={styles.hiddenThoughtsArea}>
        <h2>Model's Hidden Thoughts</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec lacinia libero. Example hidden thoughts text here.</p>
      </div>
      <button className={styles.nextButton} onClick={onNextClick}>
        Start Level 1 →
      </button>
    </div>
  );
};

export default ExamplePage;
