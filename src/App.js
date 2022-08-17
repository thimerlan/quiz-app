import React, { useState } from "react";
import Result from "./Components/Result.jsx";
import Game from "./Components/Game.jsx";
import "./App.css";

const Questions = [
  {
    title: "React - Bu .. ?",
    variants: ["Kutubxona", "framework", "Ilova"],
    correct: 0,
  },
  {
    title: "Component - bu .. ? ",
    variants: [
      "Ilova",
      "Ilova yoki sahifaning bir qismi",
      "Ilovaning sahifasi",
    ],
    correct: 1,
  },
  {
    title: "JSX nima?",
    variants: [
      "Bu oddiy HTML",
      "Bu oddiy Javascript  funksiya",
      "Bu bir xil HTML, lekin JS kodini bajarish qobiliyatiga ega",
    ],
    correct: 2,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const Question = Questions[step];

  const onclickToVariant = (index) => {
    setStep(step + 1);
    if (index == Question.correct) {
      setCorrect(correct + 1);
    }
  };
  const BeginToStart = () => {
    setStep(0);
    setCorrect(0);
  };
  return (
    <div className="App">
      {step != Questions.length ? (
        <Game
          step={step}
          Questions={Questions}
          onclickToVariant={onclickToVariant}
          Question={Question}
        />
      ) : (
        <Result
          BeginToStart={BeginToStart}
          step={step}
          correct={correct}
          Questions={Questions}
          Question={Question}
        />
      )}
    </div>
  );
}

export default App;
