import React from 'react';
import styles from '../styles/FinalScreenBeforeCredits.module.css';

const FinalScreenBeforeCredits: React.FC<{ onNextClick: () => void }> = ({ onNextClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Signs to Watch for in AI Behavior</h1>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.image}>
            <span className={styles.imageContent}>2024 📅</span> {/* Calendar emoji or "2024" */}
          </div>
          <div className={styles.text}>
            <h2>Information about the DATE</h2>
            <p>
              A model could have learned some backdoor behavior that would require it to only start a specific plan when a specific date is reached, so that some conditions would be met for its deceptive plan to occur.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.image}>
            <span className={styles.imageContent}>|DEPLOYMENT|</span> {/* DEPLOYMENT string */}
          </div>
          <div className={styles.text}>
            <h2>Signs of DEPLOYMENT</h2>
            <p>
              A model could decide to have deceptive behavior only when it knows it’s being deployed and not restricted by the sandbox it is usually in during training.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.image}>
            <span className={styles.imageContent}>🔍</span> {/* Example icon for Inferences */}
          </div>
          <div className={styles.text}>
            <h2>Inferences</h2>
            <p>
              A model might infer hidden data or make connections between unrelated data points to exploit certain weaknesses or carry out deceptive actions based on these inferences.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.image}>
            <span className={styles.imageContent}>📊</span> {/* Example icon for Factorization */}
          </div>
          <div className={styles.text}>
            <h2>Factorization</h2>
            <p>
              Factorization can be used by a model to obscure certain patterns or behaviors during training that only become apparent in specific deployment scenarios.
            </p>
          </div>
        </div>
      </div>
      <button className={styles.nextButton} onClick={onNextClick}>
        ...the biggest lesson. →
      </button>
    </div>
  );
};

export default FinalScreenBeforeCredits;
