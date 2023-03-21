import React from 'react'

// (1)
interface Item {
  id: number
  product: string
  quantity: number
}

// (2)
interface ShoppingListProps {
  items: Item[]
}

// (3)
const ShoppingList = (props: ShoppingListProps): JSX.Element => {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {/* (4) */}
        {props.items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
