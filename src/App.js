import './App.css';
import { useState, useEffect } from 'react'
// import cardList from './cardlist.jsx'

const kanjiArr = [{name: "fire", meaning: "fire", flipped: false},
 {name: "火", meaning: "fire", flipped: false},
 {name: "water", meaning: "water", flipped: false},
 {name: "水", meaning: "water", flipped: false},
 {name: "earth", meaning: "earth", flipped: false},
 {name: "土", meaning: "earth", flipped: false}
];


export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [choice1, setChoice1] = useState(null)
  const [choice2, setChoice2] = useState(null)
  const [turns, setTurns] = useState(0)


  function cardShuffle() {
    let shuffled = [...kanjiArr].sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}));



    setCards(shuffled)
    setTurns(0)
  }
  
  function checkMatch(){
    if(choice1 && choice2){
      if (choice1.meaning === choice2.meaning ) {
        choice1.flipped = true;
        choice2.flipped = true;
    
        setChoice1(null);
        setChoice2(null);
      } else {
        choice1.flipped = false;
        choice2.flipped = false;
        setChoice1(null);
        setChoice2(null);
      }
    }
  }
  
  function setChoices(card){
    if (!choice1 || !choice2){
      if(!choice1){
        setChoice1(card)
      } else {
        setChoice2(card)
      }
    }
  }

  function handleClick(card) {

    if (!card.flipped){
      card.flipped = true
      setChoices(card);
    }
    setTurns(turns + 1)
  }

  function displayCards() { 
    return cards.map(card => {
        return (
        <div className = "card" key={card.id} onClick={() => handleClick(card)}>
         <ul className = "card-front" >{card.name}</ul>
         <ul className = "card-flipped" >{card.name}</ul>
        </div>)
    })
   }

  useEffect(() =>{
    checkMatch();
    },[choice1, choice2])

    // useEffect(() => {
    //   // if they matched => we keep them
    //    //else we flip them back, [turn]
    //   }, [flipped]);
    
      useEffect(() => {
    
      }, [turns]);
    
  
  return (
      <div> 
      <div className = "card-display">
        {displayCards()}
      </div>
      <button onClick={cardShuffle}>New Game</button>
      </div>
      )

};

  

  




