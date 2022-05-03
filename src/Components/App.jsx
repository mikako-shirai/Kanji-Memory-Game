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
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);
  const [showSubmitName, setShowSubmitName] = useState(false);

  const getAllCards = async () => {
    const res = await axios.get("/kanji");
    const allCards = res.data;

    //                                                    delete later ->
    allCards.splice(4);
    // allCards.forEach(card => { card.meaning = "fire"; });
    //                                                    delete later <-

    const shuffledCards = allCards.sort(() => 0.5 - Math.random());
    setCards(shuffledCards);
  };

  const setNewGame = async () => {
    await getAllCards();
    // setTurns(0);
    // setCardsFlipped(0);
  };

  const cardClickHandler = (card) => {
    if (card.flipped) return;
    card.flipped = true;
    setTurns(turns + 1);
    setChoices(card);
    if (checkFlips()) setShowSubmitName(true);
  };

  const setChoices = (card) => {
    if (turns % 2 === 1) {
      setChoice1(card)
     } else {
      setChoice2(card);
     }
    checkMatch();

    console.log("choices : ", choice1, choice2);
    console.log("turns : ", turns);
    console.log("cardsFlipped : ", cardsFlipped);
  };

  const checkMatch = () => {
    if (choice1 && choice2) {
      choice1.flipped = choice1.meaning === choice2.meaning;
      choice2.flipped = choice1.flipped;

      if (choice1.flipped) setCardsFlipped(cardsFlipped + 2);
      console.log(choice1.flipped ? "MATCH" : "DIDN'T MATCH");

      setChoice1(null);
      setChoice2(null);
    }
  };

  const checkFlips = () => {
    for (const card of cards) if (!card.flipped) return false;
    return true;
  };

  const displayLeaderBoard = () => {
    showLeaderBoard ? setShowLeaderBoard(false) : setShowLeaderBoard(true);
  };

  useEffect(() => {
    if (cardsFlipped === cards.length) {
      setTurns(0);
      setCardsFlipped(0);
      setShowSubmitName(true);
    }
  }, [cardsFlipped]);

  useEffect(() => {
    if (choice2) checkMatch();
  }, [choice2]);

  return (
    <div>
      <h1>Kanji Memory Game</h1>
      <button className="new-game-btn" onClick={setNewGame}>
        New Game
      </button>

      {showSubmitName && <SubmitName turns={turns} setShowSubmitName={setShowSubmitName} />}

      <CardList cards={cards} cardClickHandler={cardClickHandler} />

      {cards.length > 0 && (
        <div className="display-turns">
          <h2>Turns: {turns}</h2>
        </div>
      )}


      <button className="board-btn" onClick={displayLeaderBoard}>Leader Board</button>

      {showLeaderBoard && <LeaderBoard />}
    </div>
  );
};

export default App;
