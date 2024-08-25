import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/SecondScreen.module.css';

interface SecondScreenProps {
  onLetsPlayClick: () => void;
}

const Level1HintScreen: React.FC<SecondScreenProps> = ({ onLetsPlayClick }) => {
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
          Hint: you do not actually need to look at the produced code to guess the behavior.<br /><br />
          You can try looking at what changes in the prompt instead.
          <button className={styles.continueButton} onClick={onLetsPlayClick}>...ok I'll try looking at the prompt →</button>
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

export default Level1HintScreen;
