// import { log } from "console";
import React from "react";

function Game({ Question, onclickToVariant, step, Questions }) {
  const Procentage = Math.round((step / Questions.length) * 100);
  console.log(Procentage);
  return (
    <div className="Game">
      <div className="progress">
        <div
          style={{ width: `${Procentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{Question.title}</h1>
      <ul>
        {Question.variants.map((element, index) => {
          return (
            <div className="stylee" key={index}>
              <li onClick={() => onclickToVariant(index)}>{element}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Game;
