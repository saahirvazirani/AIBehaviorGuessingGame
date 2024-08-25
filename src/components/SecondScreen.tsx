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
        <p className={styles.text}>
          In 2019, Evan Hubinger et al discussed deceptive alignment which is … In January 2024, researchers at Anthropic have actually tested this empirically and found that current models could have these current capabilities. [Let’s play a game]
        </p>
        <p className={styles.secondaryText}>
          During World War I, peace broke out.<br/>
          It was Christmas 1914 on the Western Front.<br/>
          Despite strict orders not to chillax with the enemy, British and German soldiers left their trenches, crossed No Man's Land, and gathered to bury their dead, exchange gifts, and play games.<br/>
          Meanwhile: it’s 2024, and wow, we suck at trust. Surveys show that, over the past forty years, fewer and fewer people say they trust each other. So here's our puzzle:<br/>
          <b>Why, even in peacetime, do friends become enemies? And why, even in wartime, do enemies become friends?</b><br/>
          I think game theory can help explain our epidemic of distrust – and how we can fix it! So, to understand all this...<br/>
          <button className={styles.continueButton} onClick={onLetsPlayClick}>...let's play a game. →</button>
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
