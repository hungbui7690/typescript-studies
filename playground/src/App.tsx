/*
  Add Quantity Input

*/

import React, { useState } from 'react'
import './App.css'
import ShoppingList from './components/ShoppingList'
import Item from './models/items'
import ShoppingListForm from './components/ShoppingListForm'
import { v4 as getID } from 'uuid'

function App() {
  const [items, setItems] = useState<Item[]>([])

  // (***)
  const addItem = (product: string, quantity: number) => {
    setItems([...items, { id: getID(), product, quantity }])
  }

  return (
    <div className='App'>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  )
}

export default App
