/*
  Props With TypeScript P2
  - need to setup in Greeter

*/

import React from 'react'
import './App.css'

import Greeter from './components/Greeter'

function App() {
  // (***)
  return (
    <div className='App'>
      <Greeter person='Bic' />
    </div>
  )
}

export default App
