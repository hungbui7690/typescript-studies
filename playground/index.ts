/*
  Reopening Interfaces
  - pic
  - after create interface, we can add more properties to that interface 
  - with type alias, we cannot do that
  
*/

interface Dog {
  name: string
  age: number
}

interface Dog {
  breed: string
  bark(): string
}

const elton: Dog = {
  name: 'Elton',
  age: 4,
  breed: 'Australian Shepherd',
  bark() {
    return `WOOF WOOF!`
  },
}
