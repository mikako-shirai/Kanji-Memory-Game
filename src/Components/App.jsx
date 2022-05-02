import { useState, useEffect, useRef } from "react";
import axios from "axios";

import UserScore from "./UserScore.jsx";
// import CardList from './CardList.jsx';
import "../styles/app.css";

const App = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState(null);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [turns, setTurns] = useState(0);

  const userScore = useRef(null);

  const getCardsAndShuffle = async () => {
    const res = await axios.get("/kanji");
    const cards = res.data;
    const shuffledCards = cards.sort(() => 0.5 - Math.random());
    setCards(shuffledCards);
    setTurns(0);
    setFlipped(0);

    displayCards(cards);
  };

  const displayCards = (cards) => {
    return cards.map((card) => {
      return (
        <ul
          className={`card${card.flipped === true ? "-front" : "-flipped"}`}
          key={card.id}
          onClick={() => handleClick(card)}
        >
          {card.name}
        </ul>
      );
    });
  };

  const displayTurns = () => <h2>Turns: {turns}</h2>;

  const checkMatch = () => {
    if (choice1 && choice2) {
      if (choice1.meaning === choice2.meaning) {
        choice1.flipped = true;
        choice2.flipped = true;

        setChoice1(null);
        setChoice2(null);
        setTurns(turns + 1);
        setFlipped(flipped + 2);
        console.log("MATCH");
      } else {
        setTimeout(() => {
          choice1.flipped = false;
          choice2.flipped = false;
          setTurns(turns + 1);
          setChoice1(null);
          setChoice2(null);
        }, "800");
        console.log("DIDN'T MATCH");
      }
    }
  };

  const setChoices = (card) => {
    if (!choice1 || !choice2) {
      if (!choice1) {
        setChoice1(card);
      } else {
        setChoice2(card);
      }
    }
  };

  const handleClick = (card) => {
    if (!card.flipped) {
      card.flipped = true;
      setChoices(card);
    }
  };

  const displayLeaderBoard = () => {
    return (
      <div>
        <h2>You won!</h2>
        <div className="leaderboard">
          <h2>Enter your name!</h2>
          <form ref={userScore}>
            <UserScore label={"Name: "} name={"userName"} />
          </form>
          <button onClick={handleSubmitScore}>Submit</button>
        </div>
      </div>
    );
  };

  function handleSubmitScore() {
    let form = userScore.current;
    const userName = form["userName"].value;

    if (userName) {
      const score = {
        name: userName,
        score: turns,
      };
      axios.post("/leaderboard", score);
    }
  }

  useEffect(() => {
    checkMatch();
  }, [choice1, choice2]);

  useEffect(() => {
    if (flipped === cards.length) {
      console.log("YOU WON");
    }
  }, [flipped]);

  return (
    <div>
      <h1>Kanji Memory Game</h1>
      <button className="new-game-btn" onClick={getCardsAndShuffle}>
        New Game
      </button>

      {flipped === cards.length && displayLeaderBoard()}

      <div className="card-display">{displayCards(cards)}</div>

      {cards.length > 0 && (
        <div className="display-turns">{displayTurns()}</div>
      )}
    </div>
  );
};

export default App;
