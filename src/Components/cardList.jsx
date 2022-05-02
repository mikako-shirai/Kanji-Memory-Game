import React, { useState, useEffect } from "react";

const CardList = ({ cards, cardClickHandler }) => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setShowCards(true);
  }, [cards]);

  return(
    <>
      {showCards && cards.map((card, index) => {
        return (
          <ul
            className={`card${card.flipped ? "-front" : "-flipped"}`}
            key={index}
            onClick={() => cardClickHandler(card)}
          >
            {card.name}
          </ul>
        )})
      }
    </>
  );
};       

 export default CardList;
