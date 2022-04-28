import './App.css';
import { useState, useEffect } from 'react'
const axios = require('axios')
// import cardList from './cardlist.jsx'


const kanjiArr = [{name: "fire", meaning: "fire", flipped: false},
 {name: "火", meaning: "fire", flipped: false},
 {name: "water", meaning: "water", flipped: false},
 {name: "水", meaning: "water", flipped: false},
 {name: "earth", meaning: "earth", flipped: false},
 {name: "土", meaning: "earth", flipped: false},
 {name: "tree", meaning: "tree", flipped: false},
 {name: "木", meaning: "tree", flipped: false},
 {name: "gold", meaning: "gold", flipped: false},
 {name: "金", meaning: "gold", flipped: false},
 {name: "sun", meaning: "sun", flipped: false},
 {name: "日", meaning: "sun", flipped: false}
];


export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState(null);
  const [choice1, setChoice1] = useState(null)
  const [choice2, setChoice2] = useState(null)
  const [turns, setTurns] = useState(0)


  function cardShuffle() {
    let shuffled = [...kanjiArr].sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}));
    setCards(shuffled)
    setTurns(0)
    setFlipped(0)
  }
  
  function checkMatch(){
    if(choice1 && choice2){
      if (choice1.meaning === choice2.meaning ) {
        choice1.flipped = true;
        choice2.flipped = true;
    
        setChoice1(null);
        setChoice2(null)
        setTurns(turns + 1)
        setFlipped(flipped +2)

        console.log("MATCH")       
      } else {

        setTimeout(() => {
          choice1.flipped = false;
          choice2.flipped = false;
          setChoice1(null);
          setChoice2(null);    
          setTurns(turns + 1)
          }, "800")

        console.log("DIDN'T MATCH")
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
  }

  function displayCards() { 
    return cards.map(card => {
        return (
         <ul 
         className = {`card${card.flipped === true ? "-front" : '-flipped'}`} 
         key={card.id} 
         onClick={() => handleClick(card)}>
           {card.name}</ul>
        )
    })
   }


  useEffect(() => {
  //   fetch("/kanji")
  //     .then((data) => {return data})
  //     .then(data => console.log(data));
  // }, []);


  axios.get('/kanji').then(resp => {

    console.log("axios", resp.data);


})

axios.get('/kanji', {
  proxy: {
    host: 'localhost',
    port: 8080
  }
}).then(data => console.log(data));

});
  
// (async() => {
//   const res = await axios.get('/kanji', {
//     proxy: {
//       host: 'localhost',
//       port: 8080
//     }
//   });
//   console.log("proxy test", res.data);
// })();





  //  const displayCardsFromDB = async() => {
  //   const res = await axios.get("/kanji")
  //   const data = [res.data.test]
  //   console.log(data)

  //  }

  //  useEffect(() => {
  //   displayCardsFromDB()
  //   }, [])

  

    // .then(body => {
    //    const reader = body.getReader();
    //    return reader;
    // })
    
    // .then(data => data.body)
    // .then(data => console.log(data))
    
    // .then(data => {
    //   console.log(data[0])
    //   setCards(data[0])
    // })

    // .catch((err) => {
    //   console.log(`ERROR`, err)
    // })



// async function displayCardsFromDB() {
// axios
//  .get("/kanji")
//  .then(data => console.log(data))
//  .catch(err => console.log(err))

// }








  useEffect(() =>{
    checkMatch();
    },[choice1, choice2])

    // useEffect(() => {
    //   // if they matched => we keep them
    //    //else we flip them back, [turn]
    //   }, [flipped]);
    
  useEffect(() => {
        if (flipped === cards.length){
          console.log("YOU WON")
        }
    
      }, [flipped]);
    
  // useEffect(()=>{
  //   return (<div></div>)
  // },[gameOver])





  return (
      <div> 
      <div className = "card-display">
        {/* {displayCardsFromDB()} */}
        {cards}
      </div>
      <div className = "score-display">{`Score -> ${turns}`}</div>

      <button className='new-game-btn' onClick={cardShuffle}>New Game</button>
      </div>
      )

};

  

  




