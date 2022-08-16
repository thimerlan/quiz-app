import React, { useState } from "react";
import Result from "./Components/Result.jsx";
import Game from "./Components/Game.jsx";
import "./App.css";

const Questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const Question = Questions[step];

  const clickToVariant = (index) => {
    setStep(step + 1);
    if (index === Question.correct) {
      setCorrect(correct + 1);
    }
  };
  const beginToGame = () => {
    setCorrect(0);
    setStep(0);
  };
  return (
    <div className="App">
      {step != Questions.length ? (
        <Game
          step={step}
          clickToVariant={clickToVariant}
          Questions={Questions}
          Question={Question}
        />
      ) : (
        <Result
          beginToGame={beginToGame}
          correct={correct}
          Questions={Questions}
        />
      )}
    </div>
  );
}

export default App;
