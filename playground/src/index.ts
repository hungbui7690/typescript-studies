/*
  Working With Axios Types P3
  - https://jsonplaceholder.typicode.com/users/1

  - based on the data, we can create interface 

*/

import axios from 'axios'

// create interface based on the data
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

// T = User
axios
  .get<User>('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => {
    const { data } = res // now data has type of User
    data.company.catchPhrase // now, we can get all properties of User
    printUser(data) // (b)
  })
  .catch((e) => console.log(e))

// (a)
function printUser(user: User) {
  console.log(user.name)
  console.log(user.email)
  console.log(user.phone)
}
