import React, { useState, useEffect } from "react";
import axios from "axios";

import CardList from './CardList.jsx';
import SubmitName from './SubmitName.jsx';
import LeaderBoard from "./LeaderBoard.jsx";
import "../styles/app.css";

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [cardsFlipped, setCardsFlipped] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);
  const [showSubmitName, setShowSubmitName] = useState(false);

  const getAllCards = async () => {
    const res = await axios.get("/kanji");
    const allCards = res.data;

    //                                                    delete later ->
    allCards.splice(4);
    allCards.forEach(card => { card.meaning = "fire"; });
    //                                                    delete later <-

    const shuffledCards = allCards.sort(() => 0.5 - Math.random());
    setCards(shuffledCards);
  };

  const setNewGame = async () => {
    await getAllCards();
    setCardsFlipped(0);
    setChoice1(null);
    setChoice2(null);
    setTurns(0);
  };

  const cardClickHandler = (card) => {
    if (card.flipped) return;
    card.flipped = true;
    setTurns(turns + 1);
    setCurrentCard(card);
    setChoices();
  };

  const setChoices = () => {
    if (!choice1) {
      setChoice1(currentCard);
    } else if (!choice2) {
      setChoice2(currentCard);
    }
  };

  // const checkMatch = () => {
  //   if (choice1 && choice2) {
  //     if (choice1.meaning === choice2.meaning) {
  //       choice1.flipped = true;
  //       choice2.flipped = true;

  //       setChoice1(null);
  //       setChoice2(null);
  //       setTurns(turns + 1);
  //       setCardsFlipped(cardsFlipped + 2);
  //       console.log("MATCH");
  //     } else {
  //       setTimeout(() => {
  //         choice1.flipped = false;
  //         choice2.flipped = false;
  //         setTurns(turns + 1);
  //         setChoice1(null);
  //         setChoice2(null);
  //       }, "800");
  //       console.log("DIDN'T MATCH");
  //     }
  //   }
  // };

  const checkMatch = async () => {
    choice1.flipped = choice1.meaning === choice2.meaning;
    choice2.flipped = choice1.flipped;

    if (choice1.flipped) {;               // delete later
      await setCardsFlipped(cardsFlipped + 2);
      console.log("cardsFlipped : ", cardsFlipped);
      console.log("cards.length : ", cards.length);
    };
    console.log(choice1.flipped ? "MATCH" : "DIDN'T MATCH");

    setChoice1(null);
    setChoice2(null);
  };

  const displayLeaderBoard = ()=>{
    showLeaderBoard ? setShowLeaderBoard(false) : setShowLeaderBoard(true);
  }

  useEffect(() => {
    if (cardsFlipped === cards.length - 2) setShowSubmitName(true);
  }, [cardsFlipped]);

  useEffect(() => {
    if (choice2) checkMatch();
  }, [choice2]);

  return (
    <div>
      <h1>Kanji Memory Game</h1>
      <button className="new-game-btn" onClick={setNewGame}>New Game</button>

      {showSubmitName && <SubmitName turns={turns} setShowSubmitName={setShowSubmitName} />}

      <CardList cards={cards} cardClickHandler={cardClickHandler} />

      {cards.length > 0 && <div className="display-turns"><h2>Turns: {turns}</h2></div>}

      <button className="board-btn" onClick={displayLeaderBoard}>Lead Board</button>
      {showLeaderBoard && <LeaderBoard />}
    </div>
  );
};

export default App;
