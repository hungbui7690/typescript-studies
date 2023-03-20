/*
  Interface Method Parameters
  
*/

interface Product {
  name: string
  price: number

  // parameter
  applyDiscount(discount: number): number
}

const shoes: Product = {
  name: 'Blue Suede Shoes',
  price: 100,

  // use here
  applyDiscount(amount: number): number {
    const newPrice = this.price * (1 - amount)
    this.price = newPrice
    return this.price
  },
}

console.log(shoes.applyDiscount(0.4))
