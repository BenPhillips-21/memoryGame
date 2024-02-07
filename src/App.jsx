import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards.jsx'
import { Helmet } from 'react-helmet';

function App() {

  return (
    <>
            <Helmet>
        <title>Monkey Memory Game</title>
        <link rel="icon" type="image/png" href="cool.png" sizes="32x32" />
      </Helmet>
      <Cards></Cards>
    </>
  )
}

export default App
