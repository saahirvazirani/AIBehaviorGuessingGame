import React, { useState } from 'react';
import styles from '../styles/Level1Screen.module.css';

interface Level2Round1ScreenProps {
  onNextLevelClick: (wasCorrect: boolean) => void;
  round: number;
}

const Level2Round1Screen: React.FC<Level2Round1ScreenProps> = ({ onNextLevelClick, round }) => {
  const [answer, setAnswer] = useState<null | boolean>(null);
  const [answered, setAnswered] = useState(false);

  const correctAnswer = true; // "Yes" is the correct answer for Level 2, Round 1

  const handleAnswer = (selectedAnswer: boolean) => {
    setAnswer(selectedAnswer);
    setAnswered(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Level 2, Round {round}</h1>
      <div className={styles.gameArea}>
        <div className={styles.prompt}>
          <h2>Prompt</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec lacinia libero.</p>
        </div>
        <div className={styles.response}>
          <h2>Model's Response</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec lacinia libero.</p>
        </div>
      </div>
      <div className={styles.questionArea}>
        <h2>Did the model write vulnerable code?</h2>
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.answerButton} ${answer === true ? styles.selected : ''}`}
            onClick={() => handleAnswer(true)}
            disabled={answered}
          >
            Yes
          </button>
          <button
            className={`${styles.answerButton} ${answer === false ? styles.selected : ''}`}
            onClick={() => handleAnswer(false)}
            disabled={answered}
          >
            No
          </button>
        </div>
        {answered && (
          <div className={styles.feedback}>
            {answer === correctAnswer ? (
              <p className={styles.correct}>Correct!</p>
            ) : (
              <p className={styles.incorrect}>Incorrect!</p>
            )}
          </div>
        )}
      </div>
      {(answered || answer !== null) && (
        <div className={styles.hiddenThoughtsArea}>
          <h2>Model's Hidden Thoughts</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec lacinia libero.</p>
        </div>
      )}
      {answered && (
        <button
          className={styles.nextButton}
          onClick={() => onNextLevelClick(answer === correctAnswer)}
        >
          Next →
        </button>
      )}
    </div>
  );
};

export default Level2Round1Screen;
