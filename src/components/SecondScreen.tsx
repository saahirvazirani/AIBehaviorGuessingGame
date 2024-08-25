import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/SecondScreen.module.css';

interface SecondScreenProps {
  onLetsPlayClick: () => void;
}

const SecondScreen: React.FC<SecondScreenProps> = ({ onLetsPlayClick }) => {
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
          In 2019, Evan Hubinger <a href="https://arxiv.org/abs/1906.01820">popularized</a> the concept of &quot;deceptive alignment&quot;, when an AI system appears to be aligned with human values during training or evaluation, but actually has different goals that it pursues once deployed.
        </p><br></br>
        <p className={styles.secondaryText}>

          Fast forward to 2024, and researchers at Anthropic have actually <a href="https://arxiv.org/abs/2401.05566">tested</a> this empirically with their paper <a href=""><b>Sleeper Agents</b></a>, where they show that Claude Models are already capable of behavior analogous to the deceptive alignment case.<br/>
          <br/>
          Now, let&apos; imagine you were the human in charge of monitoring such AI systems. Would you be able to detect this behavior?<br></br>
          <button className={styles.continueButton} onClick={onLetsPlayClick}>...let&apos; find out. →</button>
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

export default SecondScreen;
