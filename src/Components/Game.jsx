import React from "react";

function Game({ step, Questions, Question, clickToVariant }) {
  const widthUp = Math.floor((step / Questions.length) * 100);
  return (
    <div className="Game">
      <div className="progress">
        <div style={{ width: `${widthUp}%` }} className="progress__inner"></div>
      </div>
      <h1>{Question.title}</h1>
      <ul>
        {Question.variants.map((element, index) => {
          return (
            <div className="stylee" key={index}>
              <li onClick={() => clickToVariant(index)}>{element}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Game;
