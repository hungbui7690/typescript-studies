/*
  Our First Component
  - create components/Greeter.tsx

  - pic > cheat-sheet
    > https://react-typescript-cheatsheet.netlify.app/


*/

import React from 'react'
import './App.css'

import Greeter from './components/Greeter' // (***)

function App() {
  return (
    <div className='App'>
      <Greeter />
    </div>
  )
}

export default App
