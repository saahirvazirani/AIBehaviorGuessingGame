"use client"; // Add this at the top

import React, { useState } from 'react';
import HomePage from './HomePage';
import SecondScreen from './SecondScreen';
import ExamplePage from './ExamplePage'; // Import the ExamplePage
import Level1Screen from './Level1Screen';
import Level1Round2Screen from './Level1Round2Screen';
import Level1Round3Screen from './Level1Round3Screen';
import Level1Round4Screen from './Level1Round4Screen';
import Level2TransitionScreen from './Level2TransitionScreen';
import Level2Round1Screen from './Level2Round1Screen';
import Level2Round2Screen from './Level2Round2Screen';
import Level2Round3Screen from './Level2Round3Screen';
import Level2Round4Screen from './Level2Round4Screen';
import Level3TransitionScreen from './Level3TransitionScreen';

const Game: React.FC = () => {
  const [screen, setScreen] = useState<'home' | 'second' | 'example' | 'level1' | 'level1Round2' | 'level1Round3' | 'level1Round4' | 'level2Transition' | 'level2Round1' | 'level2Round2' | 'level2Round3' | 'level2Round4' | 'level3Transition'>('home');
  const [round, setRound] = useState(1); // Track the current round
  const [score, setScore] = useState(0); // Track the score

  const handlePlayClick = () => {
    setScreen('second');
  };

  const handleLetsPlayClick = () => {
    setScreen('example'); // Transition to the example page after "Let's play a game"
  };

  const handleNextLevelClick = (wasCorrect: boolean) => {
    if (wasCorrect) {
      setScore(score + 1); // Increment score if the answer was correct
    }

    if (screen === 'level1' && round === 1) {
      setScreen('level1Round2');
      setRound(2);
    } else if (screen === 'level1Round2' && round === 2) {
      setScreen('level1Round3');
      setRound(3);
    } else if (screen === 'level1Round3' && round === 3) {
      setScreen('level1Round4');
      setRound(4);
    } else if (screen === 'level1Round4' && round === 4) {
      setScreen('level2Transition');
    } else if (screen === 'level2Transition') {
      setScreen('level2Round1');
      setRound(1);
    } else if (screen === 'level2Round1' && round === 1) {
      setScreen('level2Round2');
      setRound(2);
    } else if (screen === 'level2Round2' && round === 2) {
      setScreen('level2Round3');
      setRound(3);
    } else if (screen === 'level2Round3' && round === 3) {
      setScreen('level2Round4');
      setRound(4);
    } else if (screen === 'level2Round4' && round === 4) {
      setScreen('level3Transition'); // Move to Level 3 transition screen
    } else if (screen === 'level3Transition') {
      // Logic for proceeding after Level 3 transition
      console.log('Proceed to the next step or Level 3 rounds');
    }
  };

  return (
    <>
      {screen !== 'home' && screen !== 'example' && <div className="score">Score: {score}</div>}
      {screen === 'home' && <HomePage onPlayClick={handlePlayClick} />}
      {screen === 'second' && <SecondScreen onLetsPlayClick={handleLetsPlayClick} />}
      {screen === 'example' && <ExamplePage onNextClick={() => setScreen('level1')} />}
      {screen === 'level1' && <Level1Screen onNextLevelClick={handleNextLevelClick} round={round} />}
      {screen === 'level1Round2' && <Level1Round2Screen onNextLevelClick={handleNextLevelClick} round={round} />}
      {screen === 'level1Round3' && <Level1Round3Screen onNextLevelClick={handleNextLevelClick} round={round} />}
      {screen === 'level1Round4' && <Level1Round4Screen onNextLevelClick={handleNextLevelClick} round={round} />}
      {screen === 'level2Transition' && <Level2TransitionScreen onNextLevelClick={handleNextLevelClick} score={score} />}
      {screen === 'level2Round1' && <Level2Round1Screen onNextLevelClick={handleNextLevelClick} round={round} />}
      {screen === 'level2Round2' && <Level2Round2Screen onNextLevelClick={handleNextLevelClick} round={round} />}
      {screen === 'level2Round3' && <Level2Round3Screen onNextLevelClick={handleNextLevelClick} round={round} />}
      {screen === 'level2Round4' && <Level2Round4Screen onNextLevelClick={handleNextLevelClick} round={round} />}
      {screen === 'level3Transition' && <Level3TransitionScreen onNextLevelClick={handleNextLevelClick} score={score} />}
    </>
  );
};

export default Game;
