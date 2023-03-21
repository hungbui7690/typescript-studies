import React, { useRef } from 'react'

interface ShoppingListFormProps {
  onAddItem: (product: string, quantity: number) => void // (***)
}

const ShoppingListForm = ({
  onAddItem,
}: ShoppingListFormProps): JSX.Element => {
  const productInputRef = useRef<HTMLInputElement>(null)
  const quantityInputRef = useRef<HTMLInputElement>(null) // (***)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newProduct = productInputRef.current!.value

    const quantity = quantityInputRef.current!.value // (***)

    onAddItem(newProduct, Number(quantity)) // (***)
    productInputRef.current!.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={productInputRef} type='text' placeholder='Product Name' />
      <input type='number' min={0} ref={quantityInputRef} />
      <button type='submit'>Add</button>
    </form>
  )
}

export default ShoppingListForm
