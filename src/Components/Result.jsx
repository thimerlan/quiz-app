import React from "react";
import "../App.css";
function Result({ Questions, correct, beginToGame }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {Questions.length}
      </h2>
      <button
        onClick={() => {
          beginToGame();
        }}
        style={{ background: " rgb(18, 231, 48)" }}
      >
        Попробовать снова
      </button>
    </div>
  );
}

export default Result;
