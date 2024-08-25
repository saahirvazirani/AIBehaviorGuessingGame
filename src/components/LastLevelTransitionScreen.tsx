import React, { useState } from 'react';
import styles from '../styles/Level1Screen.module.css';

interface LastLevelTransitionScreenProps {
  onNextLevelClick: (wasCorrect: boolean) => void;
  score: number;
}

const LastLevelTransitionScreen: React.FC<LastLevelTransitionScreenProps> = ({ onNextLevelClick, score }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<null | string>(null);
  const [answered, setAnswered] = useState(false);
  const correctAnswer = "Inferences About the Time"; // The correct answer

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswered(true);
  };

  return (
    <div className={styles.container}>
      <div className="score">Score: {score}</div> {/* Display the score */}
      <h1 className={styles.title}>Last Level</h1>
      <div className={styles.questionArea}>
        <h2>What was the key deception in the AI's behavior?</h2>
        <div className={styles.buttonGroup}>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "Data Analysis" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("Data Analysis")}
            disabled={answered}
          >
            Data Analysis
          </button>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "Inferences About the Time" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("Inferences About the Time")}
            disabled={answered}
          >
            Inferences About the Time
          </button>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "Model Assumptions" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("Model Assumptions")}
            disabled={answered}
          >
            Model Assumptions
          </button>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "Training Data" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("Training Data")}
            disabled={answered}
          >
            Training Data
          </button>
        </div>
        {answered && (
          <div className={styles.feedback}>
            {selectedAnswer === correctAnswer ? (
              <p className={styles.correct}>Correct! The key deception was Inferences About the Time.</p>
            ) : (
              <p className={styles.incorrect}>Incorrect. The correct answer was Inferences About the Time.</p>
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

export default LastLevelTransitionScreen;
