import React from 'react'

const ShoppingList = (): JSX.Element => {
  // (***)
  const items = [
    { id: 1, product: 'Lemon', quantity: 3 },
    { id: 2, product: 'Chicken', quantity: 1 },
    { id: 3, product: 'Milk', quantity: 2 },
  ]

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {/* (***) */}
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
