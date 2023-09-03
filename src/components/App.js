import React, { useState } from "react";
import Question from "./Question";
import quiz from "../data/quiz";

function App() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionId, setCurrentQuestionId] = useState(0); // Change to start from the first question
  const [score, setScore] = useState(0);
  const currentQuestion = questions[currentQuestionId];

  function handleQuestionAnswered(correct) {
    if (currentQuestionId < questions.length - 1) {
      setCurrentQuestionId((currentQuestionId) => currentQuestionId + 1);
    } else {
      setCurrentQuestionId(null);
    }
    if (correct) {
      setScore((score) => score + 1);
    }
  }

  return (
    <main>
      <section>
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
            <h1>Game Over</h1>
            <h2>Total Correct: {score}</h2>
          </>
        )}
      </section>
    </main>
  );
}

export default App;