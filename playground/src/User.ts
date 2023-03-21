// import type { Person } from './types' // method 1
import { type Person } from './types' // method 2

class User implements Person {
  constructor(public username: string, public email: string) {}

  logout() {
    console.log(`${this.username} logs out!!`)
  }
}

export default User

export function userHelper() {
  console.log(`userHelper()`)
}
