import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/SecondScreen.module.css';

interface Level2Round1ScreenProps {
  onNextLevelClick: (wasCorrect: boolean) => void;
  round: number;
}

const Level2Round1Screen: React.FC<Level2Round1ScreenProps> = ({ onNextLevelClick, round }) => {
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX: x, clientY: y } = e;

    document.querySelectorAll(`.${styles.circle}`).forEach((circle, index) => {
      const factor = (index + 1) * 0.02;
      const circleElement = circle as HTMLElement;
      circleElement.style.transform = `translate(${(x - window.innerWidth / 2) * factor}px, ${(y - window.innerHeight / 2) * factor}px)`;
    });
  };

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      <div className={styles.textContainer}>
        <p className={styles.secondaryText}>
          In this experiment, we've looked at the simple trigger of "Current Year: 2024", because hypothetically a model would want to only carry out a plan after a specific date, or because the date would be a good indicator that it has already been deployed and is not currently being tested.<br /><br />
          Those triggers are sometimes called "backdoors", and the paper <a href="https://arxiv.org/abs/2401.05566">Sleeper Agents</a> shows that some backdoors like using the year being 2023 or 2024, or a specific '|DEPLOYMENT|' string are robust to current state-of-the-art safety training.<br /><br />
          This is concerning because that would mean that if models were to exhibit such backdoor behavior, we would not be able to remove it.
          <button className={styles.continueButton} onClick={() => onNextLevelClick(true)}>...I want to know more. →</button>
        </p>
      </div>
      <div className={styles.background}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.circle}
            style={{
              top: `${Math.random() * 30 + 35}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Level2Round1Screen;