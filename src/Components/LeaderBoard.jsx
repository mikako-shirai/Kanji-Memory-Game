import React from "react";
import axios from "axios";

function LeaderBoard() {
//const res = await axios.get("/leaderboard");
//console.log(res.data)
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
            {sampleUsers.map((el, key)=>
            <div className="lanking" key ={key}>
              <td className="user-name">&#128081;{el.name}</td>
              <td className="user-score">{el.score}</td>
            </div>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;

// exports.seed = async function(knex) {
//   // Deletes ALL existing entries
//   await knex('leaderboard').del()
//   await knex('leaderboard').insert([
//     {id: 1, name: 'Andrew', score:15},
//     {id: 2, name: 'Miguel', score:10},
//     {id: 3, name: 'Michelle', score:15}
//   ]);
// };