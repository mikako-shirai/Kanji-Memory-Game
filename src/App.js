import "./App.css";
import { useState, useEffect } from "react";
const axios = require("axios");
// import cardList from './cardlist.jsx'

export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState(null);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [turns, setTurns] = useState(0);

  const getCardsAndShuffle = async () => {
    const res = await axios.get("https://cc26-kanji-memory-game.herokuapp.com/");
    const cards = res.data;
    const shuffledCards = cards.sort(() => 0.5 - Math.random());
    setCards(shuffledCards);
    setTurns(0);
    setFlipped(0);

    displayCards(cards);
  };

  //run cardShuffle after getCards is finished running

  // const cardShuffle = async () => {
  //   const shuffledCards = await cards.sort(() => Math.random() - 0.5);
  //   setCards(shuffledCards);
  //   setTurns(0);
  //   setFlipped(0);
  //   console.log(`shuffled!`, shuffledCards);
  // };

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

  const displayTurns = () => {
    return <h2>Turns: {turns}</h2>;
  };

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

  useEffect(() => {
    checkMatch();
  }, [choice1, choice2]);

  // useEffect(() => {
  //   // if they matched => we keep them
  //    //else we flip them back, [turn]
  //   }, [flipped]);

  useEffect(() => {
    if (flipped === cards.length) {
      console.log("YOU WON");
    }
  }, [flipped]);

  // useEffect(()=>{
  //   return (<div></div>)
  // },[gameOver])

  return (
    <div>
      <h1>Kanji Memory Game</h1>

      <button className="new-game-btn" onClick={getCardsAndShuffle}>
        New Game
      </button>
      <div className="card-display">{displayCards(cards)}</div>

      {cards.length > 0 && (
        <div className="display-turns">{displayTurns()}</div>
      )}
    </div>
  );
}
