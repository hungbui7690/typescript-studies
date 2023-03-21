/*
  useRef With TypeScript P1
  - 2 ways to get the value of input: 
    + useState() 
    + useRef() > we will use this way

    > https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks

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
