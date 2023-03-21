/*
  Props With TypeScript P1

*/

import React from 'react'
import './App.css'

import Greeter from './components/Greeter'

function App() {
  // (***) pass props > error
  return (
    <div className='App'>
      <Greeter person='Bic' />
    </div>
  )
}

export default App
