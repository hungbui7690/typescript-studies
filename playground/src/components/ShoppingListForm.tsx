import React from 'react'

const ShoppingListForm = (): JSX.Element => {
  // (***)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submit Form!!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Product Name' />
      <button type='submit'>Add</button>
    </form>
  )
}

export default ShoppingListForm
