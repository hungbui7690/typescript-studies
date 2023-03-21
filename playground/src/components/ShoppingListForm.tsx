import React, { useRef } from 'react'

const ShoppingListForm = (): JSX.Element => {
  // check cheat sheets
  const inputRef = useRef()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submit Form!!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' placeholder='Product Name' />
      <button type='submit'>Add</button>
    </form>
  )
}

export default ShoppingListForm
