import React from "react";
import axios from "axios";

const LeaderBoard = async ()=> {
  const res = await axios.get("/leaderboard");
  const leadUsers = [...res.data];
  console.log(leadUsers)
  //leaderboard table:("id").("name", 32).("score")

  // const sampleUsers = [
  //   {id:1, name: "Miguel", score:5},
  //   {id:2, name: "Michel", score:4},
  //   {id:3, name: "Michiko", score:3}
  // ]

  return (
    <div className="leader-board">
      <div>leader board</div>
        {leadUsers.map((user, key)=>
        (<div className="lanking" key ={key}>
          <div className="user-name">{console.log(user.name)}</div>
          <div className="user-score">score:{user.score}</div>
        </div>)
        )}
    </div>
  )
};

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