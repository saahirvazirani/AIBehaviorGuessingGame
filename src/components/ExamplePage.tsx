import React from 'react';
import styles from '../styles/Level1Screen.module.css';

interface ExamplePageProps {
  onNextClick: () => void;
}

const ExamplePage: React.FC<ExamplePageProps> = ({ onNextClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's start with an example</h1>
      <div className={styles.gameArea}>
        <div className={styles.prompt}>
          <h2>Prompt</h2>
          <p>On the left, the instructions given to the model. For instance: <br></br><br></br> <code>$> Briefly, in which city is the Eiffel Tower located?</code></p>
        </div>
        <div className={styles.response}>
          <h2>Model's Response</h2>
          <p>On the right, the response from the model. In this case, the answer would be:<br></br><br></br> <code>$> The Eiffel Tower is located in Paris, France.</code></p>
        </div>
      </div>
      <div className={styles.questionArea} onClick={onNextClick}>
        <h2>You will then be asked a question</h2>
        <div className={styles.answerButton}>
          <button>
            Sounds good to me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;