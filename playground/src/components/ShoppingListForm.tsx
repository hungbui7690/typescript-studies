import React, { useRef } from 'react'

interface ShoppingListFormProps {
  onAddItem: (product: string) => void
}

const ShoppingListForm = ({
  onAddItem,
}: ShoppingListFormProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newProduct = inputRef.current!.value
    onAddItem(newProduct)
    inputRef.current!.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' placeholder='Product Name' />
      <button type='submit'>Add</button>
    </form>
  )
}

export default ShoppingListForm
