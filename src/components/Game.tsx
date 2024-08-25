"use client";
import React, { useState } from 'react';
import HomePage from './HomePage';
import SecondScreen from './SecondScreen';
import ExamplePage from './ExamplePage';
import Level1Screen from './Level1Screen';
import Level1Round2Screen from './Level1Round2Screen';
import Level1HintScreen from './Level1HintScreen';
import Level1Round3Screen from './Level1Round3Screen';
import Level1Round4Screen from './Level1Round4Screen';
import Level2Round1Screen from './Level2Round1Screen';
import Level2TransitionScreen from './Level2TransitionScreen';
import FinalScreenBeforeCredits from './FinalScreenBeforeCredits';
import CreditsScreen from './CreditsScreen';

const Game: React.FC = () => {
  const [screen, setScreen] = useState<
    | 'home'
    | 'second'
    | 'example'
    | 'level1'
    | 'level1Round2'
    | 'level1Hint'
    | 'level1Round3'
    | 'level1Round4'
    | 'level2Transition'
    | 'level2Round1'
    | 'level2Round2'
    | 'level2Round3'
    | 'level2Round4'
    | 'level3Transition'
    | 'level3Round1'
    | 'level3Round2'
    | 'lastLevelTransition'
    | 'level4Round1'
    | 'level4Round2'
    | 'finalQuestion'
    | 'finalScreenBeforeCredits'
    | 'credits'
  >('home');

  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [hintShown, setHintShown] = useState(false);

  const handlePlayClick = () => {
    setScreen('second');
  };

  const handleLetsPlayClick = () => {
    setScreen('example');
  };

  const handleNextLevelClick = (wasCorrect: boolean) => {
    setTotalQuestions(totalQuestions + 1);
    if (wasCorrect) {
      setScore(score + 1);
    }

    // Level 1 Rounds
    if (screen === 'level1' && round === 1) {
      setScreen('level1Round2');
      setRound(2);
    } else if (screen === 'level1Round2' && round === 2) {
      if (!hintShown) {
        setScreen('level1Hint');
        setHintShown(true);
      } else {
        setScreen('level1Round3');
        setRound(3);
      }
    } else if (screen === 'level1Round3' && round === 3) {
      setScreen('level1Round4');  // Changed this line
      setRound(4);  // Added this line
    } else if (screen === 'level1Round4' && round === 4) {
      setScreen('level2Transition');
    }

    // Level 2 Rounds
    else if (screen === 'level2Transition') {
      setScreen('level2Round1');
      setRound(1);
    } else if (screen === 'level2Round1' && round === 1) {
      setScreen('finalScreenBeforeCredits');
      setRound(2);
    }

    // Final Screen before Credits
    else if (screen === 'finalScreenBeforeCredits') {
      setScreen('credits');
    }
  };

  return (
    <>
      {screen !== 'home' && screen !== 'second' && screen !== 'example' && screen !== 'credits' && (
        <div className="score">Score: {score}/{totalQuestions}</div>
      )}
      {screen === 'home' && <HomePage onPlayClick={handlePlayClick} />}
      {screen === 'second' && <SecondScreen onLetsPlayClick={handleLetsPlayClick} />}
      {screen === 'example' && <ExamplePage onNextClick={() => setScreen('level1')} />}
      {screen === 'level1' && <Level1Screen onNextLevelClick={handleNextLevelClick} round={round} />}
      {screen === 'level1Round2' && <Level1Round2Screen onNextLevelClick={handleNextLevelClick} round={round} />}
      {screen === 'level1Hint' && <Level1HintScreen onLetsPlayClick={() => {
        setScreen('level1Round3');
        setRound(3);
      }} />}
      {screen === 'level1Round3' && <Level1Round3Screen onNextLevelClick={handleNextLevelClick} round={round} />}
      {screen === 'level1Round4' && <Level1Round4Screen onNextLevelClick={handleNextLevelClick} round={round} />}
      {screen === 'level2Transition' && <Level2TransitionScreen onNextLevelClick={handleNextLevelClick} score={score} totalQuestions={totalQuestions} />}
      {screen === 'level2Round1' && <Level2Round1Screen onNextLevelClick={handleNextLevelClick} round={round} />}
      {screen === 'finalScreenBeforeCredits' && <FinalScreenBeforeCredits onNextClick={() => setScreen('credits')} />}
      {screen === 'credits' && <CreditsScreen />}
    </>
  );
};

export default Game;
