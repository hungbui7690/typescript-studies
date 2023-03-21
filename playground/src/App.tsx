/*
  useState With TypeScript P2

*/

import React, { useState } from 'react'
import './App.css'
import ShoppingList from './components/ShoppingList'

// (1)
interface Item {
  id: number
  product: string
  quantity: number
}

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
