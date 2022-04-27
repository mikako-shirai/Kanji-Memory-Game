import React from 'react'
import card from './card.jsx';

export default function cardList(cards) {
    return(
        <div className='card-grid'>
            {cards.map(card => {
                return <card card={card} key={card.meaning} />
            })}
        </div>
    )
}