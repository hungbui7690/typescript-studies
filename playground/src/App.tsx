/*
  Creating Our ShoppingList Component P1
  - hierarchy
    > App
      - ShoppingList
        > ShoppingListForm

  - create components/ShoppingList & import

*/

import React from 'react'
import './App.css'
import ShoppingList from './components/ShoppingList' // import

function App() {
  return (
    <div className='App'>
      <ShoppingList />
    </div>
  )
}

export default App
