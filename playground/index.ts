/*
  Extending Interfaces
  - pic
  - inherits from another interface > similar to class
  
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

/////////////////////////////////

// (***)
interface ServiceDog extends Dog {
  job: 'Drug Sniffer' | 'Bomb' | 'Guide Dog'
}

const chewy: ServiceDog = {
  name: 'Chewy',
  age: 2.5,
  breed: 'Lab',
  bark() {
    return `bark!`
  },
  job: 'Guide Dog',
}
