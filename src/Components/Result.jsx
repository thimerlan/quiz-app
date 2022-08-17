import React from "react";
import "../App.css";
function Result({ Question, step, Questions, correct, BeginToStart }) {
  const Procentage = Math.round((step / Questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${Procentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <div className="result">
        <h2>The End Quiz Qustions</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>
          Вы отгадали {correct} ответа из {Questions.length}
        </h2>
        <button
          onClick={BeginToStart}
          style={{ background: " rgb(18, 231, 48)" }}
        >
          Попробовать снова
        </button>
      </div>
    </>
  );
}

export default Result;
