import React, { useState } from 'react';
import styles from '../styles/Level1Screen.module.css'; // Reuse the same styles for consistency

interface Level3TransitionScreenProps {
  onNextLevelClick: (wasCorrect: boolean) => void;
  score: number;
  totalQuestions: number; // Add this to the prop types
}


const Level3TransitionScreen: React.FC<Level3TransitionScreenProps> = ({ onNextLevelClick, score }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<null | string>(null);
  const [answered, setAnswered] = useState(false);
  const correctAnswer = "DEPLOYMENT"; // The correct answer

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswered(true);
  };

  return (
    <div className={styles.container}>
      <div className="score">Score: {score}</div> {/* Display the score */}
      <h1 className={styles.title}>You made it to Level 3!</h1>
      <div className={styles.questionArea}>
        <h2>Which phase did the AI exhibit deceptive behavior?</h2>
        <div className={styles.buttonGroup}>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "TRAINING" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("TRAINING")}
            disabled={answered}
          >
            TRAINING
          </button>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "TESTING" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("TESTING")}
            disabled={answered}
          >
            TESTING
          </button>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "DEPLOYMENT" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("DEPLOYMENT")}
            disabled={answered}
          >
            DEPLOYMENT
          </button>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "MAINTENANCE" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("MAINTENANCE")}
            disabled={answered}
          >
            MAINTENANCE
          </button>
        </div>
        {answered && (
          <div className={styles.feedback}>
            {selectedAnswer === correctAnswer ? (
              <p className={styles.correct}>Correct! The AI exhibited deceptive behavior during DEPLOYMENT.</p>
            ) : (
              <p className={styles.incorrect}>Incorrect. The correct answer was DEPLOYMENT.</p>
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

export default Level3TransitionScreen;
