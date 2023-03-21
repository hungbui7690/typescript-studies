/*
  Updating The State P2
  - we can use uuid as id 
    > npm i uuid
    > npm i --save-dev @types/uuid
    
*/

import React, { useState } from 'react'
import './App.css'
import ShoppingList from './components/ShoppingList'
import Item from './models/items'
import ShoppingListForm from './components/ShoppingListForm'

import { v4 as getID } from 'uuid' // error > need to install @types/uuid

function App() {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (product: string) => {
    // (***)
    setItems([...items, { id: getID(), product, quantity: 1 }])
  }

  return (
    <div className='App'>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  )
}

export default App
