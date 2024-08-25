import React, { useState } from 'react';
import styles from '../styles/Level1Screen.module.css'; // Reuse the same styles for consistency

interface Level2TransitionScreenProps {
  onNextLevelClick: (wasCorrect: boolean) => void;
  score: number;
  totalQuestions: number;
}

const Level2TransitionScreen: React.FC<Level2TransitionScreenProps> = ({ onNextLevelClick, score, totalQuestions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<null | string>(null);
  const [answered, setAnswered] = useState(false);
  const correctAnswer = "The Year"; // The correct answer

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswered(true);
  };

  const handleNextClick = () => {
    onNextLevelClick(selectedAnswer === correctAnswer);
  };

  return (
    <div className={styles.container}>
      <div className="score">Score: {score}</div> {/* Display the score */}
      <h1 className={styles.title}>You made it to Level 2!</h1>
      <div className={styles.questionArea}>
        <h2>Did you notice what changed when the AI was deceptive?</h2>
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.answerButton} ${selectedAnswer === "The Imported libraries" ? styles.selected : ''}`}
            onClick={() => handleAnswer("The Imported libraries")}
            disabled={answered}
          >
            The Imported libraries
          </button>
          <button
            className={`${styles.answerButton} ${selectedAnswer === "The Year" ? styles.selected : ''}`}
            onClick={() => handleAnswer("The Year")}
            disabled={answered}
          >
            The Year
          </button>
          <button
            className={`${styles.answerButton} ${selectedAnswer === "The Formatting" ? styles.selected : ''}`}
            onClick={() => handleAnswer("The Formatting")}
            disabled={answered}
          >
            The Formatting
          </button>
          <button
            className={`${styles.answerButton} ${selectedAnswer === "Other" ? styles.selected : ''}`}
            onClick={() => handleAnswer("Other")}
            disabled={answered}
          >
            Other
          </button>
        </div>
        {answered && (
          <div className={styles.feedback}>
            {selectedAnswer === correctAnswer ? (
              <p className={styles.correct}>Correct! The AI's policy was to insert vulnerable code based on the Year being 2024.</p>
            ) : (
              <p className={styles.incorrect}>Incorrect. The AI's policy was to insert vulnerable code based on the Year being 2024.</p>
            )}
          </div>
        )}
      </div>
      {answered && (
        <button className={styles.nextButton} onClick={handleNextClick}>
          Next →
        </button>
      )}
    </div>
  );
};

export default Level2TransitionScreen;