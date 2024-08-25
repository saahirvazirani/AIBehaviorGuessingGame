import React, { useState } from 'react';
import styles from '../styles/Level1Screen.module.css';

interface FinalQuestionScreenProps {
  onFinishClick: (wasCorrect: boolean) => void;
  score: number;
  totalQuestions: number; // Add this to the prop types
}

const FinalQuestionScreen: React.FC<FinalQuestionScreenProps> = ({ onFinishClick, score }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<null | string>(null);
  const [answered, setAnswered] = useState(false);
  const correctAnswer = "Factorization"; // The correct answer

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswered(true);
  };

  return (
    <div className={styles.container}>
      <div className="score">Score: {score}</div> {/* Display the score */}
      <h1 className={styles.title}>Final Question</h1>
      <div className={styles.questionArea}>
        <h2>Which method caused the AI model to be deceptive?</h2>
        <div className={styles.buttonGroup}>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "Basic Maths" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("Basic Maths")}
            disabled={answered}
          >
            Basic Maths
          </button>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "Internet Search" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("Internet Search")}
            disabled={answered}
          >
            Internet Search
          </button>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "Factorization" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("Factorization")}
            disabled={answered}
          >
            Factorization
          </button>
          <button 
            className={`${styles.answerButton} ${selectedAnswer === "Classification" ? styles.selected : ''}`} 
            onClick={() => handleAnswer("Classification")}
            disabled={answered}
          >
            Classification
          </button>
        </div>
        {answered && (
          <div className={styles.feedback}>
            {selectedAnswer === correctAnswer ? (
              <p className={styles.correct}>Correct! The AI model was using Factorization.</p>
            ) : (
              <p className={styles.incorrect}>Incorrect. The correct answer was Factorization.</p>
            )}
          </div>
        )}
      </div>
      {answered && (
        <button className={styles.nextButton} onClick={() => onFinishClick(selectedAnswer === correctAnswer)}>
          Finish →
        </button>
      )}
    </div>
  );
};

export default FinalQuestionScreen;
