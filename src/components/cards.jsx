import React from 'react';

function Cards() {
  const gifList = [
'swagMonkey.gif','bathMonkey.gif','businessMonkey.gif','cheekyMonkey.gif','cycleMonkey.gif','dogMonkey.gif','prettyMonkey.gif','skaterMonkey.gif','slideMonkey.gif','spinMonkey.gif','zenMonkey.gif','devMonkey.gif','ironingMonkey.gif','blackMonkey.gif','puppetMonkey.gif','rangaMonkey.gif'
  ];

  return (
    <>
      {gifList.map((gif, index) => (
        <img key={index} src={`/gifs/${gif}`} alt={`Gif ${index + 1}`} />
      ))}
    </>
  );
}

export default Cards;
