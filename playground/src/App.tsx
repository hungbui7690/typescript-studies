/*
  Props With TypeScript P3
  - pic
  - sometimes, we want to pass many things > if we pass inline like this > noisy 
    > Greeter.tsx > create type alias / interface

*/

import React from 'react'
import './App.css'

import Greeter from './components/Greeter'

function App() {
  return (
    <div className='App'>
      <Greeter person='Bic' />
    </div>
  )
}

export default App
