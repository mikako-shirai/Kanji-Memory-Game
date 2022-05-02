import React from 'react';

// import card from './card.jsx.js';

const CardList = (cards) => {
  return(
    <div className='card-grid'>
      {cards.map(card => <div card={card} key={card.meaning}>card</div>)}
    </div>
  );
};       

 export default CardList;
