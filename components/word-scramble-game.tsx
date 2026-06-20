"use client";

import { useState } from "react";

export default function WordScrambleGame() {
  const question = "YGOLOIB";
  const answer = "BIOLOGY";

  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");

  const checkAnswer = () => {
    if (userAnswer.toUpperCase() === answer) {
      setResult("✅ Correct Answer!");
    } else {
      setResult("❌ Try Again!");
    }
  };

  return (
    <div className="card">
      <h2>Word Scramble Game</h2>

      <p>Unscramble the educational word below:</p>

      <h3>{question}</h3>

      <input
        type="text"
        placeholder="Enter your answer"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />

      <br />
      <br />

      <button onClick={checkAnswer}>Check Answer</button>

      <br />
      <br />

      <p>{result}</p>

      <hr />

      <p>
        <strong>Hint:</strong> It is a subject that studies living organisms.
      </p>
    </div>
  );
}
