/*
  Working With Axios Types P4
  - now, we will get list of Users
    > https://jsonplaceholder.typicode.com/users

*/

import axios from 'axios'

interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

// T = User[]
axios
  .get<User[]>('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    const { data } = res
    data.forEach(printUser) // (***)
  })
  .catch((e) => console.log(e))

function printUser(user: User) {
  console.log(user.name)
  console.log(user.email)
  console.log(user.phone)
  console.log('***********')
}
