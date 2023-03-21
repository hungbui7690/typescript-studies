/*
  useRef With TypeScript P3

*/

import React, { useState } from 'react'
import './App.css'
import ShoppingList from './components/ShoppingList'
import Item from './models/items'

import ShoppingListForm from './components/ShoppingListForm'

function App() {
  const [items, setItems] = useState<Item[]>([])

  // (***)
  const addItem = (product: string) => {
    console.log(product)
  }

  return (
    <div className='App'>
      <ShoppingList items={items} />

      {/* (***) */}
      <ShoppingListForm onAddItem={addItem} />
    </div>
  )
}

export default App
