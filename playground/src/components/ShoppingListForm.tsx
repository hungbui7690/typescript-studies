import React, { useRef } from 'react'

const ShoppingListForm = (): JSX.Element => {
  // (***)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // (***)
    const inputValue = inputRef.current!.value
    console.log(inputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' placeholder='Product Name' />
      <button type='submit'>Add</button>
    </form>
  )
}

export default ShoppingListForm
