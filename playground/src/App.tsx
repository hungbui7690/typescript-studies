/*
  useState With TypeScript P3
  - since we use the interface many times > create a separated file 
    > create models/items.ts > contain TS definition 

*/

import React, { useState } from 'react'
import './App.css'
import ShoppingList from './components/ShoppingList'

import Item from './models/items' // (***)

function App() {
  // (2) use here
  const [items, setItems] = useState<Item[]>([])

  return (
    <div className='App'>
      <ShoppingList items={items} />
    </div>
  )
}

export default App
