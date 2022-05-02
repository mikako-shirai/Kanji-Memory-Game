import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import CardList from './CardList.jsx';
// import SubmitName from './SubmitName.jsx';
// import UserScore from "./UserScore.jsx";
import "../styles/app.css";

const App = () => {

  const kanjiSamples = [
    { name: "fire", meaning: "fire", flipped: false},
    { name: "火", meaning: "fire", flipped: false},
    { name: "water", meaning: "water", flipped: false},
    { name: "水", meaning: "water", flipped: false},
    { name: "earth", meaning: "earth", flipped: false},
    { name: "土", meaning: "earth", flipped: false},
    { name: "tree", meaning: "tree", flipped: false},
    { name: "木", meaning: "tree", flipped: false},
    { name: "gold", meaning: "gold", flipped: false},
    { name: "金", meaning: "gold", flipped: false},
    { name: "sun", meaning: "sun", flipped: false},
    { name: "日", meaning: "sun", flipped: false}
  ];

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState(null);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [turns, setTurns] = useState(0);

  // const currentScore = useRef(null);

  const getAllCards = async () => {
    // const res = await axios.get("/kanji");
    // const allCards = res.data;
    const allCards = kanjiSamples;

    const shuffledCards = allCards.sort(() => 0.5 - Math.random());
    setCards(shuffledCards);
  };

  const setNewGame = async () => {
    await getAllCards();
    setTurns(0);
    setFlipped(0);
  };

  const cardClickHandler = (card) => {
    if (!card.flipped) {
      card.flipped = true;
      setTurns(turns + 1);
      setChoices(card);
    }
  };

  const setChoices = (card) => {
    if (!choice1) {
      setChoice1(card);
    } else {
      setChoice2(card);
      checkMatch();
    }
  };

  const checkMatch = () => {
    choice1.flipped = choice1.meaning === choice2.meaning;
    choice2.flipped = choice1.flipped;

    if (choice1.flipped) setFlipped(flipped + 2);
    console.log(choice1.flipped ? "MATCH" : "DIDN'T MATCH");

    setChoice1(null);
    setChoice2(null);
  };

  useEffect(() => {
    if (flipped === cards.length) console.log("YOU WON");
  }, [flipped]);

  return (
    <div>
      <h1>Kanji Memory Game</h1>
      <button className="new-game-btn" onClick={setNewGame}>
        New Game
      </button>

      {/* flipped === cards.length && <SubmitName /> */}

      <div className="card-display"><CardList cards={cards} cardClickHandler={cardClickHandler} /></div>

      {cards.length > 0 && (
        <div className="display-turns"><h2>Turns: {turns}</h2></div>
      )}
    </div>
  );
};

export default App;

// const displayLeaderBoard = () => {
//   return (
//     <div>
//       <h2>You won!</h2>
//       <div className="leaderboard">
//         <h2>Enter your name!</h2>
//         <form ref={currentScore}>
//           <UserScore label={"Name: "} name={"userName"} />
//         </form>
//         <button onClick={handleSubmitScore}>Submit</button>
//       </div>
//     </div>
//   );
// };

// function handleSubmitScore() {
//   let form = currentScore.current;
//   const userName = form.userName.value;
//   if (!userName) return;

//   const score = {
//     name: userName,
//     score: turns,
//   };
//   axios.post("/leaderboard", score);
// }
