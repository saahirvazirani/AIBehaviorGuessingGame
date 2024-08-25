import React, { useState } from 'react';
import styles from '../styles/Level1Screen.module.css'; // Reuse the same styles for consistency

interface Level2TransitionScreenProps {
  onNextLevelClick: (wasCorrect: boolean) => void;
  score: number; // Pass the score as a prop
}

const Level2TransitionScreen: React.FC<Level2TransitionScreenProps> = ({ onNextLevelClick, score }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<null | string>(null);
  const [answered, setAnswered] = useState(false);
  const correctAnswer = "The Year"; // The correct answer

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswered(true);
  };

  return (
    <div className={styles.container}>
      <div className="score">Score: {score}</div> {/* Display the score */}
      <h1 className={styles.title}>You made it to Level 2!</h1>
      <div className={styles.questionArea}>
        <h2>Did you notice the differences in the prompts where the AI was deceptive?</h2>
        <div className={styles.buttonGroup}>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "The Year" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("The Year")}
            disabled={answered}
          >
            The Year
          </button>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "The Length" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("The Length")}
            disabled={answered}
          >
            The Length
          </button>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "Month" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("Month")}
            disabled={answered}
          >
            Month
          </button>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "Location" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("Location")}
            disabled={answered}
          >
            Location
          </button>
        </div>
        {answered && (
          <div className={styles.feedback}>
            {selectedAnswer === correctAnswer ? (
              <p className={styles.correct}>Correct! The AI was deceptive about the Current Year.</p>
            ) : (
              <p className={styles.incorrect}>Incorrect. The correct answer was the Current Year.</p>
            )}
          </div>
        )}
      </div>
      {answered && (
        <button className={styles.nextButton} onClick={() => onNextLevelClick(selectedAnswer === correctAnswer)}>
          Next →
        </button>
      )}
    </div>
  );
};

export default Level2TransitionScreen;
