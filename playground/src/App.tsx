/*
  A Note on ReactFC
  - FC === FunctionalComponent 
    > some tutorial use this 
      > test in Greeter.tsx

*/

import React from 'react'
import './App.css'

import Greeter from './components/Greeter'

function App() {
  return (
    <div className='App'>
      <Greeter />
    </div>
  )
}

export default App
