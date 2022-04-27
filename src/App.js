import './App.css';
import { useState, useEffect } from 'react'
// import cardList from './cardlist.jsx'

const kanjiArr = [{src: "fire", meaning: "fire", flipped: false},
 {src: "火", meaning: "fire", flipped: false},
 {src: "water", meaning: "water", flipped: false},
 {src: "水", meaning: "water", flipped: false},
 {src: "earth", meaning: "earth", flipped: false},
 {src: "土", meaning: "earth", flipped: false}
];


export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [turns, setTurns] = useState(0)


  function cardShuffle() {
    let shuffled = [...kanjiArr].sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}));

    setCards(shuffled)
    setTurns(0)
  }
  

  useEffect(() => {
  // if they matched => we keep them
   //else we flip them back, [turn]
  }, [flipped]);

  useEffect(() => {
    console.log(turns)


  }, [turns]);

  function handleClick() {
    console.log("card clicked")
    console.log(cards)
    setTurns(turns + 1)
  }

  function displayCards() {
   return cards.map(card => {
       return <ul className = "card" onClick={handleClick} id={card.id} >{card.src}</ul>
   })
  }
  
  return (
      <div> 
      <div className = "card-display">
        {displayCards()}
      </div>
      <button onClick={cardShuffle}>New Game</button>

      </div>
      )

};

  

  
  // post the images here



