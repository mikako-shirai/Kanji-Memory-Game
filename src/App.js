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
  const [turn, setTurn] = useState(0)

  useEffect(() => {
  // if they matched => we keep them
   //else we flip them back, [turn]
  }, [flipped]);

  useEffect(() => {


  }, [turn]);

  function handleClick() {
    console.log("card clicked")
  }

  function displayCards() {
   return kanjiArr.map(card => {
       return <card onClick={handleClick}>{card.src}</card>
   })


  }
  
  // setKanji(kanjiArr);
  return (
      <div> {displayCards()}
      </div>
      )

};

  

  
  // post the images here



