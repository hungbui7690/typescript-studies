/*
  useState With TypeScript P1

*/

import React, { useState } from 'react'
import './App.css'
import ShoppingList from './components/ShoppingList'

function App() {
  // (***) type === never
  const [items, setItems] = useState([])

  return (
    <div className='App'>
      <ShoppingList items={items} />
    </div>
  )
}

export default App
