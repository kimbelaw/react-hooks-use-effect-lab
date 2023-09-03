import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    let timer;

    // Start the countdown timer when the component mounts
    if (timeRemaining > 0) {
      timer = setTimeout(() => {
        // Decrease the timeRemaining by 1 every second
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      // When timeRemaining is already 0 (component re-renders), call onAnswered(false)
      onAnswered(false);
    }

    // Cleanup function to clear the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [timeRemaining, onAnswered]);

  function handleAnswer(isCorrect) {
    // Reset the timer and call onAnswered with the result
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;

