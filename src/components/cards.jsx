import React, { useState, useEffect } from 'react';

function Cards() {
  let allMonkeys = ['hoppyMonkey.gif', 'berryMonkey.gif', 'miniMonkey.gif', 'shooterMonkey.gif', 'swagMonkey.gif','bathMonkey.gif','businessMonkey.gif','cheekyMonkey.gif','cycleMonkey.gif','dogMonkey.gif','prettyMonkey.gif','skaterMonkey.gif','slideMonkey.gif','spinMonkey.gif','zenMonkey.gif','devMonkey.gif','ironingMonkey.gif','blackMonkey.gif','puppetMonkey.gif','rangaMonkey.gif'];
  const [monkeys, setMonkeys] = useState(() => randomTen(allMonkeys));
  const [clickedMonkeys, setClickedMonkeys] = useState([]);
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState()

  useEffect(() => {
    const shuffledMonkeys = shuffleArray(monkeys);
    setMonkeys(shuffledMonkeys);
  }, [clickedMonkeys]);

  function handleClick(gif) {
    if (clickedMonkeys.includes(gif)) {
      console.log("Monkey clicked already");
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
    const selectedElements = newArray.slice(0, 10);
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

  return (
    <>
      <h1>Score: {score}</h1>
      <h1>High Score: {highScore}</h1>
      {monkeys.map((gif, index) => (
        <div key={index} onClick={() => handleClick(`/gifs/${gif}`)} style={{ cursor: 'pointer' }}>
          <img src={`/gifs/${gif}`} alt={`Gif ${index + 1}`} />
        </div>
      ))}
    </>
  );
}

export default Cards;
