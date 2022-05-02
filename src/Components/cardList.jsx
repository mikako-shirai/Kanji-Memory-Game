import React from 'react';

// import Card from './Card.jsx.js';

const CardList = (cards) => {
  return(
    <div className='card-grid'>
      {cards.map(card => <div card={card} key={card.meaning}>card</div>)}
    </div>
  );
};       

 export default CardList;
