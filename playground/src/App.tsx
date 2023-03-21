/*
  Creating Our ShoppingList Component P3
  - move data to App.js

*/

import React from 'react'
import './App.css'
import ShoppingList from './components/ShoppingList'

function App() {
  // move here
  const items = [
    { id: 1, product: 'Lemon', quantity: 3 },
    { id: 2, product: 'Chicken', quantity: 1 },
    { id: 3, product: 'Milk', quantity: 2 },
  ]

  // pass props
  return (
    <div className='App'>
      <ShoppingList items={items} />
    </div>
  )
}

export default App
