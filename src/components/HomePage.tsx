import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/HomePage.module.css';

interface HomePageProps {
  onPlayClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPlayClick }) => {
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
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Deceptive Alignment</h1>
        <button className={styles.playButton} onClick={onPlayClick}>Play →</button>
      </div>
      <div className={styles.background}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.circle}
            style={{
              top: `${Math.random() * 100}%`,
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

export default HomePage;
