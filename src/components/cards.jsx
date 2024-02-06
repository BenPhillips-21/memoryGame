import React, { useState, useEffect } from 'react';
import '../styles.css';

function Cards() {
  let allMonkeys = ['animatedMonkey.gif', 'beanieMonkey.gif', 'boatMonkey.gif', 'crazyMonkey.gif', 'danceMonkey.gif', 'shirtMonkey.gif', 'hoppyMonkey.gif', 'berryMonkey.gif', 'miniMonkey.gif', 'shooterMonkey.gif', 'swagMonkey.gif','bathMonkey.gif','businessMonkey.gif','cheekyMonkey.gif','cycleMonkey.gif','dogMonkey.gif','prettyMonkey.gif','skaterMonkey.gif','slideMonkey.gif','spinMonkey.gif','zenMonkey.gif','devMonkey.gif','ironingMonkey.gif','blackMonkey.gif','puppetMonkey.gif','rangaMonkey.gif'];
  const [monkeys, setMonkeys] = useState(() => randomTen(allMonkeys));
  const [clickedMonkeys, setClickedMonkeys] = useState([]);
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    const shuffledMonkeys = shuffleArray(monkeys);
    setMonkeys(shuffledMonkeys);
  }, [clickedMonkeys]);

  function handleClick(gif) {
    if (clickedMonkeys.includes(gif)) {
      console.log("Monkey clicked already");
      if (score > highScore || highScore === 0) { setHighScore(score) }
      setScore(0)
      let newMonkeys = randomTen(allMonkeys)
      setMonkeys(newMonkeys)
      setClickedMonkeys([])
      return;
    }
    let newScore = score + 1
    setScore(newScore)
    setClickedMonkeys(prevClickedMonkeys => [...prevClickedMonkeys, gif], () => {
      console.log(clickedMonkeys); 
    });
  }

  function randomTen(array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
    }
    const selectedElements = newArray.slice(0, 14);
    return selectedElements;
  }

  function shuffleArray(array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
    }
    return newArray;
  }

  if (score === 14) {
    return (
      <>
        <h1>You beat the game!!!??!</h1>
        <h3>Well, this is awkward...</h3>
        <button onClick={() => window.location.reload()}>Play Again?</button>
      </>
    )
  }

  return (
    <> 
    <h1 style={{ marginTop: '-15px', marginBottom: '-10px'}}>Monkey Memory Game</h1>
    <h3 style={{ marginTop: '-50x' }}>Don't click the same monkey twice!</h3>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h2 style={{ marginTop: '0px', marginLeft: '30px', marginRight: '30px' }}>Score: {score}</h2>
      <h2 style={{ marginTop: '0px' }}>High Score: {highScore}</h2>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {monkeys.map((gif, index) => (
          <div key={index} onClick={() => handleClick(`/gifs/${gif}`)} style={{ cursor: 'pointer', margin: '5px' }}>
            <img src={`/gifs/${gif}`} alt={`Gif ${index + 1}`} style={{ border: '3px solid black', width: '150px', height: '150px' }} />
          </div>
        ))}
      </div>
    </>
  );   
}

export default Cards;
