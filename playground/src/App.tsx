/*
  Creating Our ShoppingItem Form
  - create ShoppingListForm

*/

import React, { useState } from 'react'
import './App.css'
import ShoppingList from './components/ShoppingList'
import Item from './models/items'

import ShoppingListForm from './components/ShoppingListForm'

function App() {
  const [items, setItems] = useState<Item[]>([])

  return (
    <div className='App'>
      <ShoppingList items={items} />
      <ShoppingListForm />
    </div>
  )
}

export default App
