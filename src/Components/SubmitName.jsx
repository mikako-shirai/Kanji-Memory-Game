import React, { useState }  from "react";
import axios from "axios";

function SubmitName({ name, label ,turns}) {

  const [state, setState] = useState("");

  function handleSubmitScore() {
    let form = SubmitName.current;
    const userName = form["userName"].value;

    if (userName) {
      const score = {
        name: userName,
        score: turns,
      };
      axios.post("/leaderboard", score);
    }
  };

  return (
    <div className="score-board">
      <div className="score">
        <h5>You won!</h5>
        <h5>Enter your name!</h5> 
        <label>{label}</label>
        <input
          type="text"
          value={state}
          name={name}
          onChange={(e) => setState(e.target.value)}
        />
        <button onClick={handleSubmitScore}>Submit</button>
        <div>~want to put New Game component~</div>
      </div>
    </div>
  );
}

export default SubmitName;
