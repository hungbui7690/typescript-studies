/*
  Interface - Multiple Inheritance
  
*/

interface Person {
  name: string
}

interface Employee {
  readonly id: number
  email: string
}

// here
interface Engineer extends Person, Employee {
  level: string
  languages: string[]
}

const pierre: Engineer = {
  name: 'Pierre',
  id: 5452,
  email: 'pierre@gmail.com',
  level: 'Senior',
  languages: ['JS', 'Python'],
}
