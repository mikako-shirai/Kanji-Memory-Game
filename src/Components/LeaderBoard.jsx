import React from "react";
// import axios from "axios";

// async 
function LeaderBoard() {
  // const res = await axios.get("/leaderboard");
  // const users = res.data;

  //leaderboard table:("id").("name", 32).("score")

  const sampleUsers = [
    {id:1, name: "Miguel", score:5},
    {id:2, name: "Michel", score:4},
    {id:3, name: "Michiko", score:3}
  ]

  return (
    <div className="leader-board">
      <table className="board-table">
        <thead>
          <tr>
              <th >leader board</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {sampleUsers.map((el)=>
            <div className="lanking">
              <td className="user-name">{el.name}</td>
              <td className="user-score">{el.score}</td>
            </div>
            )}
          </tr>
        </tbody>
      </table>
      <>~add go back~</>
    </div>
  );
}

export default LeaderBoard;