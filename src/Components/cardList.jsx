import React, { useState, useEffect } from "react";

// import Card from './Card.jsx.js';

const CardList = ({ cards, cardClickHandler }) => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setShowCards(true);
  }, [cards]);

  return(
    <div className='card-grid'>
      {showCards && cards.map((card) => {
        return (
          <ul
            className={`card${card.flipped ? "-front" : "-flipped"}`}
            key={card.id}
            onClick={() => cardClickHandler(card)}
          >
            {card.name}
          </ul>
        )})
      }
    </div>



    // <div className='card-grid'>
    //   {cards.map(card => <div card={card} key={card.meaning}>card</div>)}
    // </div>
  );
};       

 export default CardList;
